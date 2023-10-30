import Image from "next/image";
import React from "react";
import { urlFor } from "../../sanity";
import Link from "next/link";
import { RefProduct } from "../../types";
import { Card } from "./ui/card";

type RefCardProps = {
  pins: RefProduct[];
};

export default function RefCards({ pins }: RefCardProps) {
  console.log(pins);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {pins?.map((pin) => (
        <Link href={`/wallpaper/${pin?._id}`}>
          <Card className="card w-full glass relative mb-5 h-52">
            <figure>
              {pin && pin.image && (
                <Image
                  src={urlFor(pin.image).url()}
                  alt={pin?.description}
                  fill
                  className="max-h-550 max-w-34 object-contain"
                />
              )}
            </figure>
          </Card>
        </Link>
      ))}
    </div>
  );
}
