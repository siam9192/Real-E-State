import { NameValidationSchema } from "@/utils/validation.schema";
import { z } from "zod";

const signUpValidationSchema = z.object({
  name: NameValidationSchema.required(),
  email: z.string({ required_error: "Email is required" }).email("Enter an valid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 character"),
  confirm_password: z
    .string({ required_error: "Confirm Password is required" })
    .min(6, "Password must be at least 6 character"),
});

const signInValidationSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email("Enter an valid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 character"),
});

const AuthValidation = {
  signInValidationSchema,
  signUpValidationSchema,
};

export default AuthValidation;
