"use client";

import React, { useState, useEffect } from "react";
import GetCsrfToken from "@/Services/GetCsrfToken";
import { useForm } from "react-hook-form";
import FormsDetails from "../FormsDetails";
import Apiclient from "@/Services/Apiclient";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  members_count: "",
  pitch: null as File | null,
};

interface Info {
  name: string;
  email: string;
  phone: string;
  members_count: number;
  pitch: File | null;
}

const StartUpsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Info>({
    mode: "onBlur",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");
  const [Send, setSend] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [filePost, setFilePost] = useState<{ pitch: File | null }>({
    pitch: null,
  });
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken("http://localhost:8000/get-csrf-token/");
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "pitch") {
      if (e.target.files && e.target.files.length > 0) {
        setFilePost({ pitch: e.target.files[0] });
      }
      console.log(e.target.files);
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (data: Info) => {
    // e.preventDefault();
    setIsSubmitting(true);
    setSend(true);
    const sendFormData = new FormData();
    if (filePost.pitch) {
      sendFormData.append("pitch", filePost.pitch, filePost.pitch.name);
    }
    sendFormData.append("name", data.name);
    sendFormData.append("phone", data.phone);
    sendFormData.append("email", data.email);
    sendFormData.append("members_count", data.members_count.toString());

    try {
      const response = await Apiclient.post("startup-submit/", sendFormData, {
        headers: {
          "content-type": "multipart/form-data",
          "X-CSRFToken": csrfToken,
        },
      });

      setIsSuccess(true);
      setMessage("ارسال موفقیت آمیز بود");
      setSend(false);
      reset(); // Reset the form fields
    } catch (error) {
      console.log(error);
      setMessage("ارسال ناموفق بود !");
      setSend(false);
      setIsSuccess(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-neutral-900 mt-16 w-screen" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl text-black font-bold dark:text-neutral-100">
          ثبت استارتاپ ها
        </h2>

        <p className="pt-6 pb-6 text-base text-zinc-600 max-w-2xl text-center m-auto dark:text-neutral-400">
          ثبت استارتاپ های نوپا در شتابدهنده فرازمان
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px md:grid-cols-2 px-12 bg-gray-50 dark:bg-neutral-900">
        <FormsDetails
          title="ثبت استارتاپ در شتابدهند فرازمان"
          description="ثبت استارتاپ شما"
        />
        <div className="w-full px-8 py-8 md:order-last lg:order-last max-[768px]:order-first px-1 py-8">
          <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="mb-5">
                <label
                  htmlFor="startup-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  نام استارتاپ
                </label>
                <input
                  id="startup-name"
                  type="text"
                  placeholder="نام استارتاپ"
                  autoComplete="false"
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
                <label
                  htmlFor="email-address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  آدرس ایمیل استارتاپ
                </label>
                <input
                  id="email-address"
                  type="email"
                  placeholder="آدرس ایمیل استارتاپ"
                  autoComplete="false"
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
                <label
                  htmlFor="phone-number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  شماره موبایل
                </label>
                <input
                  id="phone-number"
                  placeholder="شماره تماس ( مثال : ۰۹۱۳۱۲۳۴۵۶۷)"
                  autoComplete="false"
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

              <div className="mb-5">
                <label
                  htmlFor="member-count"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  تعداد اعضای تیم
                </label>
                <input
                  id="member-count"
                  type="number"
                  placeholder="تعداد اعضای تیم"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900 focus:ring-4 ${
                    errors.members_count ? "border-yellow-500" : ""
                  }`}
                  {...register("members_count", {
                    required: "تعداد اعضای تیم را وارد کنید.",
                    pattern: {
                      value: /^\d+$/,
                      message: "تعداد اعضای تیم را به درستی وارد کنید.",
                    },
                  })}
                  onChange={handleChange}
                />
                {errors.members_count && (
                  <span className="text-yellow-500 text-sm">
                    {errors.members_count.message}
                  </span>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="file"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  فایل معرفی شرکت
                </label>
                <input
                  id="file"
                  type="file"
                  placeholder="قایل ارائه"
                  autoComplete="false"
                  className={`block w-full px-4 py-3 border-2 text-gray-400 style="visibility:hidden placeholder:text-neutral-400 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900 focus:ring-4 ${
                    errors.pitch ? "border-yellow-500" : ""
                  }`}
                  value={formData.pitch?.name}
                  {...register("pitch", {
                    required: "فایل را وارد کنید.",
                    pattern: {
                      value: /b'[a-f]+\d+'/,
                      message: "فایل را به درستی وارد کنید.",
                    },
                  })}
                  onChange={handleChange}
                />
                {errors.pitch && (
                  <span className="text-yellow-500 text-sm">
                    {errors.pitch.message}
                  </span>
                )}
              </div>
              <input
                type="hidden"
                name="csrftokenmiddleware"
                value={csrfToken}
              />
              <button
                type="submit"
                disabled={Send}
                className="w-full py-4 mt-2 font-semibold text-white transition-colors bg-neutral-900 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-200 px-7 dark:bg-white dark:text-black"
              >
                {Send ? "در حال ارسال..." : "ارسال"}
              </button>
            </form>
            {isSuccess && isSubmitting && Message != "" && (
              <div
                className="flex p-4 mb-4 mt-6 text-sm text-bold text-green-900 rounded-lg bg-green-10 dark:bg-neutral-700 dark:text-green-400"
                role="alert"
                style={{ backgroundColor: "#26ff2a54" }}
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
                style={{ backgroundColor: "#ff24244f" }}
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

export default StartUpsForm;
