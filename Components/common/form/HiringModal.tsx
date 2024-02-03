import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import XLg from '../../icons/XLg';
import ArrowLeft from '../../icons/ArrowLeft';
import { HiringInfo } from "@/types/global";
import { useForm } from "react-hook-form";
import {useData} from "@/stores/dataStore";
import GetCsrfToken from "@/Services/GetCsrfToken";
import Apiclient from "@/Services/Apiclient";
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

export default function HiringModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const Data = useData.getState();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken('http://localhost:8000/get-csrf-token/');
      Data.handleTokenChange(token);
    }

    fetchCsrfToken();
  }, []);

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = event.target.files;
  //   if (files && files.length > 0) {
  //     setSelectedFile(files[0]);
  //   }
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HiringInfo>({
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

  const handleFormSubmit = async (data: HiringInfo) => {
    // e.preventDefault();
    Data.handleSubmitingChange(true);
    Data.handleSendChange(true);
    const sendFormData = new FormData();
    if (Data.filePost.resume) {
      sendFormData.append(
        'resume',
        Data.filePost.resume,
        Data.filePost.resume.name
      );
    }
    sendFormData.append('name', data.name);
    sendFormData.append('phone', data.phone);
    sendFormData.append('email', data.email);
    sendFormData.append('hireType', data.hireType.toString());

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
      reset(Data.formData); // Reset the form fields
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
              <div className="w-1/2">
                <p className="text-brand text-2xl">
                  استخدام در شتابدهنده فرازمان
                </p>
                <div className="mt-4">
                  <p className="text-xl mb-2">نام و نام خانوادگی</p>
                  <input
                    type="text"
                    className={`px-3 py-4 shadow-md rounded-md w-4/5 mt-2 placeholder:text-gray-200 ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                    {...register('name', {
                      required: 'نام و نام خانوادگی خود را وارد کنید.',
                      pattern: {
                        value: /^[\u0600-\u06FF\s]+$/,
                        message:
                          'نام و نام خانوادگی خود را به درستی وارد کنید.',
                      },
                    })}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-3">
                      {errors.name.message}
                    </p>
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
              <div className="flex justify-between my-4">
                <div className="w-1/2">
                  <p className="text-xl mb-2">شماره تلفن همراه</p>
                  <input
                    type="text"
                    placeholder="شماره تلفن همراه"
                    className={`px-3 py-4 shadow-md rounded-md w-4/5 mt-2 placeholder:text-gray-200 ${
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
                    <p className="text-sm text-red-500 mt-3">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="w-1/2">
                  <p className="text-xl mb-2">آدرس ایمیل شما</p>
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
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-3">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-5">
                <p className="description-type text-zinc-600 w-full text-xl   mobile:text-[18px] s:text-[18px] sm:text-lg inline">
                  نوع طرح :
                </p>
                <label
                  htmlFor="hireType-1"
                  className="cursor-pointer mr-[10px] text-[18px] ml-2 text-sm font-medium text-zinc-600   mobile:text-[14px] s:text-[14px] sm:text-[16px]"
                >
                  طرح عادی{' '}
                </label>
                <input
                  id="hireType-1"
                  type="radio"
                  value="NO"
                  placeholder=""
                  autoComplete="false"
                  className={`cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2     mobile:w-[16%] s:w-[15%] sm:w-[14px] sm:-ml-[5px]" name="default-box" value="normal" checked="" ${
                    errors.hireType ? 'border-yellow-500' : ''
                  }`}
                  {...register('hireType', {
                    required: 'نوع استخدام خود را مشخص کنید.',
                  })}
                  onChange={handleChange}
                />
                {errors.hireType && (
                  <p className="text-sm text-yellow-500">
                    {errors.hireType.message}
                  </p>
                )}

                <label
                  htmlFor="hireType-2"
                  className="cursor-pointer mr-[10px] text-[18px] ml-2 text-sm font-medium text-zinc-600   mobile:text-[14px] s:text-[14px] sm:text-[16px]"
                >
                  طرح پویش{' '}
                </label>
                <input
                  id="hireType-2"
                  type="radio"
                  value="PU"
                  placeholder=""
                  autoComplete="false"
                  className={`cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-2   mobile:w-[16%] s:w-[15%] sm:w-[14px] sm:-ml-[5px]" name="default-box" value="normal" checked="" ${
                    errors.hireType ? 'border-red-500' : ''
                  }`}
                  {...register('hireType', {
                    required: 'نوع استخدام خود را مشخص کنید.',
                  })}
                  onChange={handleChange}
                />
                {errors.hireType && (
                  <p className="text-sm text-yellow-500">
                    {errors.hireType.message}
                  </p>
                )}
              </div>
              <div className="">
                <p className="text-xl mb-2">رزومه شما</p>
                <input
                  type="file"
                  placeholder="لطفا فایل مورد نظر را آپلود کنید"
                  className={`px-3 py-4 shadow-md rounded-md w-full mt-2 placeholder:text-gray-200 ${
                    errors.resume ? 'border-red-500' : ''
                  }`}
                  value={Data.formData.resume?.name}
                  {...register('resume', {
                    required: 'فایل را وارد کنید.',
                    pattern: {
                      value: /b'[a-f]+\d+'/,
                      message: 'فایل را به درستی وارد کنید.',
                    },
                  })}
                  onChange={handleChange}
                />
                {errors.resume && (
                  <p className="text-sm text-red-500 mt-3">
                    {errors.resume.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full flex justify-center mt-8">
              <button
                type="submit"
                className="flex px-12 py-2 rounded-md bg-brand text-white"
              >
                <p className="ml-2">ارسال</p>
                <ArrowLeft color="#fff" />
              </button>
              <div>
                <ToastContainer/>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
}
