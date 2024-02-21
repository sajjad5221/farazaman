'use client';
import React from 'react';

export default function Select({
  register,
  errors,
  nameInput,
  label,
  required,
  options,
  className,
  labelClass,
  placeholder,
  handleChange,
  selected
}: {
  register: any;
  errors: any;
  nameInput: string;
  label: string;
  required: string;
  options: Array<{ value: string; label: string }>;
  className: string;
  labelClass: string;
  placeholder: string;
  handleChange?: any;
  selected?: string;
}) {
  return (
    <div className="flex flex-col items-start">
      <label htmlFor={nameInput} className={`self-start px-4 ${labelClass}`}>
        {label}
      </label>
      {/* TO DO : select placeholder has a problem */}
      <div className="flex w-full flex-col items-start">
        <select
          id={nameInput}
          {...register(nameInput, {
            required: required
          })}
          className={className + (errors[nameInput] ? ' border-red-500' : '')}
          onChange={handleChange}
        >
          <option disabled selected value={''}>
            {selected ? selected : placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {errors[nameInput] && (
          <span className="mt-2 inline text-sm text-red-500">
            {errors[nameInput].message}
          </span>
        )}
      </div>

      <br />
    </div>
  );
}
