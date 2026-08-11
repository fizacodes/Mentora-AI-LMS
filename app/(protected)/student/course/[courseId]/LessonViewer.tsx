import type { LessonPayload } from "@/type/response";
import { BookOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  lesson: LessonPayload;
};

export default function LessonViewer({
  lesson,
}: Props) {
  return (
    <article className="mx-auto w-full max-w-4xl px-6 py-10 lg:px-10">

      {/* Lesson Header */}
      <header className="mb-10 border-b border-slate-800 pb-8">
        <div className="mb-4 flex items-center gap-2">
          <div
            className="
              flex h-8 w-8 items-center justify-center
              rounded-lg
              border border-sky-400/20
              bg-sky-400/10
              text-sky-400
            "
          >
            <BookOpen size={16} />
          </div>

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Lesson
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {lesson.title}
        </h1>

        <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-[#0F6CBD] to-[#38BDF8]" />
      </header>

      {/* Markdown Content */}
      <div className="text-[16px] leading-8 text-slate-300">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            /* H1 */
            h1: ({ children }) => (
              <h1
                className="
                  mb-6 mt-2
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                "
              >
                {children}
              </h1>
            ),

            /* H2 */
            h2: ({ children }) => (
              <h2
                className="
                  mb-5
                  mt-12
                  border-b
                  border-slate-800
                  pb-3
                  text-2xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                "
              >
                {children}
              </h2>
            ),

            /* H3 */
            h3: ({ children }) => (
              <h3
                className="
                  mb-3
                  mt-9
                  text-xl
                  font-semibold
                  leading-tight
                  text-slate-100
                "
              >
                {children}
              </h3>
            ),

            /* Paragraph */
            p: ({ children }) => (
              <p className="mb-6 leading-8 text-slate-300">
                {children}
              </p>
            ),

            /* Bold */
            strong: ({ children }) => (
              <strong className="font-semibold text-white">
                {children}
              </strong>
            ),

            /* Italic */
            em: ({ children }) => (
              <em className="text-slate-200">
                {children}
              </em>
            ),

            /* Unordered List */
            ul: ({ children }) => (
              <ul className="mb-7 ml-6 list-disc space-y-2 marker:text-sky-400">
                {children}
              </ul>
            ),

            /* Ordered List */
            ol: ({ children }) => (
              <ol className="mb-7 ml-6 list-decimal space-y-2 marker:font-semibold marker:text-sky-400">
                {children}
              </ol>
            ),

            /* List Item */
            li: ({ children }) => (
              <li className="pl-2 leading-7 text-slate-300">
                {children}
              </li>
            ),

            /* Inline Code */
            code: ({ children }) => (
              <code
                className="
                  rounded-md
                  border border-sky-400/10
                  bg-[#081B2D]
                  px-1.5
                  py-1
                  font-mono
                  text-sm
                  text-sky-300
                "
              >
                {children}
              </code>
            ),

            /* Code Block */
            pre: ({ children }) => (
              <pre
                className="
                  my-7
                  overflow-x-auto
                  rounded-xl
                  border border-slate-800
                  bg-[#081B2D]
                  p-5
                  font-mono
                  text-sm
                  leading-7
                  text-slate-300
                  shadow-lg
                "
              >
                {children}
              </pre>
            ),

            /* Blockquote */
            blockquote: ({ children }) => (
              <blockquote
                className="
                  my-7
                  rounded-r-xl
                  border-l-4
                  border-sky-400
                  bg-sky-400/5
                  px-5
                  py-4
                  text-slate-300
                "
              >
                {children}
              </blockquote>
            ),

            /* Horizontal Rule */
            hr: () => (
              <hr className="my-10 border-slate-800" />
            ),

            /* Links */
            a: ({ children, href }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-medium
                  text-sky-400
                  underline
                  decoration-sky-400/30
                  underline-offset-4
                  transition
                  hover:text-sky-300
                "
              >
                {children}
              </a>
            ),

            /* Table */
            table: ({ children }) => (
              <div className="my-8 overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full border-collapse text-sm">
                  {children}
                </table>
              </div>
            ),

            thead: ({ children }) => (
              <thead className="bg-[#081B2D] text-left text-slate-200">
                {children}
              </thead>
            ),

            th: ({ children }) => (
              <th className="border-b border-slate-700 px-4 py-3 font-semibold">
                {children}
              </th>
            ),

            td: ({ children }) => (
              <td className="border-b border-slate-800 px-4 py-3 text-slate-300">
                {children}
              </td>
            ),
          }}
        >
          {lesson.content ?? ""}
        </ReactMarkdown>
      </div>
    </article>
  );
}