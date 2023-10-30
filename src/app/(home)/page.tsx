import { Card } from "@/components/Card";
import MasonryLayout from "@/components/MasonaryLayout";
import { categoryQuery, productQuery } from "@/query";
import { sanityClient } from "../../../sanity";
import Hero from "@/components/Hero";

export default async function page() {
  const products = await sanityClient.fetch(productQuery);
  console.log("products=>", products);

  return (
    <>
      <Hero />
      <MasonryLayout pins={products} isHome={true} />
    </>
  );
}
