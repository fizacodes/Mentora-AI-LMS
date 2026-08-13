"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "HowItWorks",
    href: "#howitworks",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed
        left-1/2
        top-5
        z-50
        w-[92%]
        max-w-6xl
        -translate-x-1/2
        border
        border-white/10
        bg-[#061521]/90
        px-4
        py-3
        shadow-[0_10px_40px_rgba(56,189,248,.15)]
        backdrop-blur-xl
        transition-all
        duration-300
        sm:w-[90%]
        sm:px-6
        ${
          menuOpen
            ? "rounded-2xl"
            : "rounded-full"
        }
      `}
    >
      {/* =====================================================
          TOP NAVBAR ROW
      ===================================================== */}
      <div className="flex items-center justify-between">

        {/* =================================================
            LOGO
        ================================================= */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2.5"
        >
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-[#0F6CBD]
              to-[#38BDF8]
              shadow-[0_0_25px_rgba(56,189,248,.35)]
              sm:h-10
              sm:w-10
            "
          >
            <Sparkles
              size={20}
              className="text-white sm:h-[22px] sm:w-[22px]"
            />
          </div>

          <span
            className="
              text-lg
              font-semibold
              tracking-tight
              text-[#F8FAFC]
              sm:text-xl
            "
          >
            Mentora AI
          </span>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}
        <div
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                text-sm
                text-[#CBD5E1]
                transition
                duration-300
                hover:text-white
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* =================================================
            DESKTOP ACTIONS
        ================================================= */}
        <div className="hidden items-center gap-4 md:flex">

          <Link
            href="/auth/login"
            className="
              text-sm
              text-[#CBD5E1]
              transition
              hover:text-white
            "
          >
            Login
          </Link>

          <Link
            href="/auth/signup"
            className="
              rounded-full
              bg-gradient-to-r
              from-[#0F6CBD]
              to-[#38BDF8]
              px-5
              py-2
              text-sm
              font-medium
              text-white
              shadow-[0_0_25px_rgba(56,189,248,.35)]
              transition
              duration-300
              hover:scale-105
            "
          >
            Get Started
          </Link>

        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            border-0
            bg-transparent
            p-0
            text-slate-300
            outline-none
            transition
            hover:text-white
            focus:outline-none
            focus:ring-0
            md:hidden
          "
        >
          {menuOpen ? (
            <X
              size={22}
              strokeWidth={1.8}
            />
          ) : (
            <Menu
              size={22}
              strokeWidth={1.8}
            />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      {menuOpen && (
        <div
          className="
            mt-4
            border-t
            border-white/[0.08]
            pt-4
            md:hidden
          "
        >
          {/* Navigation Links */}
          <div className="space-y-1">

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="
                  block
                  rounded-lg
                  px-3
                  py-2.5
                  text-sm
                  text-slate-300
                  transition
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                {link.label}
              </a>
            ))}

          </div>

          {/* Mobile Actions */}
          <div
            className="
              mt-4
              flex
              flex-col
              gap-2
              border-t
              border-white/[0.08]
              pt-4
            "
          >

            <Link
              href="/auth/login"
              onClick={closeMenu}
              className="
                rounded-lg
                px-3
                py-2.5
                text-sm
                text-slate-300
                transition
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              Login
            </Link>

            <Link
              href="/auth/signup"
              onClick={closeMenu}
              className="
                rounded-lg
                bg-gradient-to-r
                from-[#0F6CBD]
                to-[#38BDF8]
                px-4
                py-2.5
                text-center
                text-sm
                font-medium
                text-white
                shadow-[0_0_20px_rgba(56,189,248,.2)]
                transition
                hover:opacity-90
              "
            >
              Get Started
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}