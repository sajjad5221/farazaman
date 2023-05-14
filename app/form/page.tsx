import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Input from "@/Components/form/input";
import React from "react";

export default function page() {
  return (
    <>
    <Header/>
    <div className="ltr">
      <h2>فرم</h2>
      <p>توضیحات اولیه</p>
      <form className="w-1/2 border mx-auto border-slate-50 rounded-sm whitespace-nowrap p-8">
        <Input label={"نام و نام خانوادگی"} type="text" />
        <Input label={"شماره تماس"} type="number" />
        <Input label={"تعداد اعضا"} type="number" />
        <Input label={"پیچ تک"} type="file" />

        <div className="flex items-start mb-6"></div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
}
