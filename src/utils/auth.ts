import { z } from "zod";

export const loginInitialValues = {
  email: "",
  password: "",
  remember: false,
};

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid Email Format")
    .nonempty("Email Address is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/,
      "Password must contain at least 1 uppercase letter, 1 number, and 1 special character"
    ),
  remember: z.boolean().optional(),
});

export type loginType = z.infer<typeof loginSchema>;

export const registerInitialValues = {
  email: "",
  password: "",
  userName: "",
};

export const registerSchema = z.object({
  email: z
    .string()
    .email("Invalid Email Format")
    .nonempty("Email Address is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/,
      "Password must contain at least 1 uppercase letter, 1 number, and 1 special character"
    ),
  userName: z.string().nonempty("User Name is required"),
});

export type registerType = z.infer<typeof registerSchema>;
