import { useForm } from "react-hook-form";
import { useState } from "react";
import { TextInput } from "../components";
import { CustomButton, Loading } from "../components";

const ResetPassword = () => {
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {};

  return (
    <div className="flex items-center justify-center w-full h-[100vh] bg-bgColor p-6">
      <div className="w-full bg-primary md:w-1/3 2xl:w-1/4 px-6 py-8 shadow-md rounded-lg">
        <p className="text-ascent-1 text-lg font-semibold">Email Address</p>

        <span className="text-sm text-ascent-2">
          Enter Email Address used during registration
        </span>

        <form
          onSubmit={handleSubmit(onsubmit)}
          className="flex flex-col gap-5 py-4"
        >
          <TextInput
            name="email"
            placeholder="email@example.com"
            type="email"
            register={register("email", {
              required: "Email is required",
            })}
            styles="w-full rounded-lg"
            labelStyle="ml-2"
            error={errors.email ? errors.email.message : ""}
          />
          {errMsg?.message && (
            <span
              role="alert"
              className={`text-sm ${
                errMsg?.status === "failed"
                  ? "text-[#f64949fe]"
                  : "text-[#2ba150fe]"
              }mt-0.5`}
            >
              {errMsg?.message}
            </span>
          )}

          {isSubmitting ? (
            <Loading />
          ) : (
            <CustomButton
              type="button"
              title="Submit"
              containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
