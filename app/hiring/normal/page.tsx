import Script from 'next/script'
import React from 'react'

export default function page() {
  return (
    <><><div>page</div>
    <div className='scrollBox fixed h-[5px] bg-slate-600'></div>
      <form className='relative top-[9px] left-[30px] m-[30px] mb-0 mt-[55px] w-full border border-solid border-gray-700 bg-white dark:bg-neutral-900'>
        <div className='box relative my-10 mx-auto w-[42%] h-[800px] left-0 top-20 border-[1px] border-solid border-gray-500 rounded-md shadow shadow-slate-800 dark:shadow-slate-100 '></div>
        <div className="absolute right-[29%] top-[120px] w-[33%] p-[10px] m-0 mr-[69px] ml-[68px] mt-[16px] z-0 mb-6 group mobile:right-[18%] s:right-[19%] xl:right-[29%] xl:top-[120px] xl:w-[33%] xl:p-[10px] xl:m-0 xl:mt-[16px] xl:ml-[60px] xl:mr-[55px]  2xl:ml-[69px lg:mr-[55px] lg:right-[29%] md:right-[25%] sm:right-[24%]" id='name-input'>
          <input type="text" name="floating_first_name" id="floating_first_name" className="block w-[100%] py-2.5 px-0 text-sm text-neutral-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-700 focus:outline-none focus:ring-0 focus:border-yellow-700 peer" placeholder=" " required />
          <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-neutral-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-[10px] peer-focus:text-yellow-700 peer-focus:dark:text-yellow-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام</label>
        </div>
        <div className="absolute right-[29%] top-[186px] w-[33%] p-[10px] m-0 mr-[69px] ml-[68px] mt-[22px] z-0 mb-6 group mobile:right-[18%] s:right-[19%] xl:ml-[60px] xl:right-[29%] xl:mr-[55px]  lg:mr-[55px] lg:right-[29%] md:right-[25%] sm:right-[24%]" id='lastName-input'>
          <input type="text" name="floating_last_name" id="floating_last_name" className="block w-[100%] py-2.5 px-0 text-sm text-neutral-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:borderyellow-700 focus:outline-none focus:ring-0 focus:border-yellow-700 peer" placeholder=" " required />
          <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-neutral-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-[10px] peer-focus:text-yellow-700 peer-focus:dark:text-yellow-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">نام خانوداگی</label>
        </div>
        <div className="absolute right-[29%] top-[258px] p-[10px] m-0 mr-[69px] ml-[68px] mt-[22px] w-[33%] z-0 mb-6 group mobile:right-[18%] s:right-[19%] xl:ml-[60px] xl:right-[29%]  xl:mr-[55px] lg:mr-[55px] lg:right-[29%] md:right-[25%] sm:right-[24%]" id='email-input'>
          <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-[100%] text-sm text-neutral-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-700 focus:outline-none focus:ring-0 focus:border-yellow-700 peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-neutral-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-[10px] peer-focus:text-yellow-700 peer-focus:dark:text-yellow-700peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ایمیل</label>
        </div>
        <div className="absolute right-[29%] top-[330px] w-[33%] p-[10px] m-0 mr-[69px] ml-[68px] mt-[22px] z-0 group mobile:right-[18%] s:right-[19%] s:bottom-[450px] xl:ml-[60px] xl:right-[29%]  xl:mr-[55px] lg:mr-[55px] lg:right-[29%] md:right-[25%] sm:right-[24%]" id='phone-input'>
          <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-[100%] text-sm text-neutral-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-700 focus:outline-none focus:ring-0 focus:border-yellow-700 peer" placeholder=" " required />
          <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-neutral-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-[10px] peer-focus:text-yellow-700 peer-focus:dark:text-yellow-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">تلفن همراه</label>
        </div>
        <div className='design-type relative right-[28%] bottom-[436px] w-[32%] m-0 mr-[78px] mt-[39px] mobile:right-[13%] mobile:bottom-[467px] s:right-[19%] s:bottom-[450px] sm:right-[21%] md:right-[25%] lg:right-[27%] xl:right-[28%]'>
          <p className='description-type w-full text-xl dark:text-gray-400 mobile:text-[15px] s:text-[15px] sm:text-lg'>
            نوع طرح :
          </p>
        </div>
        <div className="type1 absolute right-[41%] bottom-[765px] m-[6px] flex items-center mb-4 mobile:right-[35%] mobile:bottom-[763px] s:bottom-[756px] s:right-[33%] sm:right-[43%]">
          <input checked id="default-radio-1" type="radio" value="طرح عادی" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mobile:w-[16%] s:w-[15%] sm:w-[14px] sm:-ml-[5px]" />
          <label htmlFor="default-radio-1" className="mr-[10px] text-[18px] ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mobile:text-[14px] s:text-[14px] sm:text-[16px]">طرح عادی  </label>
        </div>
        <div className="type2 absolute right-[52%] bottom-[775px] m-[6px] flex items-center mobile:right-[35%] mobile:bottom-[743px] mobile:w-[22%] s:bottom-[765px] s:right-[51%] sm:right-[56%]">
          <input id="default-radio-2" type="radio" value="طرح پویش" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mobile:w-[14%] sm:w-[14px] s:w-[15%] sm:-ml-[5px]" />
          <label htmlFor="default-radio-2" className="mr-[10px] text-[18px] ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mobile:text-[14px] s:text-[14px] sm:text-[16px]"> طرح پویش </label>
        </div>


        <div className="relative right-[29%] bottom-[408px] w-[42%] h-[342px] flex items-center justify-center mobile:right-[29%] s:right-[142px] s:bottom-[433px] sm:right-[197px] md:right-[285px] lg:right-[296px] xl:right-[442px]">
          <p className='description-file absolute -top-[5px] w-[108px] ml-[453px] right-0 m-0 mr-[12%] mt-[22px] text-xl dark:text-gray-400 mobile:text-[15px] mobile:right-[0%] mobile:mr-[11px] mobile:ml-[57px] s:text-[15px] s:-top-[4px] s:right-[0%] s:mr-[30px] s:ml-[67px] sm:-top-[19px] sm:-right-[1px] sm:text-lg sm:mr-[40px] sm:ml-[154px] md:right-0 md:mr-[45px] md:ml-[261px] lg:right-[1px] lg:mr-[120px] lg:ml-[263px] xl:right-[0%] xl:ml-[451px] xl:mr-[67px]'>  اپلود رزومه :</p>
          <label htmlFor="dropzone-file" className="absolute right-[1px] top-[46px] w-[80%] h-[65%] mr-[65px] ml-[64px] my-4 flex flex-col items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-600 duration-300 dark:hover:bg-bray-800 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mobile:right-[0%] mobile:m-[18px] s:right-[4px] s:bottom-[433px] s:mr-[44px] s:ml-[52px] s:w-[109px] s:h-[60%] sm:h-44 sm:right-[0px] sm:mr-[54px] sm:ml-[60px] sm:w-[80%] md:ml-[84px] md:mr-[51px] md:w-[80%] lg:ml-[88px] lg:mr-[117px] lg:w-[80%] lg:h-[60%] xl:right-[0%] xl:ml-[63px] xl:w-[80%] xl:h-[60%] xl:mr-[65px]">
            <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
              <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">برای اپلود کلیک کنید</span> یا بکشید </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <button type="submit" className="absolute right-[29%] top-[818px] mr-[268px] ml-[267px] mt-[36px] my-[25px] mx-[279px] text-yellow-700 bg-zinc-400 hover:bg-yellow-700 hover:text-zinc-300 duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-400 dark:text-yellow-700 dark:hover:text-zinc-200 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700 mobile:right-[29%] mobile:w-[24%] mobile:mr-[36px] mobile:ml-[38px] s:right-[144px] s:top-[781px] s:w-[20%] s:mr-[52px] s:ml-[56px] sm:top-[762px] sm:right-[198px] sm:ml-[106px] sm:mr-[92px] md:right-[332px] md:mr-[115px] md:ml-[129px] lg:right-[297px] lg:mr-[170px] lg:ml-[175px] xl:right-[29%] xl:mr-[265px] xl:ml-[278px]">ثبت فرم </button>
      </form></>
      </>
  )
}
