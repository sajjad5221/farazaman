'use client';
import React, { useEffect } from 'react';
import GetCsrfToken from '@/Services/GetCsrfToken';
import { useForm } from 'react-hook-form';
import FormsDetails from '@/Components/misc/FormsDetails';
import Apiclient from '@/Services/Apiclient';
import { WorkSpaceInfo } from '@/types/global';
import { useData } from '@/stores/dataStore';
import { useTranslation } from '@/app/i18n/client';
import Footer from '@/Components/footer/Footer'
import NavBarRefactor from '@/Components/home/NavBarRefactor'
import Star from '@/Components/icons/Star'
import Input from './Input';



const Data = useData.getState();

export default function WorkSpaceForm() {
    


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WorkSpaceInfo>({
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

  const handleFormSubmit = async (data: WorkSpaceInfo) => {
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
    <div className=' relative flex justify-center mb-[35rem] md:mb-[28rem] lg:mb-[18rem] xl:mb-[12rem] mt-16 mx-auto'>
        <img className='rounded-xl' src="/static/images/form/form-bg.jpg" alt="form backgraund" />
        <div className=' absolute top-[-2rem] md:top-0 xl:top-8 w-10/12 bg-white my-20 border border-gray-300 px-5 md:px-16 py-16 rounded-2xl pb-20' >
            <h1 className='font-bold text-brand text-2xl lg:text-4xl mb-8 lg:mb-16'> فضای کار اشتراکی</h1>
            <form className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' onSubmit={handleSubmit(handleFormSubmit)} >

                    
              <Input 
                register={register}
                errors={errors}
                nameInput='name'
                placeholder='نام و نام خانوادگی'
                containerClass='mb-5'
                label='نام و نام خانوادگی'
                labelClass='block mb-2 text-lg md:text-xl font-medium text-yellow-900'
                type='text'
                autoComplete='false'
                className='w-full lg:w-11/12 ml-0 md:ml-5 px-4 py-3 border-2 placeholder:text-neutral-400 rounded-md outline-none focus:ring-4'
                required='نام و نام خانوادگی خود را وارد کنید'
                requiredValue={/^[\u0600-\u06FF\s]+$/}
                requiredMessage='نام و نام خانوادگی خود را به درستی وارد کنید.'
                handleChange={handleChange}
              />

                  
              <Input  
                register={register}
                errors={errors}
                nameInput='phone'
                placeholder='شماره تماس ( مثال : ۰۹۱۳۱۲۳۴۵۶۷ )'
                containerClass='mb-5'
                label='شماره موبایل'
                labelClass='block mb-2 text-lg md:text-xl font-medium text-yellow-900'
                type='number'
                autoComplete='false'
                className='w-full lg:w-11/12 ml-0 md:ml-5 px-4 py-3 border-2 placeholder:text-neutral-400 rounded-md outline-none focus:ring-4'
                required='شماره تماس را وارد کنید'
                requiredValue={/^\d{11}$/}
                requiredMessage='شماره تماس را به درستی وارد کنید.'
                handleChange={handleChange}
              />

              <Input  
                register={register}
                errors={errors}
                nameInput='email'
                placeholder='آدرس ایمیل شما'
                containerClass='mb-5'
                label='آدرس ایمیل شما'
                labelClass='block mb-2 text-lg md:text-xl font-medium text-yellow-900'
                type='email'
                autoComplete='true'
                className='w-full lg:w-11/12 ml-0 md:ml-5 px-4 py-3 border-2 placeholder:text-neutral-400 rounded-md outline-none focus:ring-4'
                required='آدرس ایمیل خود را وارد کنید'
                requiredValue={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
                requiredMessage='آدرس ایمیل را به درستی وارد کنید.'
                handleChange={handleChange}
              />

              <div className=' hidden xl:inline'></div>
              <div className=' hidden xl:inline mb-20'></div>

              <div className='mt-[36px] relative w-full'>
                  <button className='text-yellow-500 absolute border-2 py-[13px] px-20 left-0 lg:left-8 rounded-md border-yellow-500 transition-all hover:bg-yellow-500 cursor-pointer hover:text-white'>ارسال</button>
              </div>
            
            </form>
        </div>
    </div>
    </div>
  )}