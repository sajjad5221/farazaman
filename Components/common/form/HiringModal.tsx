import React, {useState} from 'react';
import Modal from 'react-modal';
import XLg from '../../icons/XLg';
import ArrowLeft from '../../icons/ArrowLeft';
import { HiringInfo } from "@/types/global";
import { useForm } from "react-hook-form";

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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const { register , handleSubmit,formState:{errors} } = useForm<HiringInfo>({});

  const onSubmit = (data: any) => console.log(data);

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
                <p className="text-brand text-2xl">
                  استخدام در شتابدهنده فرازمان
                </p>
                <div className="mt-8 ">
                  <p className="text-xl mb-4">نام و نام خانوادگی</p>
                  <input
                      type="text"
                      className={`px-3 py-4 shadow-md rounded-md w-4/5 mt-2 placeholder:text-gray-200 ${
                          errors.name ? 'border-yellow-500' : ''
                      }`}
                      {...register('name', {
                        required: 'نام و نام خانوادگی خود را وارد کنید.',
                        pattern: {
                          value: /^[\u0600-\u06FF\s]+$/,
                          message: 'نام و نام خانوادگی خود را به درستی وارد کنید.',
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
                      {...register("email", {
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
              <div className="">
                <p className="text-xl mb-4">رزومه شما</p>
                <input
                    type="file"
                    className="px-3 py-4 shadow-md rounded-md w-full mt-2 placeholder:text-gray-200"
                    placeholder="لطفا فایل مورد نظر را آپلود کنید"
                    {...register("resume")}
                    onChange={handleFileChange}
                />
                {errors.resume && (
                    <span className="text-sm text-yellow-500">
                      {errors.resume.message}
                    </span>
                )}
              </div>
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
