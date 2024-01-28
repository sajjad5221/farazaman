'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Apiclient from '@/Services/Apiclient';
import FormsDetails from '@/Components/misc/FormsDetails';
import GetCsrfToken from '@/Services/GetCsrfToken';
import { ContactInfo } from '@/types/global';
import { useData } from '@/stores/dataStore';
import Button from '../common/form/Button';

const ContactUsForm = () => {
  // const [formData, setFormData] = useState<ContactInfo>({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message: '',
  // });

  const Data = useData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInfo>({
    mode: 'onBlur',
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [send, setSend] = useState(false);
  // const [message, setMessage] = useState('');
  // const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    // Fetch CSRF token
    async function fetchCsrfToken() {
      const token = await GetCsrfToken('http://localhost:8000/get-csrf-token/');
      Data.handleTokenChange(token);
    }

    fetchCsrfToken();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    Data.handleContactUsFormData({ ...Data.contactUsFormData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data: ContactInfo) => {
    Data.handleSendChange(true);
    Data.handleSubmitingChange(true);
    try {
      // Send form data to the server

      //Response is unused. Remove if unnecessary.
      const response = await Apiclient.post('contact/', JSON.stringify(data), {
        headers: {
          'X-CSRFToken': Data.csrfToken,
          'Content-Type': 'application/json',
        },
      });
      Data.handleSuccessChange(true);
      
      Data.handleMessageChange('ارسال موفقیت آمیز بود');
      Data.handleSendChange(false);
      reset();
    } catch (error) {
      console.log(error);
      
      Data.handleMessageChange('ارسال ناموفق بود !');
      Data.handleSendChange(false);
      Data.handleSuccessChange(false);
    }
  };

  return (
    <div className="w-screen mt-16 bg-gray-50" id="contact">
      <div className="px-4 pt-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black">ارتباط با ما</h2>

        <p className="max-w-2xl pt-6 pb-6 m-auto text-base text-center text-gray-700">
          برای ارتباط با ما میتوانید فرم زیر را پر کنید تا کارشناسان ما هرچه
          سریعتر با شما تماس برقرار نمایند
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px px-12 md:grid-cols-2 bg-gray-50">
        <FormsDetails
          title={'فرم ارتباط با ما '}
          description={
            'ثبت اطلاعات و پیام شما برای ارتباط با شتابدهنده فرازمان  .'
          }
        />
        <div className="w-full px-8 py-8 md:order-last lg:order-last max-[768px]:order-first">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  نام و نام خانوادگی
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  autoComplete="off"
                  pattern="^[\u0600-\u06FF\s]+$"
                  className={`w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-4 ${
                    errors.name ? 'border-yellow-500' : ''
                  }`}
                  {...register('name', {
                    required: 'نام خود را وارد کنید.',
                    pattern: {
                      value: /^[\u0600-\u06FF\s]+$/,
                      message: 'نام خود را به درستی وارد کنید.',
                    },
                  })}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="text-sm text-yellow-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  آدرس ایمیل شما
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="farazaman@gmail.com"
                  autoComplete="off"
                  className={`w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-4 ${
                    errors.email ? 'border-yellow-500' : ''
                  }`}
                  {...register('email', {
                    required: 'آدرس ایمیل خود را وارد کنید.',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'آدرس ایمیل را به درستی وارد کنید.',
                    },
                  })}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-sm text-yellow-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="tel"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  شماره موبایل
                </label>
                <input
                  id="tel"
                  placeholder="091311111111"
                  autoComplete="off"
                  className={`w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-4 ${
                    errors.phone ? 'border-yellow-500' : ''
                  }`}
                  {...register('phone', {
                    required: 'شماره تماس را وارد کنید.',
                    pattern: {
                      value: /^\d{11}$/,
                      message: 'شماره تماس را به درستی وارد کنید.',
                    },
                  })}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <span className="text-sm text-yellow-500">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="mb-3" style={{ backgroundColor: 'transparent' }}>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  پیام شما
                </label>
                <textarea
                  id="message"
                  placeholder="پیام شما"
                  className={`w-full px-4 py-3 border-2 rounded-md outline-none h-36 focus:ring-4 ${
                    errors.message ? 'border-yellow-500' : ''
                  }`}
                  {...register('message', {
                    required: 'متن پیام را وارد کنید.',
                  })}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="text-sm text-yellow-500">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* <button
                type="submit"
                disabled={Data.send}
                className="w-full py-4 font-semibold text-white transition-colors rounded-md bg-neutral-900 hover:bg-neutral-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-200 px-7"
              >
                {Data.send ? 'در حال ارسال...' : 'ارسال'}
              </button> */}
              <Button func='form' disabled={Data.send} submit={true} text={Data.send ? 'در حال ارسال...' : 'ارسال'}  />
            </form>
            {Data.isSuccess && Data.isSubmitting && Data.Message !== '' && (
              <div
                className="flex p-4 mt-6 mb-4 text-sm text-green-900 rounded-lg text-bold bg-green-10"
                role="alert"
                style={{ backgroundColor: '#26ff2a54' }}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {Data.Message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
