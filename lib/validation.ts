import { z } from "zod";

const imageUrlValidator = () =>
  z
    .string()
    .url()
    .refine(
      async (url) => {
        try {
          const res = await fetch(url, { method: "HEAD" });
          const contentType = res.headers.get("content-type");
          return contentType?.startsWith("image/");
        } catch {
          return false;
        }
      },
      { message: "Must be a valid image URL" }
    );

export const formSchema = z.object({
  cafeName: z.string().min(3).max(100),
  description: z.string().min(10).max(500),
  cafeCategory: z.string().min(3).max(100),
  storeHours: z.string().min(3).max(100),
  location: z.string().min(3).max(100),
  googleMapsLink: z
    .string()
    .url()
    .refine(
      (url) => {
        return (
          url.includes("google.com/maps") ||
          url.includes("maps.google.com") ||
          url.includes("goo.gl/maps") ||
          url.includes("maps.app.goo.gl")
        );
      },
      { message: "Must be a valid Google Maps URL" }
    ),
  logoImage: imageUrlValidator(),
  frontStoreImage: imageUrlValidator(),
  menuImages: imageUrlValidator(),
  priceRange: z.string().min(1).max(30),
  facebookLink: z
    .string()
    .url()
    .refine(
      (url) => {
        return url.includes("facebook.com") || url.includes("fb.com");
      },
      { message: "Must be a valid Facebook URL" }
    ),
  instagramLink: z
    .string()
    .refine(
      (url) => {
        if (url === "") return true;
        try {
          new URL(url);
          return url.includes("instagram.com") || url.includes("instagr.am");
        } catch {
          return false;
        }
      },
      { message: "Must be a valid Instagram URL or empty" }
    )
    .optional(),
});
