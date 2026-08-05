import { Sparkles } from "lucide-react";

const navLinks = [
  "Home",
  "Features",
  "Pricing",
  "About",
];

export default function Navbar() {
  return (
    <nav
      className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        z-50

        w-[90%]
        max-w-6xl

        rounded-full

        border
        border-white/10

        bg-white/[0.06]

        backdrop-blur-xl

        px-6
        py-3

        shadow-[0_10px_40px_rgba(56,189,248,.15)]
      "
    >

      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              bg-gradient-to-br
              from-[#0F6CBD]
              to-[#38BDF8]

              shadow-[0_0_25px_rgba(56,189,248,.35)]
            "
          >
            <Sparkles 
              size={22}
              className="text-white"
            />
          </div>


          <span
            className="
              text-xl
              font-semibold
              text-[#F8FAFC]
            "
          >
            Mentora AI
          </span>

        </div>


        {/* Navigation Links */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >

          {navLinks.map((link)=>(
            <a
              key={link}
              href="#"
              className="
                text-sm
                text-[#CBD5E1]

                transition
                duration-300

                hover:text-white
              "
            >
              {link}
            </a>
          ))}

        </div>


        {/* Actions */}
        <div className="flex items-center gap-4">

          <button
            className="
              hidden
              sm:block

              text-sm
              text-[#CBD5E1]

              hover:text-white
              transition
            "
          >
            Login
          </button>


          <button
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

              transition
              duration-300

              hover:scale-105

              shadow-[0_0_25px_rgba(56,189,248,.35)]
            "
          >
            Get Started
          </button>

        </div>

      </div>

    </nav>
  );
}