import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useFormStatus } from "react-dom";

export default function WelcomeButton() {
  return (
    <button className="primary-btn bg-green-500 h-10 flex items-center gap-2 p-2">
      <CheckBadgeIcon className="size-6 bg-transparent text-black" />
      <span className="text-black">Welcome back!</span>
    </button>
  );
}
