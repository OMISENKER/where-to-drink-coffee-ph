"use client";
import React from "react";
import { Input } from "./ui/input";

const CafeForm = () => {
  return (
    <form action={() => {}} className="flex flex-col gap-5">
      <div>
        <label htmlFor="cafeName" className="">
          Cafe Name
        </label>
        <Input
          id="cafeName"
          name="cafeName"
          className=""
          required
          placeholder="Cafe Name"
        />

        <label htmlFor="description" className="">
          description
        </label>
        <Input
          id="description"
          name="description"
          className=""
          required
          placeholder="description"
        />

        <label htmlFor="cafeCategory" className="">
          Tags
        </label>
        <Input
          id="cafeCategory"
          name="cafeCategory"
          className=""
          required
          placeholder="Cafe Tags"
        />

        <label htmlFor="storeHours" className="">
          Store Hours
        </label>
        <Input
          id="storeHours"
          name="storeHours"
          className=""
          required
          placeholder="Store Hours"
        />

        <label htmlFor="location" className="">
          location
        </label>
        <Input
          id="location"
          name="location"
          className=""
          required
          placeholder="Cafe location"
        />

        <label htmlFor="googleMapsLink" className="">
          Google Maps Link
        </label>
        <Input
          id="googleMapsLink"
          name="googleMapsLink"
          className=""
          required
          placeholder="Google Maps Link"
        />

        <label htmlFor="logoImage" className="">
          Logo Image Link
        </label>
        <Input
          id="logoImage"
          name="logoImage"
          className=""
          required
          placeholder="Logo Image Link"
        />

        <label htmlFor="frontStoreImage" className="">
          Front Store Image Link
        </label>
        <Input
          id="frontStoreImage"
          name="frontStoreImage"
          className=""
          required
          placeholder="Front Store Image Link"
        />

        <label htmlFor="menuImages" className="">
          Menu Images Link
        </label>
        <Input
          id="menuImages"
          name="menuImages"
          className=""
          required
          placeholder="Menu Images Link"
        />

        <label htmlFor="priceRange" className="">
          Price Range
        </label>
        <Input
          id="priceRange"
          name="priceRange"
          className=""
          required
          placeholder="Price Range"
        />

        <label htmlFor="facebookLink" className="">
          facebookLink
        </label>
        <Input
          id="facebookLink"
          name="facebookLink"
          className=""
          required
          placeholder="facebookLink"
        />

        <label htmlFor="instagramLink" className="">
          Instagram Link
        </label>
        <Input
          id="instagramLink"
          name="instagramLink"
          className=""
          required
          placeholder="Instagram Link"
        />
      </div>
    </form>
  );
};

export default CafeForm;
