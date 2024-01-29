import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import XLg from '../../icons/XLg';
import ArrowLeft from '../../icons/ArrowLeft';
import { WorkSpaceInfo } from "@/types/global";
import { useForm } from 'react-hook-form';
import {useData} from "@/stores/dataStore";
import Apiclient from "@/Services/Apiclient";
import GetCsrfToken from "@/Services/GetCsrfToken";


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

export default function CoSpaceModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const Data = useData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WorkSpaceInfo>({
    mode: 'onBlur',
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    Data.handleWorkSpaceFormData({ ...Data.workSpaceFormData, [e.target.name]: e.target.value });
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
    <Modal isOpen={isOpen} style={customStyles}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[64rem] pt-4 pb-8">
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
                <p className="text-brand text-2xl">فضای کار اشتراکی</p>
                <div className="mt-8 ">
                  <p className="text-xl mb-4">نام و نام خانوادگی</p>
                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    className={`px-3 py-4 shadow-md rounded-md w-4/5 mt-2 placeholder:text-gray-200 ${
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
            <div className="w-full flex flex-col justify-between my-9">
              <div className="flex justify-between">
                <div className="w-1/2">
                  <p className="text-xl mb-4">شماره تلفن همراه</p>
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
                      <span className="text-sm text-yellow-500">
                        {errors.phone.message}
                      </span>
                  )}
                </div>
                <div className="w-1/2">
                  <p className="text-xl mb-4">آدرس ایمیل شما</p>
                  <input
                    type="text"
                    placeholder="آدرس الکترونیکی"
                    className={`px-3 py-4 shadow-md rounded-md w-full mt-2 placeholder:text-gray-200 ${
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
              </div>
              {/*<div>*/}
              {/*  <textarea*/}
              {/*    {...register("description")}*/}
              {/*    rows={4}*/}
              {/*    className="textarea mt-8 rounded-md textarea-lg w-full mb-1 drop-shadow-md resize-none placeholder:text-gray-300 placeholder:font-thin px-4 py-3"*/}
              {/*    placeholder="توضیحات...."*/}
              {/*  ></textarea>*/}
              {/*</div>*/}
            </div>
            <div className="w-full flex justify-center mt-8">
              <button type="submit" className="flex px-12 py-2 rounded-md bg-brand text-white">
                <p className="ml-2">ارسال</p>
                <ArrowLeft color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
}
