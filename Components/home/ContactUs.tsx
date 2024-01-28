'use client';

import React, {useEffect} from "react";
import { useForm } from 'react-hook-form';
import Apiclient from '@/Services/Apiclient';
import GetCsrfToken from '@/Services/GetCsrfToken';
import { ContactInfo } from '@/types/global';
import { useData } from '@/stores/dataStore';

import SectionHeader from '../common/SectionHeader';
import ArrowLeft from '../icons/ArrowLeft';

function ContactUs() {
  const Data = useData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactInfo>({
    mode: 'onBlur',
  });

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
    <section className="bg-gray-50 px-4 pt-8 pb-16">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SectionHeader title="ارتباط با ما" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-between gap-8 md:flex-row my-8">
            <input
                id="tel"
                autoComplete="off"
                type="text"
                placeholder="شماره تماس"
                className={`md:w-2/6 px-4 py-4 text-black rounded-md shadow-sm placeholder:text-gray-300 ${
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
            <input
                id="name"
                type="text"
                placeholder="نام و نام خانوادگی"
                autoComplete="off"
                pattern="^[\u0600-\u06FF\s]+$"
                className={`md:w-2/6 px-4 py-4 text-black rounded-md shadow-sm placeholder:text-gray-300 ${
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
            <input
                id="name"
                type="text"
                placeholder="آدرس الکترونیکی"
                autoComplete="off"
                className={`md:w-2/6 px-4 py-4 text-black rounded-md shadow-sm placeholder:text-gray-300 ${
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
          <div>
          <textarea
              id="message"
              rows={4}
              className={`textarea rounded-md textarea-lg w-full mt-3 mb-1 drop-shadow-md resize-none placeholder:text-gray-300 placeholder:font-thin px-4 py-3 ${
                  errors.message ? 'border-yellow-500' : ''
              }`}
                  {...register('message', {
                    required: 'متن پیام را وارد کنید.',
                  })}
                  onChange={handleChange}
              placeholder="شما می توانید با نوشتن پیام خود در این بخش با ما در ارتباط باشید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت"
          />
            {errors.message && (
                <span className="text-sm text-yellow-500">
                  {errors.message.message}
                </span>
            )}
          </div>
          <div className="flex justify-center mt-6">
            <button
                type='submit'
                disabled={Data.send}
                className="flex text-sm bg-brand px-5 py-2 justify-center items-center rounded-lg text-white"
            >
              <p>ارسال پیام</p>
              <ArrowLeft color="#fff" />
            </button>
          </div>
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
    </section>
  );
}

export default ContactUs;
