import React from "react";
import Image from "next/image";
import Tag from "./Tag";
import { Cafe, User } from "@/sanity/types";
import { StarIcon, MapPin } from "lucide-react";
import Link from "next/link";

export type CafeCardType = Omit<Cafe, "ownerId"> & { user?: User };

const CafeCard = ({ cafe }: { cafe: CafeCardType }) => {
  const {
    cafeName,
    description,
    cafeCategory,
    location,
    googleMapsLink,
    ratings,
    storeHours,
    frontStoreImage,
  } = cafe;

  return (
    <div className="min-w-14 min-h-64 border-3 p-2 border-brown-border rounded-xl flex flex-col items-start justify-baseline overflow-hidden">
      <div className="relative">
        <div className="absolute top-1 right-1 bg-white bg-opacity-70 p-2 rounded-lg flex items-center gap-1">
          <StarIcon
            size={12}
            className={`fill-${
              (ratings ?? 0) === 0
                ? "amber-100"
                : (ratings ?? 0) < 4
                  ? "amber-200"
                  : "amber-300"
            }`}
          />
          <p className="text-xs">{ratings}</p>
        </div>
        <Image
          src={frontStoreImage || "./test-1.png"}
          alt="cafe"
          width={200}
          height={50}
          className="aspect-video rounded-lg mb-1 w-full max-h-40"
          unoptimized
        />
      </div>

      <p className="text-base font-semibold line-clamp-2">{cafeName}</p>
      <p className="text-sm line-clamp-2 text-black-100 ">{description}</p>
      <div className="flex items-baseline gap-1">
        <MapPin size={12} className="stroke-red-800 min-w-3 min-h-3" />
        <Link href={googleMapsLink || "#"} target="_blank">
          <p className="text-sm line-clamp-1 hover:underline">{location}</p>
        </Link>
      </div>

      <p className="text-sm mb-2">{storeHours}</p>
      <div className="m-0 p-0 w-fit flex gap-2 flex-row flex-wrap max-w-full max-h-14 overflow-hidden ">
        {cafeCategory && cafeCategory.length > 0
          ? cafeCategory.map((tag) => <Tag key={tag} tag={tag} />)
          : null}
      </div>
    </div>
  );
};

export default CafeCard;
