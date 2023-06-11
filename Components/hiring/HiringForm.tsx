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
      <form onSubmit={handleSubmit} className='relative top-[9px] left-[30px] h-[1060px] m-[30px] mb-0 mt-[55px] w-full border-none bg-white dark:bg-neutral-900 2xl:h-[1060px] xl:h-[1060px] lg:h-[1060px] md:h-[1060px] sm:h-[1060px] s:h-[1450px] mobile:h-[1492px] little:h-[1387px]'>
        <div className="subject-form relative grid place-items-center p-3">
          <h1 className="subject-box text-[40px] text-neutral-950 dark:text-white font-bold">
            استخدام
          </h1>
          <p className="descrption-subject text-lg text-neutral-950 dark:text-zinc-400 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg mobile:text-[15px] little:text-[12px]">
                برای استخدام میتواند فرم زیر را پر کنید تا کارشناسان ما با شما تماس <span className="grid place-items-center place-content-center 2xl:absolute 2xl:bottom-[11px] 2xl:left-[483px] xl:absolute xl:bottom-[11px] xl:left-[360px] lg:absolute lg:bottom-[11px] lg:left-[233px] md:absolute md:bottom-[11px] md:left-[105px] sm:absolute sm:bottom-[11px] sm:left-[42px]">بگیرند</span>
          </p>
        </div>
        <div className='box relative m-0 mt-[55px] w-full h-[800px] right-[0px] top-[100px] border-[1px] border-solid border-gray-500 rounded-md shadow shadow-slate-800 dark:shadow-slate-100 xl:w-[42%] xl:right-[667px] 2xl:w-[42%] 2xl:right-[53%] 2xl:-top-[30px] xl:-top-[30px] lg:w-[42%] lg:right-[530px] lg:-top-[30px] md:w-[42%] md:right-[420px] md:-top-[30px] sm:w-[42%] sm:right-[305px] sm:-top-[30px] s:right-0 s:-top-[30px] s:w-full mobile:right-0 mobile:-top-[30px] mobile:w-full little:right-0 little:-top-[30px] little:w-full'></div>
        <div className="absolute right-[53%] top-[120px] w-[33%] p-[10px] m-0 mr-[69px] ml-[68px] mt-[16px] z-0 mb-6 group mobile:-right-[20px] mobile:w-[77%] s:-right-[3%] s:w-[77%] xl:w-[33%] xl:top-[137px] xl:right-[52%] xl:p-[10px] xl:m-0 xl:mt-[16px] xl:ml-[60px] xl:mr-[55px] 2xl:w-[33%]  2xl:ml-[69px] 2xl:right-[53%] 2xl:top-[162px] lg:w-[33%] lg:mr-[55px] lg:right-[51%] lg:top-[137px] md:w-[33%] md:right-[50%] md:top-[137px] md:h-[62px] sm:w-[33%] sm:right-[41%] sm:top-[137px] s:top-[164px] mobile:top-[164px] little:w-[75%] little:-right-[7%] little:top-[164px]" id='name-input'>
          <input type="text" name="floating_first_name" id="floating_first_name" className="block w-[100%] py-2.5 px-0 text-sm text-neutral-900 bg-transparent border-[2px] border-zinc-300 rounded-md indent-[10px] appearance-none dark:text-white dark:border-white dark:focus:border-yellow-700 focus:outline-none focus:ring-0 focus:border-yellow-700 peer" placeholder="نام" required />
        </div>
        <div className="absolute right-[53%] top-[186px] w-[33%] p-[10px] m-0 mr-[69px] ml-[68px] mt-[22px] z-0 mb-6 group mobile:-right-[20px] mobile:w-[77%] s:-right-[3%] s:w-[77%] xl:w-[33%] xl:ml-[60px] xl:right-[52%] xl:top-[205px] xl:mr-[55px] 2xl:w-[33%] 2xl:right-[53%] 2xl:top-[232px] lg:mr-[55px] lg:w-[33%] lg:right-[51%] lg:top-[205px] md:w-[33%] md:right-[50%] md:top-[205px] md:h-[62px] sm:w-[33%] sm:right-[41%] sm:top-[205px] s:top-[232px] mobile:top-[232px] little:w-[75%] little:-right-[7%] little:top-[232px]" id='lastName-input '>
          <input type="text" name="floating_last_name" id="floating_last_name" className="block w-[100%] py-2.5 px-0 text-sm text-neutral-900 bg-transparent border-[2px] border-zinc-300 rounded-md indent-[10px] appearance-none dark:text-white dark:border-white dark:focus:border-yellow-700 focus:outline-none focus:ring-0 focus:border-yellow-700 peer" placeholder="نام خانوادگی" required />
        </div>
        <div className="absolute right-[53%] top-[258px] p-[10px] m-0 mr-[69px] ml-[68px] mt-[22px] w-[33%] z-0 mb-6 group mobile:-right-[20px] mobile:w-[77%] s:-right-[3%] s:w-[77%] xl:w-[33%] xl:ml-[60px] xl:right-[52%] xl:top-[280px]  xl:mr-[55px] 2xl:w-[33%] 2xl:right-[53%] 2xl:top-[307px] lg:w-[33%] lg:mr-[55px] lg:right-[51%] lg:top-[280px] md:w-[33%] md:right-[50%] md:top-[280px] md:h-[62px] sm:w-[33%] sm:right-[41%] sm:top-[280px] s:top-[305px] mobile:top-[305px] little:w-[75%] little:-right-[7%] little:top-[305px]" id='email-input '>
          <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-[100%] text-sm text-neutral-900 bg-transparent border-[2px] border-zinc-300 rounded-md indent-[10px] appearance-none dark:text-white dark:border-white dark:focus:border-yellow-700 focus:outline-none focus:ring-0 focus:border-yellow-700 peer" placeholder="ایمیل" required />
        </div>
        <div className="absolute right-[53%] top-[330px] w-[33%] h-[63px] p-[10px] m-0 mr-[69px] ml-[68px] mt-[22px] z-0 group mobile:-right-[20px] mobile:w-[77%] s:-right-[3%] s:w-[77%] s:bottom-[450px] xl:w-[33%] xl:ml-[60px] xl:right-[52%] xl:top-[355px]  xl:mr-[55px] 2xl:w-[33%] 2xl:right-[53%] 2xl:top-[382px] lg:w-[33%] lg:mr-[55px] lg:right-[51%] lg:top-[355px] md:w-[33%] md:right-[50%] md:top-[355px] md:h-[62px] sm:w-[33%] sm:right-[41%] sm:top-[354px] s:top-[378px] mobile:top-[379px] little:w-[75%] little:-right-[7%] little:top-[379px]" id='phone-input '>
          <input type="tel"  name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-[100%] text-sm text-neutral-900 bg-transparent border-[2px] rounded-md border-zinc-300 indent-[10px] appearance-none dark:text-white dark:border-white dark:focus:border-yellow-700 focus:outline-none focus:ring-0 focus:border-yellow-700 peer" placeholder="تلفن همراه" required />
        </div>
        <div className='design-type relative right-[52%] bottom-[420px] w-[32%] m-0 mr-[78px] mt-[39px] mobile:w-[70%] mobile:-right-[15px] mobile:bottom-[542px] s:-right-[3%] s:bottom-[555px] sm:w-[30%] sm:right-[41%] sm:bottom-[565px] md:w-[31%] md:right-[50%] md:-top-[545px] lg:w-[31%] lg:right-[50%] lg:bottom-[540px] xl:w-[31%] xl:right-[51%] xl:bottom-[540px] 2xl:right-[53%] 2xl:-top-[533px] little:w-[20%] little:-right-[7%] little:bottom-[542px]'>
          <p className='description-type text-zinc-600 w-full text-xl dark:text-gray-400 mobile:text-[18px] s:text-[18px] sm:text-lg'>
            نوع طرح :
          </p>
        </div>
        <div className="type1 absolute right-[66%] bottom-[600px] m-[6px] flex items-center mb-4 mobile:right-[35%] mobile:bottom-[958px] s:bottom-[930px] s:right-[33%] sm:right-[57%] sm:bottom-[545px] md:right-[70%] md:bottom-[558px] lg:right-[68%] lg:bottom-[550px] xl:right-[66%] xl:bottom-[552px] 2xl:right-[66%] 2xl:bottom-[545px] little:right-[40%] little:bottom-[852px]">
          <input checked id="default-radio-1" type="radio" value="normal" name="default-box" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mobile:w-[16%] s:w-[15%] sm:w-[14px] sm:-ml-[5px]" />
          <label htmlFor="default-radio-1" className="cursor-pointer mr-[10px] text-[18px] ml-2 text-sm font-medium text-zinc-600 dark:text-gray-300 mobile:text-[14px] s:text-[14px] sm:text-[16px]">طرح عادی  </label>
        </div>
        <div className="type2 absolute right-[77%] bottom-[610px] w-[7%] m-[6px] flex items-center mobile:right-[61%] mobile:bottom-[968px] mobile:w-[22%] s:bottom-[940px] s:right-[60%] s:w-[20%] sm:right-[57%] sm:bottom-[525px] sm:w-[15%] md:right-[82%] md:bottom-[568px] md:w-[12%] lg:right-[78%] lg:bottom-[560px] lg:w-[9%] xl:right-[77%] xl:bottom-[562px] xl:w-[8%] 2xl:right-[77%] 2xl:bottom-[555px] 2xl:w-[90px] little:right-[68%] little:bottom-[862px] little:w-[26%]">
          <input id="default-radio-2" type="radio" value="poiesh" name="default-box" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mobile:w-[14%] sm:w-[14px] s:w-[15%] sm:-ml-[5px]" />
          <label htmlFor="default-radio-2" className="cursor-pointer mr-[10px] text-[18px] ml-2 text-sm font-medium text-zinc-600 dark:text-gray-300 mobile:text-[14px] s:text-[14px] sm:text-[16px]"> طرح پویش </label>
        </div>


        <div className="relative right-[800px] bottom-[408px] w-[42%] h-[342px] flex items-center justify-center mobile:w-full mobile:right-0 mobile:bottom-[539px] s:right-0 s:bottom-[540px] sm:w-[42%] sm:right-[305px] sm:bottom-[500px] md:w-[42%] md:right-[420px] md:bottom-[545px] lg:w-[42%] lg:right-[530px] lg:bottom-[535px] xl:w-[42%] xl:right-[667px] xl:bottom-[535px] 2xl:w-[42%] 2xl:right-[810px] 2xl:bottom-[530px] little:right-0 little:bottom-[540px] little:w-full">
          <p className='description-file absolute text-zinc-600 top-[25px] w-[108px] right-0 m-0  ml-[464px]  mr-[68px] mt-[22px] text-xl dark:text-gray-400 mobile:text-[18px] mobile:top-[10px] mobile:right-[0%] mobile:mr-[60px] mobile:ml-[251px] s:text-[18px] s:top-0 s:right-[0%] s:mr-[60px] s:ml-[331px] sm:top-0 sm:-right-[1px] sm:text-lg sm:mr-[33px] sm:ml-[129px] md:right-0 md:mr-[44px] md:ml-[169px] md:top-[4px] lg:right-[1px] lg:top-[10px] lg:mr-[55px] lg:ml-[265px] xl:right-[0%] xl:top-[25px] xl:ml-[366px] xl:mr-[63px] 2xl:mr-[70px] 2xl:ml-[462px] 2xl:top-0 little:mr-[55px] little:ml-[187px]'>  اپلود رزومه :</p>
          <label htmlFor="dropzone-file" className="absolute right-[1px] top-[46px] w-[80%] h-[65%] mr-[62px] ml-[67px] my-4 flex flex-col items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-600 duration-300 dark:hover:bg-bray-800 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mobile:right-[0%] mobile:top-20 mobile:m-[18px] mobile:mr-[45px] mobile:ml-10 s:right-0 s:bottom-[404px] s:top-16 s:mr-[90px] s:ml-[84px] s:w-[65%] s:h-[60%] sm:h-44 sm:right-[0px] sm:top-[60px] sm:mr-[26px] sm:ml-[27px] sm:w-[80%] md:ml-[34px] md:mr-[31px] md:w-[80%] md:top-[60px] lg:ml-[42px] lg:mr-[45px] lg:w-[80%] lg:h-[60%] lg:top-[70px] xl:right-[0%] xl:top-20 xl:ml-[45px] xl:mr-[62px] xl:w-[80%] xl:h-[60%] 2xl:ml-[65px] 2xl:top-[70px] little:top-20 little:mr-[35px] little:ml-[34px]">
            <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
              <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">برای اپلود کلیک کنید</span> یا بکشید </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" required/>
          </label>
        </div>
        <input type="submit" value="ثبت فرم" className="absolute right-[53%] top-[818px] mr-[268px] ml-[268px] mt-[36px] my-[25px] mx-[279px] cursor-pointer text-yellow-700 bg-zinc-400 hover:bg-yellow-700 hover:text-zinc-300 duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-400 dark:text-yellow-700 dark:hover:text-zinc-200 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700 mobile:right-[29%] mobile:top-[57%] mobile:w-[24%] mobile:mr-[36px] mobile:ml-[38px] s:right-[144px] s:top-[825px] s:w-[20%] s:mr-[52px] s:ml-[56px] sm:top-[800px] sm:right-[50%] sm:ml-[86px] sm:mr-[73px] md:right-[55%] md:top-[771px] md:mr-[115px] md:ml-[129px] lg:right-[51%] lg:top-[810px] lg:w-[9%] lg:mr-[170px] lg:ml-[175px] xl:right-[51%] xl:mr-[230px] xl:ml-[224px] xl:top-[818px] 2xl:right-[54%] 2xl:top-[815px] little:-right-[38%] little:top-[850px] little:w-[25%]"/>
        <div className="contact-box relative bottom-[919px] right-0 mr-[140px] p-3 flex w-[35%] h-[280px] 2xl:mr-[140px] 2xl:bottom-[1210px] 2xl:right-0 2xl:w-[35%] xl:mr-[140px] xl:h-[320px] xl:bottom-[1213px] xl:-right-[30px] xl:w-[35%] lg:mr-[140px] lg:h-[340px] lg:bottom-[1213px] lg:-right-[60px] lg:w-[35%] md:mr-[140px] md:h-[390px] md:bottom-[1213px] md:-right-[65px] md:w-[35%] sm:mr-[140px] sm:h-[430px] sm:bottom-[1213px] sm:-right-[100px] sm:w-[35%] s:bottom-[390px] s:h-[430px] s:w-full s:right-0 mobile:bottom-[400px] mobile:w-full mobile:right-0 mobile:h-[420px] little:right-0 little:bottom-[410px] little:mr-0 little:w-full little:h-[380px]">
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
