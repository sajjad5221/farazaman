"use client";
import React, { useState,useEffect } from "react";
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
    axios.post("http://localhost:8000/contact/",JSON.stringify(formData),{
          headers: {
            "X-CSRFToken": csrfToken,
            "Content-Type": "application/json",
          } 
        }).then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
    
    e.preventDefault();
  };

  // handle csrf token
  const [csrfToken,setCsrfToken] = useState('');
  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken("http://localhost:8000/get-csrf-token/");
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);



  return (
    <form
      className="w-1/2 border mx-auto border-slate-50 rounded-sm whitespace-nowrap p-8"
      method="post"
      action="http://localhost:8000/contact/"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="input-group-1"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        نام
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          id="input-group-1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Farazaman"
        />
      </label>

      <label
        htmlFor="input-group-2"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        ایمیل
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="input-group-2"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="example@gmail.com"
        />
      </label>

      <label
        htmlFor="input-group-3"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        شماره تماس
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          id="input-group-3"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="09131234567"
        />
      </label>

      <label
        htmlFor="input-group-4"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        پیام شما
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
          id="input-group-4"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="09131234567"
        />
      </label>

      <label
        htmlFor="input-group-5"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        
      </label>

      <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        ارسال اطلاعات
      </button>
    </form>
  );
};

export default ContactUs;
