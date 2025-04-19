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
  cafeName: z
    .string()
    .min(3, { message: "Cafe name should be at least 3 characters" })
    .max(100, { message: "Cafe name cannot exceed 100 characters" }),

  description: z
    .string()
    .min(10, {
      message: "Please provide a longer description.",
    })
    .max(500, { message: "Description is too long (maximum 500 characters)" }),

  cafeCategory: z
    .string()
    .min(3, { message: "Please add at least one tag" })
    .max(200, { message: "Tags are too long" }),

  storeHours: z
    .string()
    .min(3, { message: "At least 3 characters" })
    .max(100, { message: "Store hours text is too long" }),

  location: z
    .string()
    .min(10, {
      message: "Please enter a valid location (At least 10 characters)",
    })
    .max(100, { message: "Location text is too long" }),
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
