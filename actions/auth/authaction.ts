"use server";

import { signupSchema } from "@/lib/validators/authSchema";
import { getFieldErrors } from "@/lib/validators/zod";
import { signupService } from "@/services/auth/signup";
import { signIn } from "@/auth";

export async function signupAction(
  _prevState: any,
  formData: FormData
) {
 const rawData = {
  name: String(formData.get("name") ?? ""),
  email: String(formData.get("email") ?? ""),
  password: String(formData.get("password") ?? ""),
};

  const result = signupSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "Please fix the highlighted fields.",
      email:rawData.email,
      errors: getFieldErrors(result.error),
    };
  }

  return await signupService(result.data);
}





import { AuthError } from "next-auth";


export async function loginAction(
  prevState:any,
  formData:FormData
){

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;


  try {

    await signIn("credentials", {
      email,
      password,
      redirectTo:"/dashboard",
    });


  } catch(error) {


    if(error instanceof AuthError){

      return {
        success:false,
        message:"Invalid email or password",
      };

    }


    throw error;
  }


  return {
    success:true,
    message:"Login successful",
  };
}