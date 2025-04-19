import React from "react";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { unstable_after as after } from "next/server";
import { CAFE_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import {
  StarIcon,
  MapPin,
  Clock,
  Eye,
  ThumbsUp,
  Facebook,
  Instagram,
} from "lucide-react";
import Tag from "@/components/Tag";
import Link from "next/link";

import Image from "next/image";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const cafe = await client.fetch(CAFE_BY_ID_QUERY, { id });
  if (!cafe) return notFound();

  const {
    _id,
    cafeName,
    description,
    cafeCategory,
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

  after(async () => {
    await writeClient
      .patch(_id)
      .set({ views: views + 1 })
      .commit();
  });

  return (
    <div className="px-2 py-2 md:py-6 lg:py-8 md:px-[10%] lg:px-[20%] flex flex-col gap-4 justify-center">
      <div
        className="w-full h-48 max-h-52 lg:h-60 lg:max-h-60 bg-cover bg-center rounded-t-lg flex items-end justify-start pl-4 pb-4 lg:px-8 lg:pt-8 overflow-hidden"
        style={{
          backgroundImage: `url(${frontStoreImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Image
          src={logoImage}
          alt={cafeName}
          width={100}
          height={100}
          className="shadow-2xl aspect-auto rounded-lg max-h-[90%] w-1/3 md:w-1/5"
        />
      </div>
      <div className="flex flex-col gap-2 px-2">
        <p className="text-2xl font-semibold">{cafeName}</p>
        <div className="flex gap-2 h-fit w-full justify-between">
          <div className="flex gap-1 items-center">
            <div className="flex flex-row items-center justify-center gap-1">
              <StarIcon
                size={12}
                className={`${
                  (ratings ?? 0) === 0
                    ? "fill-amber-100"
                    : (ratings ?? 0) < 4
                      ? "fill-amber-200"
                      : "fill-amber-300"
                }`}
              />
              <p className="text-xs">{ratings}</p>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={12} />
              <p className="text-xs">{views}</p>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUp size={10} />
              <p className="text-xs">{likes}</p>
            </div>
          </div>
          <div className="mr-2 flex items-center text-xs gap-1 self-end">
            {facebookLink || instagramLink ? <p>Socials:</p> : null}
            {facebookLink && (
              <a href={facebookLink} target="_blank" rel="noreferrer">
                <Facebook size={20} className="hover:fill-blue-400" />
              </a>
            )}
            {instagramLink && (
              <a href={instagramLink} target="_blank" rel="noreferrer">
                <Instagram size={20} className="hover:fill-red-200" />
              </a>
            )}
          </div>
        </div>

        <p className="text-justify">{description}</p>
        <p>Price range: {priceRange}</p>
        <div className="mb-0 flex gap-1 items-center">
          <Clock size={12} className="stroke-red-800 min-w-3 min-h-3" />
          <p className="text-sm line-clamp-1">{storeHours}</p>
        </div>
        <Link
          href={googleMapsLink}
          className="mb-2 flex gap-1 items-center hover:underline hover:text-blue-700"
        >
          <MapPin size={12} className="stroke-red-800 min-w-3 min-h-3" />
          <p className="text-sm line-clamp-1">{location}</p>
        </Link>
        <div className="m-0 p-0 w-fit flex gap-2 flex-row">
          {cafeCategory && cafeCategory.length > 0
            ? cafeCategory.map((cafeCategory: string) => (
                <Tag key={cafeCategory} tag={cafeCategory} />
              ))
            : null}
        </div>
        <div>
          <p>Menu:</p>
          <a href={menuLink} target="_blank" rel="noreferrer">
            <Image
              src={menuImages}
              alt="menu"
              width={200}
              height={200}
              className="aspect-auto rounded-lg mb-1 w-fit"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
