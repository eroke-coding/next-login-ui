"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { useFormState } from "react-dom";
import { handleForm } from "./action";
import WelcomeButton from "@/components/welcome-btn";

const initialState = {
  success: false,
  erorr: undefined,
};

export default function Login() {
  const [state, action] = useFormState(handleForm, initialState);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-5xl text-center">🔥</h1>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.error?.fieldErrors.email}
        />
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          required
          errors={state?.error?.fieldErrors.username}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.error?.fieldErrors.password}
        />
        <FormButton text="Log in" />
        {state?.success && <WelcomeButton />}
      </form>
    </div>
  );
}
