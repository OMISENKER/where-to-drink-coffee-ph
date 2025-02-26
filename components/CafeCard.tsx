import React from "react";
import Image from "next/image";
import Tag from "./Tag";

const CafeCard = () => {
  return (
    <div className="min-w-14 min-h-48 h-fit border-3 p-2 border-brown-border rounded-xl flex flex-col items-start justify-baseline">
      <Image
        src={"/test-1.png"}
        alt="cafe"
        width={200}
        height={50}
        className="aspect-video rounded-lg mb-1 w-full max-h-40"
      />
      <p className="text-base font-semibold">Cafe name</p>
      <p className="text-sm">location</p>
      <p className="text-sm mb-2">operating hours</p>
      <div className="m-0 p-0 w-fit flex gap-2 flex-row flex-wrap">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
    </div>
  );
};

export default CafeCard;
