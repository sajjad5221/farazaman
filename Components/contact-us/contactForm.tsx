"use client";
import React, { useState, useEffect } from "react";
import GetCsrfToken from "@/Services/GetCsrfToken";
import axios from "axios";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // send form data with axios to sever
    axios
      .post("http://localhost:8000/contact/", JSON.stringify(formData), {
        headers: {
          "X-CSRFToken": csrfToken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    e.preventDefault();
  };

  // handle csrf token
  const [csrfToken, setCsrfToken] = useState("");
  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken("http://localhost:8000/get-csrf-token/");
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-neutral-900 mt-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-black text-4xl font-bold dark:text-white">ارتباط با ما</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-gray-700 dark:text-neutral-400">
          برای ارتباط با ما میتوانید فرم زیر را پر کنید تا کارشناسان ما هرچه سریعتر با شما تماس برقرار نمایند
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
          <h2 className="text-lg font-bold text-black dark:text-white">ارتباط با شتابدهنده فرازمان</h2>
          <p className="max-w-sm mt-4 mb-4 text-gray-600 dark:text-neutral-400">
          برای ارتباط با تیم شتابدهنده فرازمان میتوانیداز طریق پر کردن فرم روبه رو یا روش های زیر اقدام نمایید.
          </p>

          <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-neutral-400">

            <span className="text-gray-600 dark:text-neutral-400">ایران-اصفهان-خیابان سعادت آباد-مجتمع طلا- واحد c</span>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-gray-600 dark:text-neutral-400">

            <a href="mailto:hello@halley.vercel.app">farazaman@gmail.com</a>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-gray-600 text-dark-600 dark:text-neutral-400">

            <a href="tel:0313313155">0313313155</a>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
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
                placeholder="farazaman@gmail.com"
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
              <label htmlFor="email_address" className="sr-only">
                شماره تماس
              </label>
              <input
                id="phone-number"
                type="number"
                placeholder="091311111111"
                name="phone"
                autoComplete="false"
                className={
                  "w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900   focus:ring-4"
                }
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                name="message"
                placeholder="پیام شما"
                className={
                  "w-full px-4 py-3 border-2 placeholder:text-neutral-800 dark:text-white dark:placeholder:text-neutral-200 dark:bg-neutral-900 rounded-md outline-none  h-36 focus:ring-4"
                }
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 font-semibold text-white transition-colors bg-neutral-900 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-200 px-7 dark:bg-white dark:text-black "
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
      {/* <Button/> */}
    </div>
  );
};

export default ContactUs;
