"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Bot,
  ClipboardCheck,
  User,
  LogOut,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    href: "/student/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Search Courses",
    href: "/student/course",
    icon: BookOpen,
  },
  {
    label: "My Courses",
    href: "/student/course/enrolled",
    icon: BookOpen,
  },
  {
    label: "AI Tutor",
    href: "/student/chat",
    icon: Bot,
  },
  {
    label: "Quizzes",
    href: "/student/quizzes",
    icon: ClipboardCheck,
  },
];

export default function DashboardSidebar() {
  return (
    <aside className="hidden min-h-screen w-64 border-r border-slate-200 bg-[#061521] text-white lg:block">
      <div className="flex h-full flex-col">

        {/* Logo */}
        <div className="border-b border-white/10 px-6 py-6">
          <h1 className="text-xl font-bold tracking-tight">
            Mentora<span className="text-sky-400"> AI</span>
          </h1>

          <p className="mt-1 text-xs text-slate-400">
            Your AI learning companion
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-6">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="
                  flex items-center gap-3 rounded-lg
                  px-3 py-2.5 text-sm
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

        {/* Bottom */}
        <div className="border-t border-white/10 p-3">

          <Link
            href="/student/profile"
            className="
              flex items-center gap-3 rounded-lg
              px-3 py-2.5 text-sm
              text-slate-400
              hover:bg-white/5
              hover:text-white
            "
          >
            <User size={18} />
            <span>Profile</span>
          </Link>

          <button
            className="
              flex w-full items-center gap-3
              rounded-lg px-3 py-2.5
              text-sm text-slate-400
              hover:bg-white/5
              hover:text-white
            "
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>

        </div>
      </div>
    </aside>
  );
}