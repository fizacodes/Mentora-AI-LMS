// "use client";

// import { useState, useTransition } from "react";

// import { updateStudentProfileAction } from "@/actions/students/profile";

// type Props = {
//   name: string | null;
//   email: string;
// };

// export default function ProfileForm({ name, email }: Props) {
//   const [nameValue, setNameValue] = useState(name ?? "");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const [isPending, startTransition] = useTransition();

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     setMessage("");
//     setError("");

//     startTransition(async () => {
//       const result = await updateStudentProfileAction({
//         name: nameValue,
//       });

//       if (!result.success) {
//         setError(result.error);
//         return;
//       }

//       setMessage("Profile updated successfully.");
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="grid gap-5 md:grid-cols-2">
//         {/* Name */}
//         <div>
//           <label
//             htmlFor="name"
//             className="mb-2 block text-sm text-slate-400"
//           >
//             Name
//           </label>

//           <input
//             id="name"
//             type="text"
//             value={nameValue}
//             onChange={(event) => setNameValue(event.target.value)}
//             disabled={isPending}
//             className="w-full rounded-xl border border-slate-600 bg-[#061521] px-4 py-3 text-white outline-none transition focus:border-[#38BDF8] disabled:opacity-50"
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label
//             htmlFor="email"
//             className="mb-2 block text-sm text-slate-400"
//           >
//             Email
//           </label>

//           <input
//             id="email"
//             type="email"
//             value={email}
//             disabled
//             className="w-full cursor-not-allowed rounded-xl border border-slate-700 bg-[#061521] px-4 py-3 text-slate-500"
//           />
//         </div>
//       </div>

//       {/* Feedback */}
//       {error && (
//         <p className="mt-3 text-sm text-red-400">
//           {error}
//         </p>
//       )}

//       {message && (
//         <p className="mt-3 text-sm text-green-400">
//           {message}
//         </p>
//       )}

//       {/* Save */}
//       <button
//         type="submit"
//         disabled={isPending}
//         className="mt-6 rounded-xl bg-[#0F6CBD] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0D5EA8] disabled:cursor-not-allowed disabled:opacity-50"
//       >
//         {isPending ? "Saving..." : "Save Changes"}
//       </button>
//     </form>
//   );
// }

"use client";

import { useState, useTransition } from "react";

import { updateStudentProfileAction } from "@/actions/students/profile";

type ProfileFormProps = {
  name: string | null;
  email: string;
};

export default function ProfileForm({
  name,
  email,
}: ProfileFormProps) {
  const [nameValue, setNameValue] = useState(name ?? "");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [isPending, startTransition] = useTransition();

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setMessage("");
    setError("");

    startTransition(async () => {
      const result = await updateStudentProfileAction({
        name: nameValue,
      });

      if (!result.success) {
        setError(result.error);
        return;
      }

      setMessage("Profile updated successfully.");
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm text-slate-400"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            value={nameValue}
            onChange={(event) =>
              setNameValue(event.target.value)
            }
            disabled={isPending}
            className="w-full rounded-xl border border-slate-600 bg-[#061521] px-4 py-3 text-white outline-none transition focus:border-[#38BDF8] disabled:opacity-50"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm text-slate-400"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            value={email}
            disabled
            className="w-full cursor-not-allowed rounded-xl border border-slate-700 bg-[#061521] px-4 py-3 text-slate-500"
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <p className="mt-3 text-sm text-red-400">
          {error}
        </p>
      )}

      {/* Success */}
      {message && (
        <p className="mt-3 text-sm text-green-400">
          {message}
        </p>
      )}

      {/* Save */}
      <button
        type="submit"
        disabled={isPending}
        className="mt-6 rounded-xl bg-[#0F6CBD] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0D5EA8] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}

