export const categoryQuery =
  '*[_type == "category"] | order(priority desc, _updatedAt desc) ';

export const productQuery =
  '*[_type == "product"] | order(priority desc, _updatedAt desc)';

export const categoryWithSlugQuery = (
  id: string
) => `*[_type=="category" && slug.current=="${id}"]{
    name,
    description,
    slug,
    _id,
    image,
    tags,
    "products": *[_type=='product' && references(^._id)]| order(_createdAt desc)
  }`;

export const productWithIdQuery = (
  id: string
) => `*[_type=="product" && _id=="${id}"]{
    name,
    description,
    slug,
    _id,
    image,
    tags,
    "refproducts": *[ ^.tags[].value match tags[].value] | order(_createdAt asc)
  }`;
