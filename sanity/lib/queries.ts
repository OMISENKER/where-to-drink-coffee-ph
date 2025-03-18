import { defineQuery } from "next-sanity";

// ownerId->{
//       _id,
//       name,
//       email,
//       userCategory,
//     },

export const CAFES_QUERY =
  defineQuery(`*[_type == "cafe" && defined(slug.current) && !defined($search) || cafeName match $search || cafeCategory match $search || location match $search] | order(_createdAt desc) {
    _id,
    cafeName,
    slug,
    description,
    cafeCategory,
    views,
    likes,
    ratings,
    storeHours,
    location,
    frontStoreImage,
    }`);

export const CAFE_BY_ID_QUERY =
  defineQuery(`*[_type == "cafe" && _id == $id][0]{
  _id,
    cafeName,
    slug,
    description,
    cafeCategory,
    ownerId->{
      _id,
      name,
      email,
      userCategory,
    },
    views,
    likes,
    ratings,
    storeHours,
    location,
    googleMapsLink,
    logoImage,
    frontStoreImage,
    menuImages,
    menuLink,
    priceRange,
    facebookLink,
    instagramLink,
  }`);

export const USER_BY_FACEBOOK_ID_QUERY =
  defineQuery(`*[_type == "user" && id == $id][0]{
  _id,
  id,
  name,
  email,
  userCategory,
}`);
