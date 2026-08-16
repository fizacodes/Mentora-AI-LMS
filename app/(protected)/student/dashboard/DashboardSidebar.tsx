
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  LayoutDashboard,
  LibraryBig,
  Search,
  Bot,
  BarChart3,
  User,
  X,
  Menu,
} from "lucide-react";
import LogoutButton from "@/app/components/LogoutButton";

const navigation = [
  {
    label: "Dashboard",
    href: "/student/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Search Courses",
    href: "/student/course",
    icon: Search,
  },
  {
    label: "My Courses",
    href: "/student/course/enrolled",
    icon: LibraryBig,
  },
  {
    label: "AI Tutor",
    href: "/student/chat",
    icon: Bot,
  },
  {
    label: "Progress",
    href: "/student/progress",
    icon: BarChart3,
  }
];

export default function DashboardSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* =====================================================
          MOBILE MENU BUTTON
          Visible only when sidebar is closed
      ===================================================== */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          className="
            fixed
            left-4
            top-3
            z-[70]
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            bg-[#0B2340]
            text-sky-400
            shadow-lg
            transition
            hover:bg-[#12345a]
            lg:hidden
          "
        >
          <Menu size={20} />
        </button>
      )}

      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className="
            fixed
            inset-0
            z-[50]
            bg-black/60
            backdrop-blur-[2px]
            lg:hidden
          "
        />
      )}

      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <aside
        className={`
          fixed
          left-0
          top-0
          z-[60]
          h-screen
          w-64
          border-r
          border-white/10
          bg-[#061521]
          text-white
          shadow-2xl
          transition-transform
          duration-300
          ease-in-out

          lg:static
          lg:z-auto
          lg:block
          lg:h-screen
          lg:translate-x-0
          lg:shadow-none

          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col">

          {/* =================================================
              LOGO
          ================================================= */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                Mentora
                <span className="text-sky-400"> AI</span>
              </h1>

              <p className="mt-1 text-xs text-slate-400">
                Your AI learning companion
              </p>
            </div>

            {/* Close button - mobile only */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="
                rounded-lg
                p-1.5
                text-slate-400
                transition
                hover:bg-white/5
                hover:text-white
                lg:hidden
              "
            >
              <X size={20} />
            </button>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}
          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    px-3
                    py-2.5
                    text-sm
                    text-slate-400
                    transition
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  <Icon size={18} />

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              BOTTOM SECTION
          ================================================= */}
          <div className="border-t border-white/10 p-3">

            {/* Profile */}
            <Link
              href="/student/profile"
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                px-3
                py-2.5
                text-sm
                text-slate-400
                transition
                hover:bg-white/5
                hover:text-white
              "
            >
              <User size={18} />

              <span>Profile</span>
            </Link>

            {/* Logout */}
            <div className="mt-2 border-t border-slate-700/40 pt-3">
              <LogoutButton />
            </div>

          </div>
        </div>
      </aside>
    </>
  );
}