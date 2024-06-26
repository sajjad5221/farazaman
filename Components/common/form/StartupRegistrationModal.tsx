import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import XLg from '../../icons/XLg';
import ArrowLeft from '../../icons/ArrowLeft';
import { StartupsInfo } from '@/types/global';
import { useForm } from 'react-hook-form';
import { space } from 'postcss/lib/list';
import { useData } from '@/stores/dataStore';
import GetCsrfToken from '@/Services/GetCsrfToken';
import Apiclient from '@/Services/Apiclient';
import { ToastContainer, toast } from 'react-toastify';

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

export default function StartupRegistrationModal({
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
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<StartupsInfo>({
    mode: 'onBlur',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'resume') {
      if (e.target.files && e.target.files.length > 0) {
        Data.handleFilePostChange({ resume: e.target.files[0] });
      }
      e.target.files;
    }
    Data.handleFormDataChange({
      ...Data.formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (data: StartupsInfo) => {
    // e.preventDefault();
    Data.handleSubmitingChange(true);
    Data.handleSendChange(true);
    const sendFormData = new FormData();
    if (Data.filePost.resume) {
      sendFormData.append(
        'pitch',
        Data.filePost.resume,
        Data.filePost.resume.name
      );
    }
    sendFormData.append('name', data.name);
    sendFormData.append('phone', data.phone);
    sendFormData.append('email', data.email);
    sendFormData.append('members_count', String(data.members_count));

    try {
      const response = await Apiclient.post('startup-submit/', sendFormData, {
        headers: {
          'content-type': 'multipart/form-data',
          'X-CSRFToken': Data.csrfToken,
        },
      });

      console.log(response);

      Data.handleSubmitingChange(true);
      Data.handleMessageChange('ارسال موفقیت آمیز بود');
      Data.handleSendChange(false);
      reset(Data.startupsFormData); // Reset the form fields
      setTimeout(() => {
        closeModal();
      }, 10000);
      toast.success('ارسال موفقیت آمیز بود', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      console.log(error);
      toast.error('ارسال موفقیت آمیز نبود.', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      Data.handleMessageChange('ارسال ناموفق بود !');
      Data.handleSendChange(false);
      Data.handleSubmitingChange(false);
    }
  };

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <form className="z-20" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="w-[64rem] py-4">
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
              <div className="w-full">
                <p className="text-brand text-2xl">ثبت استارتاپ</p>
                <div className="mt-8 w-full">
                  <div className="flex w-full justify-between">
                    <div className="w-1/2">
                      <p className="text-xl mb-[0.5rem]">نام استارتاپ</p>
                      <input
                        type="text"
                        placeholder="نام استارتاپ"
                        className={`px-3 py-4 shadow-md rounded-md w-4/5 mt-2 placeholder:text-gray-200 ${
                          errors.name ? 'border-red-500' : ''
                        }`}
                        {...register('name', {
                          required: 'نام استارتاپ را وارد کنید.',
                          pattern: {
                            value: /^[\u0600-\u06FF\s]+$/,
                            message: 'نام استارتاپ را به درستی وارد کنید.',
                          },
                        })}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-3">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="w-1/2">
                      <p className="text-xl mb-[0.5rem]">تعداد اعضای تیم</p>
                      <input
                        type="number"
                        placeholder="تعداد اعضای تیم"
                        className={`px-3 py-4 shadow-md rounded-md w-full mt-2 placeholder:text-gray-200 ${
                          errors.members_count ? 'border-red-500' : ''
                        }`}
                        {...register('members_count', {
                          required: 'تعداد اعضای تیم را وارد کنید.',
                          pattern: {
                            value: /^\d+$/,
                            message: 'تعداد اعضای تیم را به درستی وارد کنید.',
                          },
                        })}
                      />
                      {errors.members_count && (
                        <p className="text-sm text-red-500 mt-3">
                          {errors.members_count.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-between my-9">
              <div className="flex justify-between">
                <div className="w-1/2">
                  <p className="text-xl mb-[0.5rem]">شماره تلفن همراه</p>
                  <input
                    type="text"
                    placeholder="شماره تلفن همراه"
                    className={`px-3 py-4 shadow-md rounded-md w-4/5 mt-2 placeholder:text-gray-200 ${
                      errors.phone ? 'border-red-500' : ''
                    }`}
                    {...register('phone', {
                      required: 'شماره تماس را وارد کنید.',
                      pattern: {
                        value: /^\d{11}$/,
                        message: 'شماره تماس را به درستی وارد کنید.',
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-3">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="w-1/2">
                  <p className="text-xl mb-[0.5rem]">آدرس ایمیل شما</p>
                  <input
                    type="text"
                    placeholder="آدرس الکترونیکی"
                    className={`px-3 py-4 shadow-md rounded-md w-full mt-2 placeholder:text-gray-200 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    {...register('email', {
                      required: 'آدرس ایمیل خود را وارد کنید.',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'آدرس ایمیل را به درستی وارد کنید.',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-3">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="w-1/2">
                  <p className="text-xl mb-[0.5rem]">فایل pitch</p>
                  <input
                    type="file"
                    className="px-3 py-4 shadow-md rounded-md w-full mt-2 placeholder:text-gray-200"
                    placeholder="لطفا فایل مورد نظر را آپلود کنید"
                    {...register('resume')}
                    onChange={handleChange}
                  />
                  {errors.resume && (
                    <p className="text-sm text-red-500 mt-3">
                      {errors.resume.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mt-8">
              <button className="flex px-12 py-2 rounded-md bg-brand text-white">
                <p className="ml-2">ارسال</p>
                <ArrowLeft color="#fff" />
              </button>
              <div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
}
