import Image from "next/image";
import React from "react";
import { Category } from "../../types";
import { urlFor } from "../../sanity";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

interface MyComponentProps {
  product: Category;
  isHome: boolean;
}

export default function Pin({ product, isHome }: MyComponentProps) {
  return (
    <>
      <Link
        href={isHome ? `/wallpaper/${product._id}` : `/${product.slug.current}`}
      >
        <div className="relative rounded-md p-1">
          <Image
            className="h-auto max-w-full rounded-lg "
            width={500}
            height={500}
            src={urlFor(product.image).url()}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 hover:opacity-100 cursor-pointer">
            <div className="absolute bottom-2 left-4 text-left">
              <h1 className="text-base font-semibold text-white">
                <Balancer>{product.name}</Balancer>
              </h1>
              <p className="mt-2 mx-1 text-xs text-gray-300 capitalize line-clamp-2">
                {product.description}
              </p>
              <button className="mt-2 inline-flex cursor-pointer items-center text-xs font-semibold text-white">
                View More &rarr;
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
