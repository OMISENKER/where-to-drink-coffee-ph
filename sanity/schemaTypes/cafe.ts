import { defineField, defineType } from "sanity";

export const cafe = defineType({
  name: "cafe",
  title: "Cafe",
  type: "document",
  fields: [
    defineField({
      name: "cafeName",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "cafeName",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "cafeCategory",
      type: "string",
    }),
    defineField({
      name: "ownerId",
      type: "reference",
      to: { type: "user" },
    }),
    defineField({
      name: "views",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "likes",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "ratings",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "storeHours",
      type: "string",
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "googleMapsLink",
      type: "url",
    }),
    defineField({
      name: "logoImage",
      type: "url",
    }),
    defineField({
      name: "frontStoreImage",
      type: "url",
    }),
    defineField({
      name: "menuImages",
      type: "url",
    }),
    defineField({
      name: "menuLink",
      type: "url",
    }),
    defineField({
      name: "priceRange",
      type: "string",
    }),
    defineField({
      name: "facebookLink",
      type: "url",
    }),
    defineField({
      name: "instagramLink",
      type: "url",
    }),
  ],
});
