import {
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/[0.06] bg-[#061521]"
    >
      {/* =====================================================
          CONTACT CTA
      ===================================================== */}
    

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="border-t border-white/[0.06]">

        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">

          <div
            className="
              grid
              gap-12
              sm:grid-cols-2
              lg:grid-cols-[1.7fr_1fr_1fr_1fr]
            "
          >

            {/* =================================================
                BRAND
            ================================================= */}
            <div className="max-w-sm">

              <a
                href="#"
                className="
                  inline-block
                  text-xl
                  font-semibold
                  tracking-tight
                  text-white
                "
              >
                Mentora
                <span className="text-sky-400"> AI</span>
              </a>

              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                Your AI-powered learning companion. Learn at your
                own pace, practice with intelligent quizzes, and get
                personalized guidance whenever you need it.
              </p>

              {/* =================================================
                  SOCIAL LINKS
              ================================================= */}
              <div className="mt-6 flex items-center gap-3">

                {/* GitHub */}
                <a
                  href="#"
                  aria-label="GitHub"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-slate-400
                    transition
                    hover:border-sky-400/20
                    hover:bg-sky-400/10
                    hover:text-sky-400
                  "
                >
                  <FaGithub size={17} />
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-slate-400
                    transition
                    hover:border-sky-400/20
                    hover:bg-sky-400/10
                    hover:text-sky-400
                  "
                >
                  <FaLinkedinIn size={17} />
                </a>

                {/* X */}
                <a
                  href="#"
                  aria-label="X"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-slate-400
                    transition
                    hover:border-sky-400/20
                    hover:bg-sky-400/10
                    hover:text-sky-400
                  "
                >
                  <FaXTwitter size={16} />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-slate-400
                    transition
                    hover:border-sky-400/20
                    hover:bg-sky-400/10
                    hover:text-sky-400
                  "
                >
                  <FaInstagram size={17} />
                </a>

              </div>
            </div>

            {/* =================================================
                PRODUCT
            ================================================= */}
            <div>

              <h3 className="text-sm font-semibold text-white">
                Product
              </h3>

              <ul className="mt-5 space-y-3">

                <li>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-slate-500
                      transition
                      hover:text-sky-400
                    "
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-slate-500
                      transition
                      hover:text-sky-400
                    "
                  >
                    Courses
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-slate-500
                      transition
                      hover:text-sky-400
                    "
                  >
                    AI Tutor
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-slate-500
                      transition
                      hover:text-sky-400
                    "
                  >
                    Quizzes
                  </a>
                </li>

              </ul>
            </div>

            {/* =================================================
                COMPANY
            ================================================= */}
            <div>

              <h3 className="text-sm font-semibold text-white">
                Company
              </h3>

              <ul className="mt-5 space-y-3">

                <li>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-slate-500
                      transition
                      hover:text-sky-400
                    "
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-slate-500
                      transition
                      hover:text-sky-400
                    "
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-slate-500
                      transition
                      hover:text-sky-400
                    "
                  >
                    Careers
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-slate-500
                      transition
                      hover:text-sky-400
                    "
                  >
                    Blog
                  </a>
                </li>

              </ul>
            </div>

            {/* =================================================
                RESOURCES
            ================================================= */}
            <div>

              <h3 className="text-sm font-semibold text-white">
                Resources
              </h3>

              <ul className="mt-5 space-y-3">

                <li>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-slate-500
                      transition
                      hover:text-sky-400
                    "
                  >
                    Help Center
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-slate-500
                      transition
                      hover:text-sky-400
                    "
                  >
                    Documentation
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-slate-500
                      transition
                      hover:text-sky-400
                    "
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-slate-500
                      transition
                      hover:text-sky-400
                    "
                  >
                    Terms of Service
                  </a>
                </li>

              </ul>
            </div>

          </div>

          {/* =====================================================
              CONTACT DETAILS
          ===================================================== */}
         

          {/* =====================================================
              COPYRIGHT
          ===================================================== */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-3
              border-t
              border-white/[0.06]
              pt-6
              text-xs
              text-slate-600
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <p>
              © {new Date().getFullYear()} Mentora AI. All rights reserved.
            </p>

            <p>
              Built for smarter learning.
            </p>

          </div>

        </div>
      </footer>
    </section>
  );
}