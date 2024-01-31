'use client';
import React, { useEffect } from 'react';
import GetCsrfToken from '@/Services/GetCsrfToken';
import { useForm } from 'react-hook-form';
import FormsDetails from '@/Components/misc/FormsDetails';
import Apiclient from '@/Services/Apiclient';
import { HiringInfo } from '@/types/global';
import { useData } from '@/stores/dataStore';
import { useTranslation } from '@/app/i18n/client';
import Button from '../common/form/Button';

// const initialFormData = {
//   name: '',
//   last_name: '',
//   email: '',
//   phone: '',
//   hireType: '',
//   resume: null as File | null,
// };

const Data = useData.getState();

const HiringForm = ({ lang }: { lang: string }) => {
  const { t } = useTranslation(lang, 'mainPage');

  // console.log(t('title'));

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HiringInfo>({
    mode: 'onBlur',
  });
  const description =
    'شرکت ما با تمرکز بر نوآوری و ایده‌های پرسرعت، استارتاپ‌های نوپا را در حوزه‌های مختلف پشتیبانی می‌کند. با تیم متخصص و برنامه‌های آموزشی منحصربه‌فرد، ما شرکت‌ها را به موفقیت و پیشرفت هدایت می‌کنیم. در حال حاضر، در حال استخدام هستیم و قصد داریم تیممان را با افراد متخصص و متعهد توسعه دهیم. اگر به یادگیری، همکاری و خلاقیت علاقه‌مند هستید و می‌خواهید به یک تیم پویا و پرشور بپیوندید، منتظر شما هستیم. لطفاً فرم استخدام را پر کنید تا اطلاعات بیشتری دریافت کنید و رزومه خود را ارسال کنید.';
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [Message, setMessage] = useState('');
  // const [Send, setSend] = useState(false);
  // const [formData, setFormData] = useState(initialFormData);
  // const [filePost, setFilePost] = useState<{ resume: File | null }>({
  //   resume: null,
  // });
  // const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken('http://localhost:8000/get-csrf-token/');
      Data.handleTokenChange(token);
    }

    fetchCsrfToken();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'resume') {
      // if (e.target.files && e.target.files.length > 0) {
      //   Data.handleFormDataChange({});
      // }
      // e.target.files;
      console.log(e.target.value);
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
    if (Data.formData.resume) {
      sendFormData.append(
        'resume',
        Data.formData.resume,
        Data.formData.resume.name
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
      reset(); // Reset the form fields
    } catch (error) {
      console.log(error);
      Data.handleMessageChange('ارسال ناموفق بود !');
      Data.handleSendChange(false);
      Data.handleSubmitingChange(false);
    }
  };

  return (
    <div className="w-screen mt-16 bg-gray-50  " id="contact">
      <div className="px-4 pt-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black  ">استخدام</h2>

        <p className="max-w-2xl pt-6 pb-6 m-auto text-base text-center text-zinc-600  ">
          استخدام در شتابدهنده فرازمان
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px px-12 md:grid-cols-2 bg-gray-50  ">
        <FormsDetails
          title="استخدام در شتابدهنده فرازمان"
          description={description}
        />
        <div className="w-full px-8 py-8 md:order-last lg:order-last max-[768px]:order-first">
          <div>
            <form className="z-20" onSubmit={handleSubmit(handleFormSubmit)}>
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
                  placeholder="نام و نام خانوادگی "
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400   rounded-md outline-none     focus:ring-4 ${
                    errors.name ? 'border-yellow-500' : ''
                  }`}
                  {...register('name', {
                    required: 'نام و نام خانوادگی خود را وارد کنید.',
                    pattern: {
                      value: /^[\u0600-\u06FF\s]+$/,
                      message: 'نام و نام خانوادگی خود را به درستی وارد کنید.',
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
                  htmlFor="email-address"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  آدرس ایمیل شما
                </label>
                <input
                  id="email-address"
                  type="email"
                  placeholder="آدرس ایمیل شما"
                  autoComplete="true"
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
                  htmlFor="phone-number"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  شماره موبایل
                </label>
                <input
                  id="phone-number"
                  type="number"
                  placeholder="شماره تماس ( مثال : ۰۹۱۳۱۲۳۴۵۶۷)"
                  autoComplete="false"
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
                  <span className="text-sm text-yellow-500">
                    {errors.hireType.message}
                  </span>
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
                    errors.hireType ? 'border-yellow-500' : ''
                  }`}
                  {...register('hireType', {
                    required: 'نوع استخدام خود را مشخص کنید.',
                  })}
                  onChange={handleChange}
                />
                {errors.hireType && (
                  <span className="text-sm text-yellow-500">
                    {errors.hireType.message}
                  </span>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="file"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  رزومه شما
                </label>
                <input
                  id="file"
                  type="file"
                  placeholder="قایل ارائه"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 text-gray-400 style="visibility:hidden placeholder:text-neutral-400   rounded-md outline-none     focus:ring-4 ${
                    errors.resume ? 'border-yellow-500' : ''
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
                  <span className="text-sm text-yellow-500">
                    {errors.resume.message}
                  </span>
                )}
              </div>
              <input
                type="hidden"
                name="csrftokenmiddleware"
                value={Data.csrfToken}
              />
              {/* <button
                type="submit"
                disabled={Data.send}
                className="w-full py-4 font-semibold text-white transition-colors rounded-md bg-neutral-900 hover:bg-neutral-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-200 px-7  "
              >
                {Data.send ? 'در حال ارسال...' : 'ارسال'}
              </button> */}
              <Button
                submit={true}
                disabled={Data.send}
                text={Data.send ? 'در حال ارسال...' : 'ارسال'}
                func="form"
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

export default HiringForm;
