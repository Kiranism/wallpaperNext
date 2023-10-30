import { categoryQuery, categoryWithSlugQuery } from "@/query";
import { sanityClient } from "../../../../sanity";
import CardItem from "@/components/CardItem";
import { Product } from "../../../../types";
import { Card } from "@/components/Card";

export default async function page({ params }: { params: { slug: string } }) {
  const productsInfo = await sanityClient.fetch(
    categoryWithSlugQuery(params.slug)
  );
  const categories: Product[] = await sanityClient.fetch(categoryQuery);
  console.log("cat=>", categories);
  const products = productsInfo[0]?.products;
  const productsLength = products.length + 1;
  console.log(products);
  return (
    <div className="container">
      <div className="flex gap-4 flex-col lg:flex-row ">
        <div className="flex-auto">
          {products?.map((product: Product) => (
            <CardItem product={product} category={params.slug} />
          ))}
        </div>
        <div className="flex-none">
          {categories?.slice(0, productsLength).map((cat) => (
            <Card isHover={false} category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}
