
"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/auth/login",
    });
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="
        flex w-full items-center gap-3
        rounded-xl
        px-3 py-2.5
        text-sm font-medium
        text-slate-400
        transition-all
        hover:bg-red-400/10
        hover:text-red-400
      "
    >
      <LogOut size={18} />

      <span>Logout</span>
    </button>
  );
}

