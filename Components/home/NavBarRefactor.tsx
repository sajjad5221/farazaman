'use client';

import { useLang } from '@/stores/langStore';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { resources } from '@/types/i18n';
import Footer from '../footer/Footer';


function NavBarRefactor(
  {lang} : {lang: string}
) {

  const [toggleMenu, setToggleMenu] = useState(false);

  const setLang = useLang().setLanguage;

  useEffect(() => {
    setLang(lang);
  },[lang])

  console.log(lang);


  // const navigation = [
  //   { name: 'فضای کار اشتراکی', goTo: 'workspace' },
  //   { name: 'استخدام', goTo: 'hiring' },
  //   { name: 'ثبت استارتاپ', goTo: 'startups' },
  //   { name: 'ارتباط با ما', goTo: 'contact' },
  // ];

  // const handleToggle = () => {
  //   setToggleMenu(!toggleMenu);
  // };

  const index1 = lang === "fa" ? resources.fa.mainPageFA : resources.en.mainPageEN


  return (
    <nav className="drawer w-full m-auto my-5">
      <div className="flex ">
        <div className=" w-72">
          <div>
            <Link
              href={'/'}
              className=""
            >
              <Image
                className="w-6/12 hover:cursor-pointer"
                src="/static/images/Farazaman.png"
                alt="Farazaman"
                width={200}
                height={200}
                quality={75}
                sizes="100vw"
              />
              {/* <p className="">فرازمان</p> */}
            </Link>
          </div>
          <div className="flex md:hidden">
            <p
              onClick={() => {
                setToggleMenu(!toggleMenu);
                console.log(toggleMenu);
              }}
              className="hover:text-brand focus:text-brand cursor-pointer"
            >
              {toggleMenu ? (
                <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
              )}
            </p>
          </div>
        </div>
        <div className=" hidden md:flex items-center justify-between p-2 gap-2 w-screen ">
          <ul className="flex justify-evenly items-center gap-2 w-7/12 m-auto text-lg font-light">
            {index1.menuItems.map((item: any, index: number) => (
              <>
              <Link key={index}
                href={item.goTo}
              >
                <li
                  key={item.name}
                  className=" hover:cursor-pointer"
                >
                  {item.name}
                </li>
              </Link>
              </>
            ))}

          </ul>
          <Link href={'/'} className='border border-brand ml-0 p-2 bg-brand rounded-lg px-14 text-white text-lg hover:cursor-pointer hover:text-brand transition-all hover:bg-white' >ارتباط با ما</Link> 
        </div>
        <div className="">
          <ul
            className={`text-center h-1/2 justify-center items-center md:hidden ${toggleMenu ? 'flex-col' : 'hidden'}`}
          >
            {index1.menuItems.map((item, index) => (
              <Link 
                key={index}
                href={item.goTo}
              >
                <li
                  className=""
                  key={item.name}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBarRefactor;
