"use client";
import React, { useState } from "react";
import FormInput from "../form/FormInput";
import Form from "../form/Form";
import Link from "next/link";
import { toast } from "sonner";
import { signIn } from "@/services/auth.service";
import successToast from "../toast/SuccessToast";
import errorToast from "../toast/ErrorToast";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthValidation from "@/validations/auth.validation";
import LoadingModal from "../loading/LoadingModal";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const redirectUrl = useSearchParams().get("redirect");
  const handelSubmit = async (values: any) => {
    setError("");
    setIsLoading(true);
    try {
      const res = await signIn(values);
      if (!res.success) {
        throw new Error(res.message);
      }
      successToast(res.message);
      if (redirectUrl) {
        router.replace(redirectUrl);
      } else {
        router.push("/");
      }
    } catch (error: any) {
      setError(error.message);
      errorToast(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Form onSubmit={handelSubmit} resolver={zodResolver(AuthValidation.signInValidationSchema)}>
        <div className="space-y-5">
          <FormInput name="email" label="Email" />

          <FormInput name="password" label="Password" />
        </div>
        <div className="mt-10">
          <button className="w-full py-4 bg-primary_color text-white">Sign Up</button>
        </div>

        <div className="flex justify-end mt-3">
          <h4 className=" text-light_text_medium_color dark:text-dark_text_medium_color">
            Don't have any account ?
            <Link href={`/auth/sign-up`} className=" text-primary_color">
              {" "}
              Sign Up
            </Link>
          </h4>
        </div>
        {<p className="mt-1 text-warning_color">{error}</p>}
      </Form>
      {isLoading ? <LoadingModal message="Just a moment..." /> : null}
    </div>
  );
};

export default SignInForm;
