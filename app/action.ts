"use server";

import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .email()
    .refine(
      (email) => email.endsWith("@zod.com"),
      "Only @zod.com emails are allowed"
    ),
  username: z.string().min(5, "Username should be at least 5 characters long."),
  password: z
    .string()
    .min(10, "Password should be at least 10 characters long.")
    .regex(/\d/, "Password should contain at least one number (0123456789)"),
});

export async function handleForm(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = formSchema.safeParse(data);

  return {
    success: result.success,
    error: result.error?.flatten(),
  };
}
