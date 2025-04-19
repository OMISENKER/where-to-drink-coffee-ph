"use server";
import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createCafe = async (state: any, form: FormData) => {
  const session = await auth();

  if (!session)
    return parseServerActionResponse({
      error: "Not Signed In",
      status: "ERROR",
    });

  const {
    cafeName,
    description,
    cafeCategory,
    storeHours,
    location,
    googleMapsLink,
    logoImage,
    frontStoreImage,
    menuImages,
    priceRange,
    facebookLink,
    instagramLink,
  } = Object.fromEntries(form.entries());

  const slug = slugify(cafeName as string, { lower: true, strict: true });

  try {
    const cafe = {
      cafeName,
      slug: {
        _type: slug,
        current: slug,
      },
      description,
      cafeCategory,
      ownerId: {
        _type: "reference",
        _ref: session?.user?.id,
      },
      storeHours,
      location,
      googleMapsLink,
      logoImage,
      frontStoreImage,
      menuImages,
      priceRange,
      facebookLink,
      instagramLink,
    };

    const result = await writeClient.create({
      _type: "cafe",
      ...cafe,
    });

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);

    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};
