"use client";
import React, { useState } from "react";
import FormInput from "../form/FormInput";
import Form from "../form/Form";
import Link from "next/link";
import errorToast from "../toast/ErrorToast";
import AuthValidation from "@/validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "@/services/auth.service";
import successToast from "../toast/SuccessToast";
import LoadingModal from "../loading/LoadingModal";

const SignUpForm = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handelSubmit = async (values: any) => {
    setError("");
    setIsLoading(true);
    try {
      if (values.password !== values.confirm_password) {
        throw new Error("Both Password  doesn't match");
      }
      values.role = "Member";
      const res = await signUp(values);
      if (!res.success) {
        throw new Error(res.message);
      }
      successToast(res.message);
    } catch (error: any) {
      setError(error.message);
      errorToast(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handelSubmit} resolver={zodResolver(AuthValidation.signUpValidationSchema)}>
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <FormInput name="name.first" label="First Name" />
            <FormInput name="name.last" label="Last Name" />
          </div>
          <div>
            <FormInput name="email" label="Email" />
          </div>
          <div>
            <FormInput name="password" label="Password" />
          </div>
          <div>
            <FormInput name="confirm_password" label="Confirm Password" />
          </div>
          <button className="w-full py-3 bg-primary_color text-white">Sign Up</button>
        </div>

        <div className="flex justify-end mt-3">
          <h4 className="  text-light_text_medium_color dark:text-dark_text_medium_color">
            Already have an account ?
            <Link href={`/auth/sign-in`} className=" text-primary_color">
              {" "}
              Sign In
            </Link>
          </h4>
        </div>

        {<p className="mt-1 text-warning_color">{error}</p>}
      </Form>
      {isLoading ? <LoadingModal message="Just a moment..." /> : null}
    </div>
  );
};

export default SignUpForm;
