import { type SchemaTypeDefinition } from "sanity";
import { user } from "@/sanity/schemaTypes/user";
import { cafe } from "@/sanity/schemaTypes/cafe";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, cafe],
};
