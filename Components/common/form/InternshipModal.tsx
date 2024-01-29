import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import XLg from '../../icons/XLg';
import ArrowLeft from '../../icons/ArrowLeft';
import { useForm } from 'react-hook-form';
import { IntershipInfo } from '@/types/global';
import GetCsrfToken from '@/Services/GetCsrfToken';
import { useData } from '@/stores/dataStore';
import Apiclient from '@/Services/Apiclient';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    border: 'none',
    borderRadius: '8px',
    Width: '64rem',
  },
};

Modal.setAppElement('.drawer'); // Set the root element for accessibility

export default function InternshipModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const Data = useData.getState();

  
  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken('http://localhost:8000/get-csrf-token/');
      Data.handleTokenChange(token);
    }

    fetchCsrfToken();
  }, [])
  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = event.target.files;
  //   if (files && files.length > 0) {
  //     setSelectedFile(files[0]);
  //   }
  // };
  
  const { register, handleSubmit ,formState: { errors }} = useForm<IntershipInfo>({
    mode: 'onBlur',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'resume') {
      if (e.target.files && e.target.files.length > 0) {
        Data.handleFilePostChange({ resume: e.target.files[0] });
      }
      e.target.files;
    }
    Data.handleFormDataChange({ ...Data.formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (data: IntershipInfo) => {
    // e.preventDefault();
    Data.handleSubmitingChange(true);
    Data.handleSendChange(true);
    const sendFormData = new FormData();
    if (Data.filePost.resume) {
      sendFormData.append('cvFile', Data.filePost.resume, Data.filePost.resume.name);
    }
    sendFormData.append('name', data.name);
    sendFormData.append('phone', data.phone);
    sendFormData.append('email', data.email);
    sendFormData.append('university', data.university);

    try {
      const response = await Apiclient.post('internship/', sendFormData, {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRFToken': Data.csrfToken,
        },
      });

      console.log(response);

      Data.handleSubmitingChange(true);
      Data.handleMessageChange('ارسال موفقیت آمیز بود');
      Data.handleSendChange(false);
      // reset(); // Reset the form fields
    } catch (error) {
      console.log(error);
      Data.handleMessageChange('ارسال ناموفق بود !');
      Data.handleSendChange(false);
      Data.handleSubmitingChange(false);
    }
  };
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="w-[64rem] pt-4 pb-8">
        {/* X button */}
        <div className="mr-4">
          <div
            onClick={closeModal}
            className="pointer border border-black w-5 pt-2 h-5 flex justify-center items-center rounded-full"
          >
            <XLg />
          </div>
        </div>
        <div className="w-full px-16">
          <div className="flex w-full justify-between">
            <div className="w-1/2">
              <p className="text-brand text-2xl">
                استخدام در شتابدهنده فرازمان
              </p>
              <div className="mt-8">
                <p className="text-xl mb-4">نام و نام خانوادگی</p>
                <input
                  type="text"
                  className={`px-3 py-4 shadow-md rounded-md w-4/5 mt-2 placeholder:text-gray-200${
                    errors.name ? 'border-yellow-500' : ''
                  }`}
                  placeholder="نام و نام خانوادگی"
                  {...register('name', {
                    required: 'نام خود را وارد کنید.',
                    pattern: {
                      value: /^[\u0600-\u06FF\s]+$/,
                      message: 'نام خود را به درستی وارد کنید.',
                    },

                  })}
                />
                {errors.name && (
                  <span className="text-sm text-yellow-500">
                    {errors.name.message}
                  </span>
                )}
              </div>
            </div>
            <div className="w-1/2">
              {/* <Image
              src="../public/static/images/Brand/farazaman-Logo.png"
              alt="لوگو"
              width={500}
              height={500}
            /> */}
            </div>
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className="flex justify-between my-8">
              <div className="w-1/2">
                <p className="text-xl mb-4">شماره تلفن همراه</p>
                <input
                  type="text"
                  className={`px-3 py-4 shadow-md rounded-md w-4/5 mt-2 placeholder:text-gray-200 ${
                    errors.phone ? 'border-yellow-500' : ''
                  }`}
                  placeholder="شماره تلفن همراه"
                  {...register('phone', {
                    required: 'شماره تماس را وارد کنید.',
                    pattern: {
                      value: /^\d{11}$/,
                      message: 'شماره تماس را به درستی وارد کنید.',
                    },
                  })}

                />
                {errors.phone && (
                  <span className="text-sm text-yellow-500">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div className="w-1/2">
                <p className="text-xl mb-4">آدرس ایمیل شما</p>
                <input
                  type="text"
                  className={`px-3 py-4 shadow-md rounded-md w-full mt-2 placeholder:text-gray-200 ${
                    errors.email ? 'border-yellow-500' : ''
                  }`}
                  placeholder="آدرس الکترونیکی"
                  {...register('email', {
                    required: 'آدرس ایمیل خود را وارد کنید.',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'آدرس ایمیل را به درستی وارد کنید.',
                    },
                  })}

                />
                {errors.email && (
                  <span className="text-sm text-yellow-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="w-1/2">
                <p className="text-xl mb-4">نام دانشگاه</p>
                <input
                  type="text"
                  className="px-3 py-4 shadow-md rounded-md w-4/5 mt-2 placeholder:text-gray-200"
                  placeholder="نام دانشگاه"
                  {...register("university", {
                    required: 'متن پیام را وارد کنید.',
                  })}
                />
                  {errors.university && (
                    <span className="text-sm text-yellow-500">
                      {errors.university.message}
                    </span>
                  )}
              </div>
              <div className="w-1/2">
                <p className="text-xl mb-4">رزومه شما</p>
                <input
                  type="file"
                  className="px-3 py-4 shadow-md rounded-md w-full mt-2 placeholder:text-gray-200"
                  placeholder="لطفا فایل مورد نظر را آپلود کنید"
                  {...register("resume")}
                  onChange={handleChange}
                />
                  {errors.resume && (
                    <span className="text-sm text-yellow-500">
                      {errors.resume.message}
                    </span>
                  )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-8">
            <button className="flex px-12 py-2 rounded-md bg-brand text-white">
              <button type='submit' className="ml-2">ارسال</button>
              <ArrowLeft color="#fff" />
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
