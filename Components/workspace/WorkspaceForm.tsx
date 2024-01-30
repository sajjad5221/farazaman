'use client';
import React, { useState, useEffect } from 'react';
import GetCsrfToken from '@/Services/GetCsrfToken';
import { useForm } from 'react-hook-form';
import FormsDetails from '@/Components/misc/FormsDetails';
import Apiclient from '@/Services/Apiclient';
import { WorkSpaceInfo } from '@/types/global';
import { useData } from '@/stores/dataStore';
import Button from '../common/form/Button';

const ContactUs = () => {
  // const [formData, setFormData] = useState<WorkSpaceInfo>({
  //   name: '',
  //   email: '',
  //   phone: '',
  // });

  const Data = useData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WorkSpaceInfo>({
    mode: 'onBlur',
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [Send, setSend] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [Message, setMessage] = useState('');

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    Data.handleWorkSpaceFormData({
      ...Data.workSpaceFormData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (data: WorkSpaceInfo) => {
    Data.handleSendChange(true);
    Data.handleSubmitingChange(true);
    try {
      const response = await Apiclient.post(
        'workspace/',
        JSON.stringify(data),
        {
          headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json',
          },
        }
      );
      Data.handleSuccessChange(true);
      Data.handleMessageChange('ارسال موفقیت آمیز بود');
      Data.handleSendChange(false);
      reset(); // Reset the form field
    } catch (error) {
      console.log(error);
      Data.handleMessageChange('ارسال ناموفق بود !');
      Data.handleSendChange(false);
      Data.handleSuccessChange(false);
    }
  };

  const [csrfToken, setCsrfToken] = useState('');
  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken('http://localhost:8000/get-csrf-token/');
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);

  return (
    <div>
      <div className="mt-16 bg-gray-50" id="contact">
        <div className="px-4 pt-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black  ">
            ثبت نام فضای کار اشتراکی
          </h2>

          <p className="max-w-2xl pt-6 pb-6 m-auto text-base text-center text-gray-700  ">
            برای استفاده از فضای کار اشتراکی می توانید فرم زیر را پر کنید تا
            کارشناسان ما هرچه سریعتر با شما تماس برقرار نمایند
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 px-12 gap-x-4 md:grid-cols-2 bg-gray-50  ">
        <FormsDetails
          title={'ثبت نام در فضای کار اشتراکی فرازمان'}
          description={
            ' ثبت اطلاعات شما برای استفاده از فضای کار اشتراکی فرازمان.'
          }
        />
        <div className="w-full px-8 py-8 md:order-last lg:order-last max-[768px]:order-first">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  نام و نام خانوادگی
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  autoComplete="off"
                  pattern="^[\u0600-\u06FF\s]+$"
                  className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400   rounded-md outline-none     focus:ring-4 ${
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
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  ایمیل شما
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="farazaman@gmail.com"
                  autoComplete="off"
                  className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400   rounded-md outline-none     focus:ring-4 ${
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
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  شماره موبایل
                </label>
                <input
                  id="tel"
                  type="tel"
                  placeholder="091311111111"
                  autoComplete="off"
                  className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400   rounded-md outline-none     focus:ring-4 ${
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
              {/* <button
                type="submit"
                disabled={Data.send}
                className="w-full py-4 font-semibold text-white transition-colors rounded-md bg-neutral-900 hover:bg-neutral-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-200 px-7    "
              >
                {Data.send ? 'در حال ارسال...' : 'ارسال'}
              </button> */}
              <Button
                text={Data.send ? 'در حال ارسال...' : 'ارسال'}
                disabled={Data.send}
                func="form"
                submit={true}
              />
            </form>
            {Data.isSuccess && Data.isSubmitting && Data.Message != '' && (
              <div
                className="flex p-4 mt-6 mb-4 text-sm text-green-900 rounded-lg text-bold bg-green-10    "
                role="alert"
                style={{ backgroundColor: '#26ff2a54' }}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">پیام</span>
                <div>
                  <span className="font-medium">{Data.Message}</span>!
                </div>
              </div>
            )}

            {!Data.isSuccess && Data.isSubmitting && Data.Message != '' && (
              <div
                className="flex p-4 mt-6 mb-4 text-sm text-red-900 rounded-lg text-bold bg-red-90    "
                role="alert"
                style={{ backgroundColor: '#ff24244f' }}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">پیام</span>
                <div>
                  <span className="font-medium">{Data.Message}</span>!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
