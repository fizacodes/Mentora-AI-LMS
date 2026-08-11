"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BarChart3 } from "lucide-react";

type Course = {
  id: string;
  title: string;
  progress: number;
};

type Props = {
  courses: Course[];
};

export default function CourseProgressChart({
  courses,
}: Props) {
  const data = courses.map((course) => ({
    name:
      course.title.length > 18
        ? `${course.title.slice(0, 18)}...`
        : course.title,
    progress: course.progress,
  }));

  // Keep the chart compact when there are only a few courses
  const chartHeight =
    courses.length <= 2
      ? "h-48"
      : courses.length <= 4
        ? "h-56"
        : "h-64";

  return (
    <section
      className="
        rounded-2xl
        border border-sky-400/10
        bg-[#0B2340]
        p-5
        shadow-lg shadow-black/10
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-xl
              border border-sky-400/20
              bg-sky-400/10
              text-sky-400
            "
          >
            <BarChart3 size={19} />
          </div>

          <div>
            <h2 className="text-base font-semibold text-white">
              Course Progress
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Track your progress across enrolled courses.
            </p>
          </div>
        </div>

        <span
          className="
            shrink-0
            rounded-full
            border border-sky-400/20
            bg-sky-400/10
            px-2.5 py-1
            text-xs font-medium
            text-sky-400
          "
        >
          {courses.length}{" "}
          {courses.length === 1 ? "Course" : "Courses"}
        </span>
      </div>

      {/* Chart */}
      {courses.length === 0 ? (
        <div className="flex h-40 items-center justify-center">
          <p className="text-sm text-slate-500">
            No enrolled courses yet.
          </p>
        </div>
      ) : (
        <div className={`mt-5 w-full ${chartHeight}`}>
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 5,
                left: -15,
                bottom: 5,
              }}
              barCategoryGap="25%"
            >
              <CartesianGrid
                stroke="#163A5C"
                strokeDasharray="4 4"
                vertical={false}
              />

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#94A3B8",
                  fontSize: 11,
                }}
                dy={8}
              />

              <YAxis
                domain={[0, 100]}
                axisLine={false}
                tickLine={false}
                ticks={[0, 25, 50, 75, 100]}
                tickFormatter={(value) =>
                  `${value}%`
                }
                tick={{
                  fill: "#64748B",
                  fontSize: 11,
                }}
              />

              <Tooltip
                cursor={{
                  fill: "rgba(56, 189, 248, 0.04)",
                }}
                contentStyle={{
                  backgroundColor: "#081B2D",
                  border: "1px solid #163A5C",
                  borderRadius: "10px",
                  color: "#fff",
                  padding: "10px 12px",
                }}
                labelStyle={{
                  color: "#CBD5E1",
                  fontSize: "12px",
                  marginBottom: "4px",
                }}
                formatter={(value) => [
                  `${value}%`,
                  "Progress",
                ]}
              />

              <Bar
                dataKey="progress"
                fill="#38BDF8"
                radius={[6, 6, 2, 2]}
                maxBarSize={48}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
}