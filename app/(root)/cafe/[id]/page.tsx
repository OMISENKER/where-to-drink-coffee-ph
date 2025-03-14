import React from "react";
import { client } from "@/sanity/lib/client";
import { CAFE_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const cafe = await client.fetch(CAFE_BY_ID_QUERY, { id });
  if (!cafe) return notFound();

  const {
    _id,
    cafeName,
    slug,
    description,
    cafeCategory,
    ownerId,
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
  } = cafe;

  return (
    <div>
      <h1>{cafeName}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Page;
