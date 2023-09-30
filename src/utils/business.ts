import { z } from "zod";

export const directorsValue = {
  name: "",
  email: "",
  phoneNum: "",
  //   idType: "",
  //   idFile: "",
};

export const corporateBusinessValues = {
  rcNum: "",
  directors: [directorsValue],
};

export const CBusinessSchema = z.object({
  rcNum: z
    .union([
      z.number({ required_error: "RC Number is required" }),
      z.string().nonempty("RC Number is required"),
    ])
    .refine(
      (val) => val.toString().length >= 11 && val.toString().length <= 11,
      (val) => ({ message: `${val} must be 11 digits` })
    ),

  directors: z.array(
    z.object({
      name: z.string().nonempty("Director's Name is required"),
      email: z
        .string()
        .email("Invalid Email Format")
        .nonempty("Director's Email is required"),
      phoneNum: z.string().regex(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/, {
        message: "Invalid Phone Number",
      }),
    })
  ).length(2, "There must be at least 2 directors"),
});


export type CBusinessProp = z.infer<typeof CBusinessSchema>;
