import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="min-h-72 w-full bg-[url('/hero-bg.jpg')] bg-no-repeat bg-cover bg-start flex items-center justify-center">
      <div className="bg-brown-border p-3 rounded-2xl">
        <Image
          src="/w2dcph-logo-light-png.png"
          width={300}
          height={100}
          alt="W2DCoffeePH"
        />
        <div className="h-24"></div>
      </div>
    </div>
  );
};

export default Hero;
