"use client";

import React, { useState, useEffect } from "react";
import GetCsrfToken from "@/Services/GetCsrfToken";
import axios from "axios";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  members_count: "",
  pitch: null as File | null,
};

const StartUpsForm = () => {
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
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendFormData = new FormData();
    if (filePost.pitch) {
      sendFormData.append("pitch", filePost.pitch, filePost.pitch.name);
    }
    sendFormData.append("name", formData.name);
    sendFormData.append("phone", formData.phone);
    sendFormData.append("email", formData.email);
    sendFormData.append("members_count", formData.members_count.toString());

    try {
      const response = await axios.post(
        "http://localhost:8000/startup-submit/",
        sendFormData,
        {
          headers: {
            "content-type": "multipart/form-data",
            "X-CSRFToken": csrfToken,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-neutral-900 mt-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl text-zinc-900 font-bold dark:text-neutral-400">
          ثبت استارتاپ ها
        </h2>

        <p className="pt-6 pb-6 text-base text-zinc-600 max-w-2xl text-center m-auto dark:text-neutral-400">
          ثبت استارتاپ های نوپا در شتابدهنده فرازمان
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
          <h2 className="text-lg font-bold text-black dark:text-neutral-400">
            ارتباط با شتابدهنده فرازمان
          </h2>
          <p className="max-w-sm mt-4 mb-4 text-black dark:text-neutral-400">
            برای ثبت استارتاپ خود در شتابدهنده فرازمان می توانید فرم زیر را
            پرکرده و منتظر تماس کارشناسان ما باشید.
          </p>

          <div className="flex items-center text-black mt-8 space-x-2 text-dark-600 dark:text-neutral-400">
            <span>ایران-اصفهان-خیابان سعادت آباد-مجتمع طلا- واحد c</span>
          </div>

          <div className="flex items-center mt-2 text-black space-x-2 text-dark-600 dark:text-neutral-400">
            <a href="mailto:hello@halley.vercel.app">farazaman@gmail.com</a>
          </div>

          <div className="flex items-center mt-2 text-black space-x-2 text-dark-600 dark:text-neutral-400">
            <a href="tel:0313313155">0313313155</a>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="text"
                placeholder="نام استارتاپ"
                autoComplete="false"
                className={
                  "w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900 focus:ring-4"
                }
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                آدرس ایمیل شما
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="آدرس ایمیل استارتاپ"
                name="email"
                autoComplete="false"
                className={
                  "w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900   focus:ring-4"
                }
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="phone-number" className="sr-only">
                شماره تماس
              </label>
              <input
                id="phone-number"
                type="number"
                placeholder="شماره تماس ( مثال : ۰۹۱۳۱۲۳۴۵۶۷)"
                name="phone"
                autoComplete="false"
                className={
                  "w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900   focus:ring-4"
                }
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="member-count" className="sr-only">
                تعداد اعضا
              </label>
              <input
                id="member-count"
                type="number"
                placeholder="تعداد اعضای تیم"
                name="members_count"
                autoComplete="false"
                className={
                  "w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900   focus:ring-4"
                }
                value={formData.members_count}
                onChange={handleChange}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="member-count" className="sr-only">
                فایل ارائه
              </label>
              <input
                id="member-count"
                type="file"
                placeholder="قایل ارائه"
                name="pitch"
                autoComplete="false"
                className={
                  "w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900   focus:ring-4"
                }
                value={formData.pitch?.name}
                onChange={handleChange}
              />
            </div>
            <input type="hidden" name="csrftokenmiddleware" value={csrfToken} />
            <button
              type="submit"
              className="w-full py-4 font-semibold text-white transition-colors bg-neutral-900 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-200 px-7 dark:bg-white dark:text-black "
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartUpsForm;
