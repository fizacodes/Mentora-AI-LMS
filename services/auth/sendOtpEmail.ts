import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});


export async function sendOtpEmail(
  email: string,
  otp: string
) {

  await transporter.sendMail({

    from: process.env.EMAIL_USER,

    to: email,

    subject: "Mentora AI Email Verification",

    html: `
      <div>
        <h2>Verify your email</h2>

        <p>Your verification code is:</p>

        <h1>${otp}</h1>

        <p>This OTP expires in 10 minutes.</p>
      </div>
    `,
  });

}