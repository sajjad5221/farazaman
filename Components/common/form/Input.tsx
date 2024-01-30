// import { useForm, UseFormRegister, FieldValues } from 'react-hook-form';

export default function Input({
    register,
    errors,
    nameInput,
    type,
    label,
    placeholder,
    className,
    labelClass,
    containerClass,
    autoComplete,
    required,
    requiredValue,
    requiredMessage,
    handleChange
  }: {
    register: any;
    errors: any;
    nameInput: string;
    type: string;
    label: string;
    placeholder: string;
    className: string;
    labelClass: string;
    containerClass: string;
    inputValue?: any;
    autoComplete: string | boolean;
    required: string;
    requiredValue?: RegExp;
    requiredMessage?: string;  
    handleChange: (e: any) => void
}) {

    const value = requiredValue ? new RegExp(requiredValue) : requiredValue
     // **don`t use slash (/) before and after regex pattern for this component and don`t use i end of regex pattern in this component
    return (
        <div className={containerClass}>
            <label
              htmlFor={nameInput}
              className={labelClass}
            >
                {label}
            </label>
            <input
              id={nameInput}
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
            //   className={`w-full px-4 py-3 border-2 placeholder:text-neutral-400   rounded-md outline-none     focus:ring-4 ${
            //   errors.name ? 'border-yellow-500' : ''}`}
            className={`${className} ${errors[nameInput] ? "border-yellow-500" : ""}`}
             {...register(nameInput, {
                required: required,
                pattern: {
                    value: value,
                    message: requiredMessage,
                },
             })}
              onChange={handleChange}
            />
            {errors[nameInput] && (
             <span className="text-sm text-yellow-500">
                {errors[nameInput].message}
             </span>
            )}
        </div>
    );
  }
  