"use client";
import React, { use, useActionState, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Coffee } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { toast } from "sonner";

const CafeForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  // const router = useRouter();

  const handleFormSubmit = async (prevState: any, formdata: FormData) => {
    try {
      const formValues = {
        cafeName: formdata.get("cafeName") as string,
        description: formdata.get("description") as string,
        cafeCategory: formdata.get("cafeCategory") as string,
        storeHours: formdata.get("storeHours") as string,
        location: formdata.get("location") as string,
        googleMapsLink: formdata.get("googleMapsLink") as string,
        logoImage: formdata.get("logoImage") as string,
        frontStoreImage: formdata.get("frontStoreImage") as string,
        menuImages: formdata.get("menuImages") as string,
        priceRange: formdata.get("priceRange") as string,
        facebookLink: formdata.get("facebookLink") as string,
        instagramLink: formdata.get("instagramLink") as string,
      };

      await formSchema.parseAsync(formValues);
      console.log("Form values are valid:", formValues);

      // const result = await createIdea(prevState, formData);

      // console.log(result);

      // if (result.status === "SUCCESS") {
      //   toast("Cafe added successfully", {
      //     description: "Your cafe has been added.",
      //   });
      //   router.push(`/cafes/${result.id}`);
      // }

      // return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;

        setErrors(fieldErrors as unknown as Record<string, string>);

        toast("Validation Error", {
          description: "Please check the form fields.",
        });

        console.log("Validation errors:", fieldErrors);

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      toast("Error", {
        description: "An unexpected error occurred.",
      });

      return {
        ...prevState,
        error: "An unexpected error occurred.",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="cafe-form">
      <div>
        <label htmlFor="cafeName" className="cafe-form_label">
          Cafe Name *
        </label>
        <Input
          id="cafeName"
          name="cafeName"
          className="cafe-form_input"
          required
          placeholder="Cafe Name"
        />
        {errors.cafeName && (
          <p className="cafe-form_error">{errors.cafeName}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="cafe-form_label">
          description *
        </label>
        <Textarea
          id="description"
          name="description"
          className="cafe-form_textarea"
          required
          placeholder="description"
        />
        {errors.description && (
          <p className="cafe-form_error">{errors.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="cafeCategory" className="cafe-form_label">
          Tags *
        </label>
        <p>separate with commas ","</p>
        <Input
          id="cafeCategory"
          name="cafeCategory"
          className="cafe-form_input"
          required
          placeholder="24/7, wifi, books, etc."
        />
        {errors.cafeCategory && (
          <p className="cafe-form_error">{errors.cafeCategory}</p>
        )}
      </div>

      <div>
        <label htmlFor="storeHours" className="cafe-form_label">
          Store Hours *
        </label>
        <Input
          id="storeHours"
          name="storeHours"
          className="cafe-form_input"
          required
          placeholder="Store Hours"
        />
        {errors.storeHours && (
          <p className="cafe-form_error">{errors.storeHours}</p>
        )}
      </div>

      <div>
        <label htmlFor="location" className="cafe-form_label">
          location *
        </label>
        <Input
          id="location"
          name="location"
          className="cafe-form_input"
          required
          placeholder="Cafe address"
        />
        {errors.location && (
          <p className="cafe-form_error">{errors.location}</p>
        )}
      </div>

      <div>
        <label htmlFor="googleMapsLink" className="cafe-form_label">
          Google Maps Link *
        </label>
        <Input
          id="googleMapsLink"
          name="googleMapsLink"
          className="cafe-form_input"
          required
          placeholder="Google Maps Link"
        />
        {errors.googleMapsLink && (
          <p className="cafe-form_error">{errors.googleMapsLink}</p>
        )}
      </div>

      <div>
        <p className="text-sm text-pretty">
          For the images, please enter links that directs to the image/s, you
          can try this by pasting the image link in your browser.
        </p>

        <p className="text-sm">
          You can use{" "}
          <Link className="text-blue-500 underline" href={"https://imgur.com/"}>
            imgur.com
          </Link>
          {", "}
          Post your images and copy the link to the image. You can also use
          other links as long as it directs to an image.
        </p>
      </div>

      <div>
        <label htmlFor="logoImage" className="cafe-form_label">
          Logo Image Link *
        </label>
        <Input
          id="logoImage"
          name="logoImage"
          className="cafe-form_input"
          required
          placeholder="Logo Image Link"
        />
        {errors.logoImage && (
          <p className="cafe-form_error">{errors.logoImage}</p>
        )}
      </div>

      <div>
        <label htmlFor="frontStoreImage" className="cafe-form_label">
          Front Store Image Link *
        </label>
        <Input
          id="frontStoreImage"
          name="frontStoreImage"
          className="cafe-form_input"
          required
          placeholder="Front Store Image Link"
        />
        {errors.frontStoreImage && (
          <p className="cafe-form_error">{errors.frontStoreImage}</p>
        )}
      </div>

      <div>
        <label htmlFor="menuImages" className="cafe-form_label">
          Menu Images Link *
        </label>
        <Input
          id="menuImages"
          name="menuImages"
          className="cafe-form_input"
          required
          placeholder="Menu Images Link"
        />
        {errors.menuImages && (
          <p className="cafe-form_error">{errors.menuImages}</p>
        )}
      </div>

      <div>
        <label htmlFor="priceRange" className="cafe-form_label">
          Price Range * {"(e.g. 150-300)"}
        </label>
        <Input
          id="priceRange"
          name="priceRange"
          className="cafe-form_input"
          required
          placeholder="Price Range"
        />
        {errors.priceRange && (
          <p className="cafe-form_error">{errors.priceRange}</p>
        )}
      </div>

      <div>
        <label htmlFor="facebookLink" className="cafe-form_label">
          Facebook Link *
        </label>
        <Input
          id="facebookLink"
          name="facebookLink"
          className="cafe-form_input"
          required
          placeholder="Facebook Link"
        />
        {errors.facebookLink && (
          <p className="cafe-form_error">{errors.facebookLink}</p>
        )}
      </div>

      <div>
        <label htmlFor="instagramLink" className="cafe-form_label">
          Instagram Link {"(Optional)"}
        </label>
        <Input
          id="instagramLink"
          name="instagramLink"
          className="cafe-form_input"
          placeholder="Instagram Link"
        />
      </div>
      <div className="w-full flex mt-4 justify-end pr-4">
        <Button type="submit" className="button-styles" disabled={isPending}>
          {isPending ? (
            <span className="loading-spinner"></span>
          ) : (
            <span className="text-base font-nunito flex items-center gap-2">
              <Coffee /> Add Cafe
            </span>
          )}
        </Button>
      </div>
    </form>
  );
};

export default CafeForm;
