import { KeyIcon, UserIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors?: string[];
  name: string;
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors = [],
  name,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        {name === "email" && <EnvelopeIcon className="size-6 absolute ml-2" />}
        {name === "username" && <UserIcon className="size-6 absolute ml-2" />}
        {name === "password" && <KeyIcon className="size-6 absolute ml-2" />}
        <input
          name={name}
          className="pl-10 bg-transparent rounded-2xl w-full h-10 focus:outline-none ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
          type={type}
          placeholder={placeholder}
          required={required}
        />
      </div>
      {errors?.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
