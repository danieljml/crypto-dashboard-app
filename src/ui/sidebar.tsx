import Link from 'next/link';
import { MainNavigationLinks, SupportNavigationLinks } from '@/ui/navlinks';
import { PiSignOutBold } from 'react-icons/pi';

import logo from '../../public/meetam-logo-removebg.png';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div
      className="flex flex-col bg-[#18182e] m-2 rounded-2xl h-fill-available border-gray-500 border-[1px]"
      style={{
        background: 'linear-gradient(177deg,#272d40 0%, #18182e 80%)',
      }}
    >
      <Link
        className="flex items-end justify-start rounded-md px-4 p-8 pb-4"
        href="/"
      >
        <div className="w-34 md:w-40">
          <Image src={logo} width={400} height={200} alt="logo" priority />
        </div>
      </Link>
      <p className="text-sm text-gray-500 p-4 pt-0 m-0 font-medium">
        Dashboard Overview
      </p>
      <div className="flex flex-row h-full justify-between gap-y-8 md:flex-col md:space-x-0 md:space-y-2 overflow-y-auto">
        <div>
          <MainNavigationLinks />
        </div>
        <div className="border-y-[1px] py-4 border-gray-500 ">
          <p className="text-sm text-gray-500 p-4 pt-0 m-0 font-medium">
            Support
          </p>
          <SupportNavigationLinks />
        </div>
      </div>
      <div className="h-20 flex grow m-0 items-center justify-between gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:p-2 md:px-3">
        <div className="hidden md:block">
          <p className="text-xs text-gray-300">Meeteam 2024®</p>
        </div>
        <button>
          <PiSignOutBold className="text-2xl text-gray-300 hover:text-[#1D64F5]" />
        </button>
      </div>
    </div>
  );
}
