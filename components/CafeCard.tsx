import React from "react";
import Image from "next/image";
import Tag from "./Tag";
import { Cafe, User } from "@/sanity/types";
import { StarIcon, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export type CafeCardType = Omit<Cafe, "ownerId"> & { user?: User };

const CafeCard = ({ cafe }: { cafe: CafeCardType }) => {
  const {
    _id,
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
    <Link
      href={`/cafe/${_id}`}
      className="min-w-14 min-h-64 border-3 p-2 border-brown-border rounded-xl flex flex-col items-start justify-between overflow-hidden hover:shadow-md hover:shadow-brown-border hover:bg-amber-100 cursor-pointer"
    >
      <div>
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
        <div className="min-h-12 max-h-12 flex flex-col items-start justify-center">
          <p className="text-base font-semibold line-clamp-2">{cafeName}</p>
        </div>

        <p className="text-sm line-clamp-2 text-black-100 ">{description}</p>

        <div className="mb-0 flex gap-1 items-center">
          <Clock size={12} className="stroke-red-800 min-w-3 min-h-3" />
          <p className="text-sm line-clamp-1">{storeHours}</p>
        </div>
        <div className="mb-2 flex gap-1 items-center">
          <MapPin size={12} className="stroke-red-800 min-w-3 min-h-3" />
          <p className="text-sm line-clamp-1">{location}</p>
        </div>
      </div>

      <div>
        <div className="m-0 p-0 w-fit flex gap-2 flex-row flex-wrap max-w-full max-h-14 overflow-hidden ">
          {cafeCategory && cafeCategory.length > 0
            ? cafeCategory.map((tag) => <Tag key={tag} tag={tag} />)
            : null}
        </div>
      </div>
    </Link>
  );
};

export default CafeCard;
