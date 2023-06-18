"use client";
import React, { useState, useEffect } from "react";
import GetCsrfToken from "@/Services/GetCsrfToken";
import axios from "axios";
import { useForm } from "react-hook-form";
import FormsDetails from "../FormsDetails";
interface Info {
  name: string;
  email: string;
  phone: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<Info>({
    name: "",
    email: "",
    phone: "",
  });

  [];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Info>({
    mode: "onBlur",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [Send, setSend] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data: Info) => {
    setSend(true);
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/workspace/",
        JSON.stringify(data),
        {
          headers: {
            "X-CSRFToken": csrfToken,
            "Content-Type": "application/json",
          },
        }
      );
      setIsSuccess(true);
      setMessage("ارسال موفقیت آمیز بود");
      setSend(false);
      reset(); // Reset the form field
    } catch (error) {
      console.log(error);
      setMessage("ارسال ناموفق بود !");
      setSend(false);
      setIsSuccess(false);
    }
  };

  const [csrfToken, setCsrfToken] = useState("");
  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken("http://localhost:8000/get-csrf-token/");
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);

  return (
    <div className="">
      <div className="bg-gray-50 dark:bg-neutral-900 mt-16 " id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <h2 className="text-black text-4xl font-bold dark:text-white">
            ثبت نام فضای کار اشتراکی
          </h2>

          <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-gray-700 dark:text-neutral-400">
            برای استفاده از فضای کار اشتراکی میتوانید فرم زیر را پر کنید تا
            کارشناسان ما هرچه سریعتر با شما تماس برقرار نمایند
          </p>
        </div>
      </div>
      <div
        className="grid grid-cols-1 gap-x-4 md:grid-cols-2 px-12 bg-gray-50 dark:bg-neutral-900">
        <FormsDetails 
        title={"ثبت نام در فضای کار اشتراکی فرازمان"} 
        description={"برای ثبت نام در فضای کار اشتراکی فرازمان فرم رو به رو را پر کنید."}
        />
        <div className="w-full px-8 py-8 md:order-last lg:order-last max-[768px]:order-first px-1 py-8">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  autoComplete="off"
                  pattern="^[\u0600-\u06FF\s]+$"
                  className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900 focus:ring-4 ${
                    errors.name ? "border-yellow-500" : ""
                  }`}
                  {...register("name", {
                    required: "نام خود را وارد کنید.",
                    pattern: {
                      value: /^[\u0600-\u06FF\s]+$/,
                      message: "نام خود را به درستی وارد کنید.",
                    },
                  })}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="text-yellow-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="farazaman@gmail.com"
                  autoComplete="off"
                  className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900 focus:ring-4 ${
                    errors.email ? "border-yellow-500" : ""
                  }`}
                  {...register("email", {
                    required: "آدرس ایمیل خود را وارد کنید.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "آدرس ایمیل را به درستی وارد کنید.",
                    },
                  })}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-yellow-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="mb-5">
                <input
                  type="tel"
                  placeholder="091311111111"
                  autoComplete="off"
                  className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900 focus:ring-4 ${
                    errors.phone ? "border-yellow-500" : ""
                  }`}
                  {...register("phone", {
                    required: "شماره تماس را وارد کنید.",
                    pattern: {
                      value: /^\d{11}$/,
                      message: "شماره تماس را به درستی وارد کنید.",
                    },
                  })}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <span className="text-yellow-500 text-sm">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                disabled={Send}
                className="w-full py-4 font-semibold text-white transition-colors bg-neutral-900 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-200 px-7 dark:bg-white dark:text-black"
              >
                {Send ? "در حال ارسال..." : "ارسال"}
              </button>
            </form>
            {isSuccess && isSubmitting && Message != "" && (
              <div
                className="flex p-4 mb-4 mt-6 text-sm text-bold text-green-900 rounded-lg bg-green-10 dark:bg-neutral-700 dark:text-green-400"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">پیام</span>
                <div>
                  <span className="font-medium">{Message}</span>!
                </div>
              </div>
            )}

            {!isSuccess && isSubmitting && Message != "" && (
              <div
                className="flex p-4 mb-4 mt-6 text-sm text-bold text-red-900 rounded-lg bg-red-90 dark:bg-neutral-700 dark:text-red-400"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">پیام</span>
                <div>
                  <span className="font-medium">{Message}</span>!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;