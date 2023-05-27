'use client'

import Footer from "@/Components/footer/Footer";
import React, {ReactNode, useState} from "react";


export default function page() {
  const submitData = async () =>{
    const headers = { 'Content-Type': 'application/json' }
    const res = await fetch("/startup-submit", {
      headers,
      method: 'POST',
      body: JSON.stringify({
        "data":"data2"
      }),
    })


    const [formData,setFormData] = useState({
      name : "",
      member_count : 0,
      email : "",
      phone : "",
      pitch : ""
    })

    const handleChange = (e:any) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  }
 



  return (
    <div className="ltr">
      <h2>فرم</h2>
      <p>توضیحات اولیه</p>
      <form className="w-1/2 border mx-auto border-slate-50 rounded-sm whitespace-nowrap p-8" onSubmit={submitData} method="post" action="/startup-submit">
        <Input label={"نام استارتاپ"} type="text" setName="name"/>
        <Input label={"شماره تماس"} type="number" setName="phone" onChangeEvent={handleChange} value={formData.phone}/>
        <Input label={"تعداد اعضا"} type="number" setName="member_count" onChange={handleChange} value={formData.member_count}/>
        <Input label={"ایمیل"} type="file" setName="email" onChange={handleChange} value={formData.email}/>
        <div className="flex items-start mb-6"></div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          name="pitch"
          
        >
          Submit
        </button>
      </form>
    </div>
  );
}
