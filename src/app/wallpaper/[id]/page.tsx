import CardItem from "@/components/CardItem";
import React from "react";
import { sanityClient } from "../../../../sanity";
import { categoryQuery, productWithIdQuery } from "@/query";

import RefCards from "@/components/RefCards";
import MasonryLayout from "@/components/MasonaryLayout";

export default async function page({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const productInfo = await sanityClient.fetch(productWithIdQuery(params.id));
  const products = await sanityClient.fetch(categoryQuery);
  console.log("products=>", products);
  console.log(productInfo[0].refproducts);
  return (
    <div className="container">
      <CardItem
        product={productInfo[0]}
        category={params.slug}
        download={true}
      />
      <h2 className="text-3xl font-bold tracking-tight text-center py-4">
        Related Wallpapers
      </h2>
      <RefCards pins={productInfo[0].refproducts} />
      <h2 className="text-3xl font-bold tracking-tight text-center py-4">
        More Categories
      </h2>
      <MasonryLayout pins={products} isHome={false} />
    </div>
  );
}
