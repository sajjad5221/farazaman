import React from 'react';
import Modal from 'react-modal';
import XLg from '../../icons/XLg';
import ArrowLeft from '../../icons/ArrowLeft';
import { StartupsInfo } from '@/types/global';
import { useForm } from 'react-hook-form';
import { space } from 'postcss/lib/list';

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
  const {register, handleSubmit, formState:{errors}} = useForm<StartupsInfo>({});

  const onSubmit = (data:any) => console.log(data);

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
              <div className="w-full">
                <p className="text-brand text-2xl">فضای کار اشتراکی</p>
                <div className="mt-8 w-full">
                  <div className="flex w-full justify-between">
                    <div className="w-1/2">
                      <p className="text-xl mb-4">نام استارتاپ</p>
                      <input
                        type="text"
                        placeholder="نام استارتاپ"
                        className={`px-3 py-4 shadow-md rounded-md w-4/5 mt-2 placeholder:text-gray-200 ${
                          errors.name ? 'border-yellow-500' : ''
                        }`}
                        {...register("name", {
                          required: 'نام استارتاپ را وارد کنید.',
                          pattern: {
                            value: /^[\u0600-\u06FF\s]+$/,
                            message: 'نام استارتاپ را به درستی وارد کنید.',
                          },
                        })}
                      />
                      {errors.name && (
                        <span className="text-sm text-yellow-500">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="w-1/2">
                      <p className="text-xl mb-4">تعداد اعضای تیم</p>
                      <input
                        type="number"
                        placeholder="تعداد اعضای تیم"
                        className={`px-3 py-4 shadow-md rounded-md w-full mt-2 placeholder:text-gray-200 ${
                          errors.members_count ? 'border-yellow-500' : ''
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
                        <span className='text-sm text-yellow-500'>
                          {errors.members_count.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
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
                  />
                  {errors.phone && (
                    <span className='text-sm text-yellow-500'>
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
                  />
                  {errors.email && (
                    <span className='text-sm text-yellow-500'>
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              
            </div>
            <div className="w-full flex justify-center mt-8">
              <button className="flex px-12 py-2 rounded-md bg-brand text-white">
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
