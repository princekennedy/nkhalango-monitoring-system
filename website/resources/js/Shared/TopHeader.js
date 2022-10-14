import React, { useEffect, useState } from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import {
  VscAccount,
  VscLocation,
  VscWatch
} from 'react-icons/vsc'
import { formatDate } from '@/Utils';

export default () => {
  const { auth } = usePage().props;
  const [menuOpened, setMenuOpened] = useState(false);

  const [time, setTime] = useState("Loading...");

  useEffect(() => {
    const interval = setInterval(() => setTime(formatDate()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex items-center justify-between w-full p-4 text-sm bg-white border-b md:py-0 md:px-12 d:text-md">
      <div className="mt-1 mr-4 flex">
        <VscWatch />
        <span className='text-gray-800 text-sm'>
          {time}
        </span>
      </div>
      <div className="relative">
        <div
          className="flex items-center cursor-pointer select-none group"
          onClick={() => setMenuOpened(true)}
        >
          <div className="mr-1 text-gray-800 whitespace-nowrap group-hover:text-green-600 focus:text-green-600">
            <span>{auth.user.first_name}</span>
            <span className="hidden ml-1 md:inline">{auth.user.last_name}</span>
          </div>
          <VscAccount
            className="w-5 h-5 text-gray-800 fill-current group-hover:text-green-600 focus:text-green-600"
          />
          {/* <img src={auth.user.avatar} alt="..." className="w-5 h-5 text-gray-800 fill-current group-hover:text-green-600 focus:text-green-600" /> */}
        </div>
        <div className={menuOpened ? '' : 'hidden'}>
          <div className="absolute top-0 right-0 left-auto z-20 py-2 mt-8 text-sm whitespace-nowrap bg-white rounded shadow-xl">
            {<InertiaLink
              href={route('user.edit', auth.user.id)}
              className="block px-6 py-2 hover:bg-green-600 hover:text-white"
              onClick={() => setMenuOpened(false)}
            >
              My Profile
            </InertiaLink>}
            <InertiaLink
              href={route('user.index')}
              className="block px-6 py-2 hover:bg-green-600 hover:text-white"
              onClick={() => setMenuOpened(false)}
            >
              Manage Users
            </InertiaLink>
            <InertiaLink
              as="button"
              href={route('logout')}
              className="block w-full px-6 py-2 text-left focus:outline-none hover:bg-green-600 hover:text-white"
              method="post"
            >
              Logout
            </InertiaLink>
          </div>
          <div
            onClick={() => {
              setMenuOpened(false);
            }}
            className="fixed inset-0 z-10 bg-black opacity-25"
          ></div>
        </div>
      </div>
    </div>
  );
};
