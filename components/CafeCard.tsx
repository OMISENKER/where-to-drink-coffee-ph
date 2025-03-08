import React from "react";
import Image from "next/image";
import Tag from "./Tag";
import { Cafe, User } from "@/sanity/types";

export type CafeCardType = Omit<Cafe, "ownerId"> & { user?: User };

const CafeCard = ({ cafe }: { cafe: CafeCardType }) => {
  const {
    cafeName,
    description,
    cafeCategory,
    location,
    ratings,
    storeHours,
    frontStoreImage,
  } = cafe;

  return (
    <div className="min-w-14 min-h-48 h-fit border-3 p-2 border-brown-border rounded-xl flex flex-col items-start justify-baseline">
      <Image
        src={frontStoreImage || "./test-1.png"}
        alt="cafe"
        width={200}
        height={50}
        className="aspect-video rounded-lg mb-1 w-full max-h-40"
        unoptimized
      />
      <p className="text-base font-semibold">{cafeName}</p>
      <p className="text-sm line-clamp-2 my-3 text-black-100 break-all">
        {description}
      </p>
      <p className="text-sm">{location}</p>
      <p className="text-sm mb-2">{storeHours}</p>
      <div className="m-0 p-0 w-fit flex gap-2 flex-row flex-wrap">
        {cafeCategory && cafeCategory.length > 0
          ? cafeCategory.map((tag) => <Tag key={tag} tag={tag} />)
          : null}
      </div>
    </div>
  );
};

export default CafeCard;
