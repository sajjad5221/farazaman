"use client";
import React, { useState, useEffect } from "react";
import GetCsrfToken from "@/Services/GetCsrfToken";
import axios from "axios";
const HiringForm = () => {
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
      <form onSubmit={handleSubmit} className='relative top-[9px] left-[30px] h-[1060px] m-[30px] mb-0 mt-[55px] w-full border-b-[2px] border-neutral-900 dark:border-white bg-white dark:bg-neutral-900 2xl:h-[850px] xl:h-[850px] lg:h-[850px] md:h-[850px] sm:h-[850px] s:h-[1170px] mobile:h-[1170px] little:h-[1170px]'>
        <div className="subject-form relative grid place-items-center p-3">
          <h1 className="subject-box text-[40px] text-neutral-950 dark:text-white font-bold ">
            استخدام
          </h1>
          <p className="descrption-subject text-lg text-neutral-950 dark:text-zinc-400 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg mobile:text-[15px] little:text-[12px]">
                 برای استخدام میتواند فرم زیر را پر کنید تا کارشناسان ما با شما تماس بگیرند
          </p>
        </div>
        <div className='box relative m-0 mt-[55px] w-full h-[800px] right-[0px] top-[100px] dark:shadow-slate-100 xl:w-[42%] xl:right-[667px] 2xl:w-[42%] 2xl:right-[53%] 2xl:-top-[30px] xl:-top-[30px] lg:w-[42%] lg:right-[530px] lg:-top-[30px] md:w-[42%] md:right-[420px] md:-top-[30px] sm:w-[42%] sm:right-[305px] sm:-top-[30px] s:right-0 s:-top-[30px] s:w-full mobile:right-0 mobile:-top-[30px] mobile:w-full little:right-0 little:-top-[30px] little:w-full'></div>
        <div className=" absolute right-[53%] top-[120px] w-[33%] p-[10px] m-0 mr-[69px] ml-[68px] mt-[16px] z-0 mb-6 group mobile:-right-[70px] mobile:w-[100%] s:top-[164px] s:-right-[70px] s:w-[100%] xl:w-[33%] xl:top-[137px] xl:right-[52%] xl:p-[10px] xl:m-0 xl:mt-[16px] xl:ml-[60px] xl:mr-[55px] 2xl:w-[33%]  2xl:ml-[69px] 2xl:right-[53%] 2xl:top-[162px] lg:w-[33%] lg:mr-[55px] lg:right-[49%] lg:top-[137px] md:w-[33%] md:right-[50%] md:top-[137px] md:h-[62px] sm:w-[33%] sm:right-[41%] sm:top-[137px] mobile:top-[164px] little:w-[100%] little:-right-[70px] little:top-[164px] long:right-[45%] long2:right-[41%] long3:right-[39%] long4:right-[46%] long5:right-[35%]" id='name-input'>
          <label className="text-[13px] text-zinc-600 dark:text-zinc-400"> نام </label>
          <input type="text" name="first_name" id="floating_first_name" autoComplete="off" className="px-4 py-3 block w-[100%]  text-sm text-neutral-900 bg-transparent border-[2px] border-zinc-300 rounded-md indent-[10px] appearance-none dark:text-white dark:border-white focus:outline-none focus:ring-4" placeholder="نام" required />
        </div>
        <div className="absolute right-[53%] top-[186px] w-[33%] p-[10px] m-0 mr-[69px] ml-[68px] mt-[22px] z-0 mb-6 group mobile:-right-[70px] mobile:w-[100%] s:top-[232px] s:-right-[70px] s:w-[100%] xl:w-[33%] xl:ml-[60px] xl:right-[52%] xl:top-[205px] xl:mr-[55px] 2xl:w-[33%] 2xl:right-[53%] 2xl:top-[232px] lg:mr-[55px] lg:w-[33%] lg:right-[49%] lg:top-[205px] md:w-[33%] md:right-[50%] md:top-[205px] md:h-[62px] sm:w-[33%] sm:right-[41%] sm:top-[205px] mobile:top-[232px] little:w-[100%] little:-right-[70px] little:top-[232px] long:right-[45%] long2:right-[41%] long3:right-[39%] long4:right-[46%] long5:right-[35%]" id='lastName-input '>
          <label className="text-[13px] text-zinc-600 dark:text-zinc-400 "> نام خانوادگی </label>
          <input type="text" name="last_name" id="floating_last_name" autoComplete="off" className=" px-4 py-3 block w-[100%]  text-sm text-neutral-900 bg-transparent border-[2px] border-zinc-300 rounded-md indent-[10px] appearance-none dark:text-white dark:border-white focus:outline-none focus:ring-4" placeholder="نام خانوادگی" required />
        </div>
        <div className="absolute right-[53%] top-[258px] p-[10px] m-0 mr-[69px] ml-[68px] mt-[22px] w-[33%] z-0 mb-6 group mobile:-right-[70px] mobile:w-[100%]  s:top-[305px] s:-right-[70px] s:w-[100%] xl:w-[33%] xl:ml-[60px] xl:right-[52%] xl:top-[280px]  xl:mr-[55px] 2xl:w-[33%] 2xl:right-[53%] 2xl:top-[307px] lg:w-[33%] lg:mr-[55px] lg:right-[49%] lg:top-[280px] md:w-[33%] md:right-[50%] md:top-[280px] md:h-[62px] sm:w-[33%] sm:right-[41%] sm:top-[280px] mobile:top-[305px] little:w-[100%] little:-right-[70px] little:top-[305px] long:right-[45%] long2:right-[41%] long3:right-[39%] long4:right-[46%] long5:right-[35%]" id='email-input '>
          <label className="text-[13px] text-zinc-600 dark:text-zinc-400 "> ایمیل</label>
          <input type="email" name="email" id="floating_email" autoComplete="off" className=" px-4 py-3 block  w-[100%] text-sm text-neutral-900 bg-transparent border-[2px] border-zinc-300 rounded-md indent-[10px] appearance-none dark:text-white dark:border-white focus:outline-none focus:ring-4" placeholder="ایمیل" required />
        </div>
        <div className="absolute right-[53%] top-[330px] w-[33%] h-[63px] p-[10px] m-0 mr-[69px] ml-[68px] mt-[22px] z-0 group mobile:-right-[70px] mobile:w-[100%]  s:top-[378px] s:-right-[70px] s:w-[100%] s:bottom-[450px] xl:w-[33%] xl:ml-[60px] xl:right-[52%] xl:top-[355px]  xl:mr-[55px] 2xl:w-[33%] 2xl:right-[53%] 2xl:top-[46%] lg:w-[33%] lg:mr-[55px] lg:right-[49%] lg:top-[355px] md:w-[33%] md:right-[50%] md:top-[355px] md:h-[62px] sm:w-[33%] sm:right-[41%] sm:top-[354px] mobile:top-[379px] little:w-[100%] little:-right-[70px] little:top-[379px] long:right-[45%] long2:right-[41%] long3:right-[39%] long4:right-[46%] long5:right-[35%]" id='phone-input '>
          <label className="text-[13px] text-zinc-600 dark:text-zinc-400 "> تلفن همراه</label>
          <input type="tel"  name="phone" id="floating_phone" autoComplete="off" className=" px-4 py-3 block  w-[100%] text-sm text-neutral-900 bg-transparent border-[2px] rounded-md border-zinc-300 indent-[10px] appearance-none dark:text-white dark:border-white focus:outline-none focus:ring-4" placeholder="تلفن همراه" required />
        </div>
        <div className='design-type relative right-[52%] bottom-[420px] w-[32%] m-0 mr-[78px] mt-[39px] mobile:w-[70%] mobile:-right-[15px] mobile:bottom-[537px] mobile2:bottom-[510px] s:right-[1%] s:bottom-[510px] sm:w-[30%] sm:right-[41%] sm:bottom-[535px] md:w-[31%] md:right-[50%] md:-top-[530px] lg:w-[31%] lg:right-[48%] lg:-top-[530px] xl:w-[31%] xl:right-[51%] xl:-top-[530px] 2xl:right-[53%] 2xl:-top-[500px] little:w-[20%] little:-right-[30px] little:bottom-[537px] little2:bottom-[510px] long:right-[45%] long2:right-[40%] long3:right-[39%] long4:right-[46%]'>
          <p className='description-type text-zinc-600 w-full text-xl dark:text-gray-400 mobile:text-[18px] s:text-[18px] sm:text-lg'>
            نوع طرح :
          </p>
        </div>
        <div className="type1 absolute right-[66%] bottom-[600px] m-[6px] flex items-center mb-4 mobile:right-[35%] mobile:bottom-[630px] s:bottom-[630px] s:right-[33%] sm:right-[57%] sm:bottom-[305px] md:right-[70%] md:bottom-[330px] lg:right-[68%] lg:bottom-[330px] xl:right-[66%] xl:bottom-[330px] 2xl:right-[66%] 2xl:bottom-[300px] little:right-[35%] little:bottom-[630px] long:right-[59%] long:bottom-[330px] long2:right-[56%] long2:bottom-[330px] long3:right-[57%] long4:right-[66%]">
          <input checked id="default-radio-1" type="radio" value="normal" name="default-box" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mobile:w-[16%] s:w-[15%] sm:w-[14px] sm:-ml-[5px]" />
          <label htmlFor="default-radio-1" className="cursor-pointer mr-[10px] text-[18px] ml-2 text-sm font-medium text-zinc-600 dark:text-gray-300 mobile:text-[14px] s:text-[14px] sm:text-[16px]">طرح عادی  </label>
        </div>
        <div className="type2 absolute right-[77%] bottom-[610px] w-[7%] m-[6px] flex items-center mobile:right-[61%] mobile:bottom-[640px] mobile:w-[22%] s:bottom-[640px] s:right-[60%] s:w-[20%] sm:right-[57%] sm:bottom-[280px] sm:w-[15%] md:right-[82%] md:bottom-[340px] md:w-[12%] lg:right-[78%] lg:bottom-[340px] lg:w-[9%] xl:right-[77%] xl:bottom-[340px] xl:w-[8%] 2xl:right-[77%] 2xl:bottom-[310px] 2xl:w-[90px] little:right-[60%] little:bottom-[640px] little:w-[26%] long:right-[72%] long:bottom-[340px] long2:right-[68%] long2:bottom-[340px] long3:right-[68%] long4:right-[78%]">
          <input id="default-radio-2" type="radio" value="poiesh" name="default-box" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mobile:w-[14%] sm:w-[14px] s:w-[15%] sm:-ml-[5px]" />
          <label htmlFor="default-radio-2" className="cursor-pointer mr-[10px] text-[18px] ml-2 text-sm font-medium text-zinc-600 dark:text-gray-300 mobile:text-[14px] s:text-[14px] sm:text-[16px]"> طرح پویش </label>
        </div>


        <div className="mb-5 absolute h-fit w-[32%] left-[167px] top-[510px] s:top-[46%] s:right-[7px] s:w-[98%] s:bottom-[450px] xl:ml-[60px] xl:right-[57%] xl:top-[61%] 2xl:right-[57%] 2xl:w-[32%] 2xl:top-[64%] lg:right-[55%] lg:top-[61%]  md:right-[59%] md:top-[60%] md:w-[31%] sm:right-[51%] sm:top-[67%] sm:w-[30%] mobile:top-[46%] mobile:right-[7px] mobile:w-[97%] little:right-[9px] little:top-[46%] little:w-[95%] long:right-[50%] long2:right-[46%] long3:right-[46%] long3:top-[61%] long4:right-[54%] long5:right-[44%]">
          <label className="text-[13px]"> رزومه </label>
          <input id="dropzone-file" type="file" className="w-full px-4 py-3 border-2 border-zinc-300 text-zinc-400  placeholder:text-neutral-400 dark:text-white rounded-md outline-none dark:placeholder:text-neutral-200 dark:bg-neutral-900 focus:ring-4" required/>
        </div>
        <input type="submit" value="ثبت فرم" className="flex place-content-center	 absolute right-[53%] top-[580px] mr-[268px] ml-[268px] mt-[36px] my-[25px] mx-[279px] cursor-pointer text-white bg-neutral-950 hover:bg-neutral-800  hover:text-white duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-white dark:text-black dark:text-lg mobile:right-[29%] mobile:top-[610px] mobile:w-[24%] mobile:mr-[36px] mobile:ml-[38px] mobile2:top-[610px] s:right-[29%] s:top-[620px] s:w-[20%] s:mr-[52px] s:ml-[56px] sm:top-[645px] sm:right-[51%] sm:ml-[86px] sm:mr-[73px] md:right-[53%] md:top-[580px] md:mr-[115px] md:ml-[129px] lg:right-[51%] lg:top-[600px] lg:w-[9%] lg:mr-[170px] lg:ml-[175px] xl:right-[51%] xl:mr-[230px] xl:ml-[224px] xl:top-[600px] 2xl:right-[54%] 2xl:top-[625px] little:-right-[40%] little:top-[610px] little:w-[25%] little2:top-[610px] little2:-right-[30%] long:right-[43%] long2:right-[44%] long3:right-[45%] long3:top-[600px] long4:right-[51%]"/>
        <div className="contact-box relative bottom-[919px] right-0 mr-[140px] p-3 flex w-[35%] h-[280px] 2xl:mr-[140px] 2xl:bottom-[823px] 2xl:right-0 2xl:w-[35%] xl:mr-[140px] xl:h-[320px] xl:bottom-[870px] xl:-right-[30px] xl:w-[35%] lg:mr-[140px] lg:h-[340px] lg:bottom-[870px] lg:right-[5px] lg:w-[35%] md:mr-[140px] md:h-[390px] md:bottom-[870px] md:-right-[10px] md:w-[35%] sm:mr-[140px] sm:h-[430px] sm:bottom-[870px] sm:-right-[50px] sm:w-[35%] s:bottom-[330px] s:h-[430px] s:w-full s:right-0 mobile:bottom-[330px] mobile:w-full mobile:right-0 mobile:h-[420px] little:right-0 little:bottom-[330px] little:mr-0 little:w-full little:h-[380px] long3:-right-[40px] long2:-right-[45px]">
          <h1 className="subject absolute text-2xl text-neutral-950 dark:text-white font-bold">
            ارتباط با کارشناس فرازمان
          </h1>
          <p className="description1 text-zinc-600 dark:text-zinc-400 absolute top-[70px] text-lg 2xl:w-[75%] xl:top-[70px] md:top-[90px] sm:right-[12px] sm:top-[100px] s:top-[100px] mobile:top-[110px] little:top-[70px]">
          برای ارتباط با تیم شتابدهنده فرازمان میتوانید از طریق  پر کردن فرم داخل صفحه <a href="http://localhost:3000/contact-us" className="link-contact underline text-zinc-950 dark:text-white"> ارتباط با ما </a> یا به کمک روش های زیر با ما در ارتباط باشید
          </p>
          <p className="address text-zinc-600 dark:text-zinc-400 absolute top-[151px] text-lg xl:top-[165px] lg:top-[190px] md:top-[240px] sm:top-[260px] s:top-[240px] mobile:top-[220px] little:top-[210px]">
               ایران-اصفهان-اصفهان-خیابان سعادت آباد-مجتمع طلا- واحد c
          </p>
          <p className="gmail text-zinc-600 dark:text-zinc-400 absolute top-[192px] text-lg xl:top-[230px] lg:top-[260px] md:top-[310px] sm:top-[360px] s:top-[320px] mobile:top-[300px] little:top-[280px]">
               farazaman@gmail.com
          </p>
          <p className="mobile text-zinc-600 dark:text-zinc-400 absolute top-[230px] text-lg xl:top-[276px] lg:top-[300px] md:top-[350px] sm:top-[400px] s:top-[390px] mobile:top-[360px] little:top-[330px]">
               0313313155
          </p>
        </div>
      </form>
    );
};

export default HiringForm;
