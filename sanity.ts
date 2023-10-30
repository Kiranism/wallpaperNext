import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { Image } from "./types";
const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET! || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  useCdn: process.env.NODE_ENV! === "production",
  apiVersion: "2021-10-21",
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
};
/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/

// i want to compress image that shown to render fast so use this
export const urlFor = (source: Image) =>
  createImageUrlBuilder(config).image(source).quality(20);
export const urlForDownload = (source: Image) =>
  createImageUrlBuilder(config).image(source).quality(100);

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);
