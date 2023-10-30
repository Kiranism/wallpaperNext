"use client";
import Image from "next/image";
import React from "react";
import { urlFor, urlForDownload } from "../../sanity";
import { PinterestShareButton, WhatsappShareButton } from "react-share";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Link from "next/link";
import { Product } from "../../types";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Badge, badgeVariants } from "./ui/badge";
import { Button } from "./ui/button";
import Icons from "./shared/icons";

type CardItemProps = {
  product: Product;
  category: string;
  download?: boolean;
};

const CardItem = ({ product, category, download }: CardItemProps) => {
  const unique_id = product._id;
  const small_id = unique_id.slice(0, 4);
  const fileformat = urlFor(product.image).url().split(".")[3].split("?")[0];
  const handleDownload = () => {
    window.location.href = `${urlForDownload(product.image)
      .forceDownload(`${small_id}.${fileformat}`)
      .url()}`;
  };

  return (
    <div
      className={cn(
        "flex flex-col  h-96 sm:h-[548px] w-full justify-center mt-5 mb-5 lg:w-full"
      )}
    >
      <Card className="card w-full h-full glass relative mb-5 sm:w-full sm:h-full">
        <figure>
          <Image
            src={urlFor(product.image).url()}
            alt={category}
            layout="fill"
            objectFit="contain"
            className="max-h-550 max-w-34"
          />
        </figure>

        <Badge variant="secondary" className="absolute bottom-1 ml-2">
          {urlFor(product.image).url().split("-")[1].split(".")[0]}
        </Badge>
      </Card>
      <div className="flex justify-between">
        <div>
          <Badge variant="outline" className="mr-1">
            <PinterestShareButton
              url={
                download
                  ? `${process.env.NEXT_PUBLIC_DOMAIN_URL}/${category}/${product._id}`
                  : `${process.env.NEXT_PUBLIC_DOMAIN_URL}/${category}`
              }
              media={urlForDownload(product.image).url()}
              windowWidth={1000}
              windowHeight={730}
            >
              <svg
                className="w-6 h-6 text-pink-600 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
              </svg>
            </PinterestShareButton>
          </Badge>

          <Badge variant="outline">
            <WhatsappShareButton
              url={
                download
                  ? `${process.env.NEXT_PUBLIC_DOMAIN_URL}/${category}/${product._id}`
                  : `${process.env.NEXT_PUBLIC_DOMAIN_URL}/wallpaper/${product._id}`
              }
              title={small_id}
              separator=":: "
            >
              <svg
                className="w-6 h-6 text-green-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
            </WhatsappShareButton>
          </Badge>
        </div>
        {download ? (
          <AlertDialog>
            <AlertDialogTrigger>
              <Badge className="px-3 py-2">DOWNLOAD</Badge>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Download Wallpaper In Full Resolution
                </AlertDialogTitle>
                {/* <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription> */}
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
                <Button onClick={handleDownload}>Download</Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <label htmlFor={product._id} className="btn modal-button">
            <Link
              href={`/${category}/${product._id}`}
              className={cn(
                badgeVariants({ variant: "secondary" }),
                "btn modal-button text-sm flex gap-2 items-center px-2 py-1"
              )}
            >
              <Icons.download /> GET WALLPAPER
            </Link>
          </label>
        )}
      </div>
    </div>
  );
};

export default CardItem;
