"use server";

import { z } from "zod";

const checkPassword = ({ password }: { password: string }) => {
  return password === "12345";
};

const formSchema = z
  .object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(3).max(10),
  })
  .refine(checkPassword, {
    message: "wrong password",
    path: ["password"],
  });

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
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
