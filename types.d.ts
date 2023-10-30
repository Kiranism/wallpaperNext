export type Tag = {
  value: string;
  label: string;
};

export type Image = {
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
};

export type Category = {
  description: string;
  _id: string;
  slug: {
    current: string;
    _type: string;
  };
  image: Image;
  _createdAt: string;
  _type: string;
  tags: Tag[];
  _rev: string;
  name: string;
  _updatedAt: string;
};

export type Slug = {
  current: string;
  _type: string;
};

// export type Refproduct = {
//   tags: Tag[];
//   image: {
//     _type: string;
//     asset: {
//       _ref: string;
//       _type: string;
//     };
//   };
//   _createdAt: string;
//   _rev: string;
//   _type: string;
//   description: string;
//   title?: string; // Add this if 'title' is optional
//   slug?: Slug; // Add this if 'slug' is optional
//   _updatedAt?: string; // Add this if '_updatedAt' is optional
//   name?: string; // Add this if 'name' is optional
//   category?: {
//     _ref: string;
//     _type: string;
//   };
// };

export type Product = {
  slug: Slug;
  _id: string;
  image: Image;
  tags: Tag[];
  refproducts: Refproduct[];
  name?: string; // Add this if 'name' is optional
  description?: string;
};

export type RefProduct = {
  description: string;
  _id: string;
  image: Image;
  _type: string;
  category: {
    _ref: string;
    _type: string;
  };
  _updatedAt: string;
  tags: Tag[]; // You can define a more specific type for 'tags' if needed
  _createdAt: string;
  _rev: string;
};
