'use client';
import React, { useEffect } from 'react';
import GetCsrfToken from '@/Services/GetCsrfToken';
import { useForm } from 'react-hook-form';
<<<<<<< HEAD
import FormsDetails from '@/Components/misc/FormsDetails';
import Apiclient from '@/Services/Apiclient';
import { HiringInfo } from '@/types/global';
import { useData } from '@/stores/dataStore';
import { useTranslation } from '@/app/i18n/client';
import Footer from '@/Components/footer/Footer'
import NavBarRefactor from '@/Components/home/NavBarRefactor'
import Star from '@/Components/icons/Star'
=======
import Apiclient from '@/Services/Apiclient';
import { useData } from '@/stores/dataStore';
import { IntershipInfo } from '@/types/global';
>>>>>>> new-design
import Input from './Input';



const Data = useData.getState();

export default function SpaceForm() {
    


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
<<<<<<< HEAD
  } = useForm<HiringInfo>({
=======
  } = useForm<IntershipInfo>({
>>>>>>> new-design
    mode: 'onBlur',
  });
  const description =
    'شرکت ما با تمرکز بر نوآوری و ایده‌های پرسرعت، استارتاپ‌های نوپا را در حوزه‌های مختلف پشتیبانی می‌کند. با تیم متخصص و برنامه‌های آموزشی منحصربه‌فرد، ما شرکت‌ها را به موفقیت و پیشرفت هدایت می‌کنیم. در حال حاضر، در حال استخدام هستیم و قصد داریم تیممان را با افراد متخصص و متعهد توسعه دهیم. اگر به یادگیری، همکاری و خلاقیت علاقه‌مند هستید و می‌خواهید به یک تیم پویا و پرشور بپیوندید، منتظر شما هستیم. لطفاً فرم استخدام را پر کنید تا اطلاعات بیشتری دریافت کنید و رزومه خود را ارسال کنید.';
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [Message, setMessage] = useState('');
  // const [Send, setSend] = useState(false);
  // const [formData, setFormData] = useState(initialFormData);
  // const [filePost, setFilePost] = useState<{ resume: File | null }>({
  //   resume: null,
  // });
  // const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken('http://localhost:8000/get-csrf-token/');
      Data.handleTokenChange(token);
    }

    fetchCsrfToken();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'resume') {
      // if (e.target.files && e.target.files.length > 0) {
      //   Data.handleFormDataChange({});
      // }
      // e.target.files;
      console.log(e.target.value);
    }
    Data.handleFormDataChange({
      ...Data.formData,
      [e.target.name]: e.target.value,
    });
  };

<<<<<<< HEAD
  const handleFormSubmit = async (data: HiringInfo) => {
=======
  const handleFormSubmit = async (data: IntershipInfo) => {
>>>>>>> new-design
    // e.preventDefault();
    Data.handleSubmitingChange(true);
    Data.handleSendChange(true);
    const sendFormData = new FormData();
    if (Data.formData.resume) {
      sendFormData.append(
        'resume',
        Data.formData.resume,
        Data.formData.resume.name
      );
    }
    sendFormData.append('name', data.name);
    sendFormData.append('phone', data.phone);
    sendFormData.append('email', data.email);
<<<<<<< HEAD
    sendFormData.append('hireType', data.hireType.toString());
=======
    sendFormData.append('resume', data.resume);
    sendFormData.append('university', data.university);
>>>>>>> new-design

    try {
      const response = await Apiclient.post('hire/', sendFormData, {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRFToken': Data.csrfToken,
        },
      });

      console.log(response);

      Data.handleSubmitingChange(true);
      Data.handleMessageChange('ارسال موفقیت آمیز بود');
      Data.handleSendChange(false);
      reset(); // Reset the form fields
    } catch (error) {
      console.log(error);
      Data.handleMessageChange('ارسال ناموفق بود !');
      Data.handleSendChange(false);
      Data.handleSubmitingChange(false);
    }
  };

  return (
    <div>
<<<<<<< HEAD
    <div className=' relative flex justify-center mb-60 mt-16 mx-auto'>
        <img className='rounded-xl' src="/static/images/form/form-bg.jpg" alt="form backgraund" />
        <div className=' absolute top-12 w-10/12 bg-white my-20 border border-gray-300 p-16 rounded-2xl mb-20' >
            <h1 className=' font-bold text-brand text-4xl mb-16 '> ثبت‌نام طرح پویش  </h1>
            <form onSubmit={handleSubmit(handleFormSubmit)} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
=======
    <div className=' relative flex justify-center mb-[50rem] md:mb-[45rem] lg:mb-[30rem] xl:mb-[22rem] mt-16 mx-auto'>
        <img className='rounded-xl' src="/static/images/form/form-bg.jpg" alt="form backgraund" />
        <div className=' absolute top-[-3rem] md:top-0 xl:top-8 w-10/12 bg-white my-20 border border-gray-300 px-5 md:px-16 py-16 rounded-2xl pb-20' >
            <h1 className=' font-bold text-brand text-2xl lg:text-4xl mb-8 lg:mb-16 '> ثبت‌نام طرح پویش  </h1>
            <form className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' onSubmit={handleSubmit(handleFormSubmit)}>
>>>>>>> new-design

                    
              <Input 
                register={register}
                errors={errors}
                nameInput='name'
                placeholder='نام و نام خانوادگی'
                containerClass='mb-5'
                label='نام و نام خانوادگی'
<<<<<<< HEAD
                labelClass='block mb-2 text-xl font-medium text-yellow-900'
                type='text'
                autoComplete='false'
                className='w-11/12 ml-5 px-4 py-3 border-2 placeholder:text-neutral-400 rounded-md outline-none focus:ring-4'
=======
                labelClass='block mb-2 text-lg md:text-xl font-medium text-yellow-900'
                type='text'
                autoComplete='false'
                className='w-full lg:w-11/12 ml-0 md:ml-5 px-4 py-3 border-2 placeholder:text-neutral-400 rounded-md outline-none focus:ring-4'
>>>>>>> new-design
                required='نام و نام خانوادگی خود را وارد کنید'
                requiredValue={/^[\u0600-\u06FF\s]+$/}
                requiredMessage='نام و نام خانوادگی خود را به درستی وارد کنید.'
                handleChange={handleChange}
              />
              
                  
              <Input  
                register={register}
                errors={errors}
<<<<<<< HEAD
                nameInput='phone-number'
                placeholder='شماره تماس ( مثال : ۰۹۱۳۱۲۳۴۵۶۷ )'
                containerClass='mb-5'
                label='شماره موبایل'
                labelClass='block mb-2 text-xl font-medium text-yellow-900'
                type='number'
                autoComplete='false'
                className='w-11/12 ml-5 px-4 py-3 border-2 placeholder:text-neutral-400 rounded-md outline-none focus:ring-4'
=======
                nameInput='phone'
                placeholder='شماره تماس ( مثال : ۰۹۱۳۱۲۳۴۵۶۷ )'
                containerClass='mb-5'
                label='شماره موبایل'
                labelClass='block mb-2 text-lg md:text-xl font-medium text-yellow-900'
                type='number'
                autoComplete='false'
                className='w-full lg:w-11/12 ml-0 md:ml-5 px-4 py-3 border-2 placeholder:text-neutral-400 rounded-md outline-none focus:ring-4'
>>>>>>> new-design
                required='شماره تماس را وارد کنید'
                requiredValue={/^\d{11}$/}
                requiredMessage='شماره تماس را به درستی وارد کنید.'
                handleChange={handleChange}
              />

              <Input  
                register={register}
                errors={errors}
<<<<<<< HEAD
                nameInput='email-address'
                placeholder='آدرس ایمیل شما'
                containerClass='mb-5'
                label='آدرس ایمیل شما'
                labelClass='block mb-2 text-xl font-medium text-yellow-900'
                type='email'
                autoComplete='true'
                className='w-11/12 ml-5 px-4 py-3 border-2 placeholder:text-neutral-400 rounded-md outline-none focus:ring-4'
=======
                nameInput='email'
                placeholder='آدرس ایمیل شما'
                containerClass='mb-5'
                label='آدرس ایمیل شما'
                labelClass='block mb-2 text-lg md:text-xl font-medium text-yellow-900'
                type='email'
                autoComplete='true'
                className='w-full lg:w-11/12 ml-0 md:ml-5 px-4 py-3 border-2 placeholder:text-neutral-400 rounded-md outline-none focus:ring-4'
>>>>>>> new-design
                required='آدرس ایمیل خود را وارد کنید'
                requiredValue={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
                requiredMessage='آدرس ایمیل را به درستی وارد کنید.'
                handleChange={handleChange}
              />
              <Input  
                register={register}
                errors={errors}
<<<<<<< HEAD
                nameInput='University'
                containerClass='mb-5'
                label='نام دانشگاه'
                labelClass='block mb-2 text-xl font-medium text-yellow-900'
                autoComplete='true'
                required='نام دانشگاه خود را وارد کنید'
                requiredValue={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
                requiredMessage='نام دانشگاه را به درستی وارد کنید.'
                handleChange={handleChange}
                className='w-11/12 ml-5 px-4 py-3 border-2 placeholder:text-neutral-400 rounded-md outline-none focus:ring-4'
=======
                nameInput='university'
                containerClass='mb-5'
                label='نام دانشگاه'
                labelClass='block mb-2 text-lg md:text-xl font-medium text-yellow-900'
                autoComplete='true'
                required='نام دانشگاه خود را وارد کنید'
                requiredValue={/^[\u0600-\u06FF\s]+$/}
                requiredMessage='نام دانشگاه را به درستی وارد کنید.'
                handleChange={handleChange}
                className='w-full lg:w-11/12 ml-0 md:ml-5 px-4 py-3 border-2 placeholder:text-neutral-400 rounded-md outline-none focus:ring-4'
>>>>>>> new-design
                type="text" 
                placeholder='لطفا نام دانشگاه خود را وارد کنید'
              />
              <Input 
                register={register}
                errors={errors}
<<<<<<< HEAD
                nameInput='file'
=======
                nameInput='resume'
>>>>>>> new-design
                placeholder='فایل ارائه'
                inputValue={Data.formData.resume?.name}
                containerClass='mb-5'
                label='رزومه شما  '
<<<<<<< HEAD
                labelClass='block mb-2 text-xl font-medium text-yellow-900'
                type='file'
                autoComplete='false'
                className='w-11/12 ml-5 px-4 py-3 border-2 placeholder:text-neutral-400 rounded-md outline-none focus:ring-4'
=======
                labelClass='block mb-2 text-lg md:text-xl font-medium text-yellow-900'
                type='file'
                autoComplete='false'
                className='w-full lg:w-11/12 ml-0 md:ml-5 px-4 py-3 border-2 placeholder:text-neutral-400 rounded-md outline-none focus:ring-4'
>>>>>>> new-design
                required='فایل را وارد کنید'
                requiredValue={/b'[a-f]+\d+'/}
                requiredMessage='فایل را به درستی وارد کنید'
                handleChange={handleChange}
              />

<<<<<<< HEAD
              <div className='mt-[38px] relative w-full'>
                  <button className='text-brand absolute border-2 py-[13px] px-20 left-8 rounded-md border-brand transition-all hover:bg-brand cursor-pointer hover:text-white'>ارسال</button>
=======
              <div className='mt-[36px] relative w-full'>
                  <button className='text-yellow-500 absolute border-2 py-[13px] px-20 left-0 lg:left-8 rounded-md border-yellow-500 transition-all hover:bg-yellow-500 cursor-pointer hover:text-white'>ارسال</button>
>>>>>>> new-design
              </div>
            
            </form>
        </div>
    </div>
    </div>
  )}