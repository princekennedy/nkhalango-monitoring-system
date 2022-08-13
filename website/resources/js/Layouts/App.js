import React from 'react';
import FlashMessages from '@/Components/FlashMessages';
import TopHeader from '@/Shared/TopHeader';
import MainMenu from '@/Shared/MainMenu';
import { Head } from '@inertiajs/inertia-react';
import Sidebar from '@/Shared/Sidebar';

export default function App({ title, children }) {
  return (
    <div>
      <Head title={title} />
      <div className="flex flex-col">
        <div className="flex flex-col h-screen">
          <div className="md:flex">
            <Sidebar />
            <TopHeader />
          </div>
          <div className="flex flex-grow overflow-hidden">
            <MainMenu className="flex-shrink-0 hidden w-56 py-3 px-3 overflow-y-auto bg-green-800 md:block" />
            <div className="w-full px-4 py-4 overflow-hidden overflow-y-auto md:p-12 md:py-4 bg-gray-200" scroll-region="true">
              <FlashMessages />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
