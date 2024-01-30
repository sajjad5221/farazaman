'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

function NavBarRefactor() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigation = [
    { name: 'فضای کار اشتراکی', goTo: 'workspace' },
    { name: 'استخدام', goTo: 'hiring' },
    { name: 'ثبت استارتاپ', goTo: 'startups' },
    { name: 'ارتباط با ما', goTo: 'contact' },
  ];

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="drawer fixed top-0 z-10 py-6 px-10 w-full md:px-20 backdrop-blur-lg">
      <div className="flex-col md:flex-row md:flex justify-between w-full md:w-5/6">
        <div className="flex justify-between">
          <div>
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={700}
            >
              <h1 className="cursor-pointer">فرازمان</h1>
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
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </p>
          </div>
        </div>
        <div className="md:w-3/4">
          <ul className="justify-between hidden md:flex">
            {navigation.map((item) => (
              <Link
                to={item.goTo}
                spy={true}
                smooth={true}
                offset={-50}
                duration={700}
              >
                <li
                  key={item.name}
                  className="hover:text-brand focus:text-brand cursor-pointer"
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="w-full flex justify-center items-center md:hidden">
          <ul
            className={`text-center h-1/2 justify-center items-center md:hidden ${
              toggleMenu ? 'flex-col' : 'hidden'
            }`}
          >
            {navigation.map((item) => (
              <Link
                to={item.goTo}
                spy={true}
                smooth={true}
                offset={-50}
                duration={700}
              >
                <li
                  className="py-5 hover:text-brand focus:text-brand cursor-pointer"
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
