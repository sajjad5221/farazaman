"use client";
import React, { useState, useEffect } from "react";
import GetCsrfToken from "@/Services/GetCsrfToken";
import axios from "axios";
import { useForm } from "react-hook-form";

interface Info {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<Info>({
    name: "",
    email: "",
    phone: "",
    message: "",
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
        "http://localhost:8000/contact/",
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
    <div className="bg-gray-50 dark:bg-neutral-900 mt-16 w-screen" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-black text-4xl font-bold dark:text-white">
          ارتباط با ما
        </h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-gray-700 dark:text-neutral-400">
          برای ارتباط با ما میتوانید فرم زیر را پر کنید تا کارشناسان ما هرچه
          سریعتر با شما تماس برقرار نمایند
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
          <h2 className="text-lg font-bold text-black dark:text-white">
            ارتباط با شتابدهنده فرازمان
          </h2>
          <p className="max-w-sm mt-4 mb-4 text-gray-600 dark:text-neutral-400">
            برای ارتباط با تیم شتابدهنده فرازمان میتوانیداز طریق پر کردن فرم
            روبه رو یا روش های زیر اقدام نمایید.
          </p>

          <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-neutral-400">
            <span className="text-gray-600 dark:text-neutral-400">
              ایران-اصفهان-خیابان سعادت آباد-مجتمع طلا- واحد c
            </span>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-gray-600 dark:text-neutral-400">
            <a href="mailto:hello@halley.vercel.app">farazaman@gmail.com</a>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-gray-600 text-dark-600 dark:text-neutral-400">
            <a href="tel:0313313155">0313313155</a>
          </div>
        </div>

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
                  required: "نام استارتاپ را وارد کنید.",
                  pattern: {
                    value: /^[\u0600-\u06FF\s]+$/,
                    message: "نام استارتاپ را به درستی وارد کنید.",
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

            <div className="mb-3">
              <textarea
                placeholder="پیام شما"
                className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400 dark:text-white dark:placeholder:text-neutral-200 dark:bg-neutral-900 rounded-md outline-none h-36 focus:ring-4 ${
                  errors.message ? "border-yellow-500" : ""
                }`}
                {...register("message", {
                  required: "متن پیام را وارد کنید.",
                })}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="text-yellow-500 text-sm">
                  {errors.message.message}
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
          {isSuccess && isSubmitting && (Message != "") && (
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

          {!isSuccess && isSubmitting && (Message != "") && (
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
  );
};

export default ContactUs;
