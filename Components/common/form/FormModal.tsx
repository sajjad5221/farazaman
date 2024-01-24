import React from 'react';
import Modal from 'react-modal';
import XLg from '../XLg';
import ArrowLeft from '../../icons/ArrowLeft';

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

export default function FormModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  return (
    <Modal isOpen={isOpen} style={customStyles}>
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
                  className="px-3 py-4 shadow-md rounded-md w-4/5 mt-2 placeholder:text-gray-200"
                  placeholder="نام و نام خانوادگی"
                />
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
                  className="px-3 py-4 shadow-md rounded-md w-4/5 mt-2 placeholder:text-gray-200"
                  placeholder="شماره تلفن همراه"
                />
              </div>
              <div className="w-1/2">
                <p className="text-xl mb-4">آدرس ایمیل شما</p>
                <input
                  type="text"
                  className="px-3 py-4 shadow-md rounded-md w-full mt-2 placeholder:text-gray-200"
                  placeholder="آدرس الکترونیکی"
                />
              </div>
            </div>
            <div>
              <textarea
                rows={4}
                className="textarea mt-8 rounded-md textarea-lg w-full mb-1 drop-shadow-md resize-none placeholder:text-gray-300 placeholder:font-thin px-4 py-3"
                placeholder="توضیحات...."
              ></textarea>
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
    </Modal>
  );
}
