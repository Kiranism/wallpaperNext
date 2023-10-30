import CardItem from "@/components/CardItem";
import React from "react";
import { sanityClient } from "../../../../../sanity";
import { productWithIdQuery } from "@/query";
import { Product } from "../../../../../types";
import RefCards from "@/components/RefCards";

export default async function page({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const productInfo = await sanityClient.fetch(productWithIdQuery(params.id));
  console.log(productInfo[0].refproducts);
  return (
    <div className="container">
      <CardItem
        product={productInfo[0]}
        category={params.slug}
        download={true}
      />
      <RefCards pins={productInfo[0].refproducts} />
    </div>
  );
}
