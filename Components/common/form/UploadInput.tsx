import Image from 'next/image';


// TO DO : mobile design of file input should change
// TODO: add i18n
export default function UploadInput({
  title,
  register,
  errors,
  nameInput,
  handleChange,
  required
}: {
  title: string;
  register: any;
  errors: any;
  nameInput: string;
  handleChange: any;
  required?:string;
}) {
  return (
    <div className="inline-flex max-w-full rtl:pl-6 ltr:pr-6 flex-col justify-center gap-3">
      {/* Label for the upload input */}
      <div className="self-start px-2 text-[15px] font-normal text-neutral-800">{title}</div>

      {/* Container for the upload input */}
      <div className="inline-flex items-center justify-center gap-[5px] rounded-md bg-stone-100 px-6 py-2 shadow">
        {/* Upload icon */}
        <Image
          loading="lazy"
          className="h-5 w-5"
          src="/static/images/01b4cd75ff21ef0a30e6e410fa049bb0.png"
          width={100}
          height={100}
          alt="upload"
        />

        {/* The actual input */}
        <input
          className={`h-7 text-[13px] font-normal capitalize text-neutral-800 ${errors[nameInput] ? ' border-red-500' : ''}`}
          type="file"
          {...register(nameInput,{required:required})}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            // setFileState({nameInput: e.target.files});

            if (e.target.files) {
              handleChange(e.target.files[0]);
            }
          }}
        />
        {errors[nameInput] && (
          <span className="mt-4 text-sm text-red-500">
            {errors[nameInput].message}
          </span>
        )}
      </div>
    </div>
  );
}
