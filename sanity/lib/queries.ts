import { defineQuery } from "next-sanity";

export const CAFES_QUERY =
  defineQuery(`*[_type == "cafe" && defined(slug.current) && !defined($search) || cafeName match $search || cafeCategory match $search || location match $search] | order(_createdAt desc) {
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
