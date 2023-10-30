import { cn } from "@/lib/utils";
import React from "react";
import { Product } from "../../types";
import { urlFor } from "../../sanity";
import Link from "next/link";

type CardProps = {
  isHover: boolean;
  category: Product;
};
export function Card({ isHover, category }: CardProps) {
  return (
    <Link href={`/${category.slug.current}`}>
      <div className="relative my-5 h-[400px] lg:w-[300px]  rounded-md">
        <img
          src={urlFor(category.image).url()}
          alt={category.slug.current}
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 cursor-pointer",
            isHover ? "hover:opacity-100" : "opacity-100"
          )}
        >
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              {category.name}
            </h1>
            <p className="mt-2 text-sm text-gray-300 line-clamp-2">
              {category.description}
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              View More &rarr;
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
