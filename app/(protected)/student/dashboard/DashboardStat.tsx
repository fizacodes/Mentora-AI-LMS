import {
  BookOpen,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

type Props = {
  enrolledCourses: number;
  completedCourses: number;
  overallProgress: number;
};

export default function DashboardStats({
  enrolledCourses,
  completedCourses,
  overallProgress,
}: Props) {
  const stats = [
    {
      label: "Overall Progress",
      value: `${overallProgress}%`,
      icon: TrendingUp,
    },
    {
      label: "Enrolled Courses",
      value: enrolledCourses,
      icon: BookOpen,
    },
    {
      label: "Completed Courses",
      value: completedCourses,
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="grid gap-4 mx-4 mb-10 sm:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="
              rounded-xl border border-slate-200
              bg-[#0B2340] p-5
              shadow-sm
            "
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-sky-300">
                {stat.label}
              </p>

              <div className="rounded-lg bg-sky-50 p-2 text-sky-600">
                <Icon size={18} />
              </div>
            </div>

            <p className="mt-4 text-2xl font-bold text-white">
              {stat.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}