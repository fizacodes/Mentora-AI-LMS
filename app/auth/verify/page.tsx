import VerifyOtpForm from "./verify-otp-form";

export default async function VerifyOtpPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <VerifyOtpForm email={email ?? ""} />
    </div>
  );
}