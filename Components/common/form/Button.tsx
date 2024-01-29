'use client';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import ArrowLeft from '@/Components/icons/ArrowLeft';

// Define the ButtonProps type
// go to prop causes a redirext
// go to prop causes a redirext
type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  func: 'goto' | 'guide' | 'form';
  onChange?: () => void;
  text: string;
  submit: boolean;
  disabled?: string | boolean;
};

export default function Button({
    func,
    onChange,
    text,
    submit,
    disabled
}: ButtonProps) {

  // Determine the button kind and apply appropriate styles
  const type = submit ? 'submit' : 'button';

//   console.log(func);

  return (
    <>
      {((): any => {
        switch (func) {
            case 'guide':
                return (
                    <button type={type} className="w-full h-full bg-brand py-2 px-4 flex text-sm rounded-md" onClick={onChange} >
                        <p className="pl-2 text-white">{text}</p>
                        <ArrowLeft color="#fff" />
                    </button>
                )
                break;
            case 'form':
                return (
                    <button type={type} disabled={disabled} className="w-full h-full py-4 font-semibold text-white transition-colors rounded-md bg-neutral-900 hover:bg-neutral-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-200 px-7" >
                        {text}
                    </button>
                )
                break;
            case 'goto':
                return (
                    <button type={type} className="w-full h-full flex px-5 py-2 mt-8 text-brand rounded-md border border-brand hover:text-white hover:bg-brand" >
                        <p>{text}</p>
                        <ArrowLeft color="#D6A001" />
                    </button>
                )
                break;
        
            default:
                break;
        }
      })()}
    </>
  );
}