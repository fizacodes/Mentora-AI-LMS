
type Props = {
  name?: string | null;
};

export default function DashboardHeader({
  name,
}: Props) {
  return (
    <header className="mb-8 mx-4 mt-4">
      <div className="rounded-2xl border border-slate-800 bg-[#0B2340] px-6 py-7 shadow-sm">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <div className="mb-3 inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span className="text-xs font-medium text-sky-300">
                Student Dashboard
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Welcome back{name ? `, ${name}` : ""}
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Continue your learning journey, track your progress,
              and keep building your skills.
            </p>
          </div>

          <div className="hidden h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 sm:flex">
            <span className="text-2xl">🎓</span>
          </div>

        </div>
      </div>
    </header>
  );
}
