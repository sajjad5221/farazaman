import React from 'react'
import { useData } from '@/stores/dataStore'

type Props = {}

const FormNotification = ({}: Props) => {

  const Data = useData();

  return (
    <>
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
    </>
  )
}

export default FormNotification