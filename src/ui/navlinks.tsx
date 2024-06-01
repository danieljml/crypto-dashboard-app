'use client';
import { PiCalendarStarBold, PiWalletBold } from 'react-icons/pi';
import { HiOutlineMail } from 'react-icons/hi';
import { TbNews } from 'react-icons/tb';
import { CiCirclePlus } from 'react-icons/ci';
import { MdOutlineAnalytics } from 'react-icons/md';
import { FiFlag } from 'react-icons/fi';
import { IoSettingsOutline, IoChatboxEllipsesOutline } from 'react-icons/io5';
import { BiHelpCircle } from 'react-icons/bi';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mainNavigationLinks = [
  { name: 'Activity', href: '/', icon: PiCalendarStarBold },
  { name: 'Deposit', href: '/deposit', icon: PiWalletBold },
  {
    name: 'News',
    href: '/news',
    icon: TbNews,
    color: '#04BF7B',
    unreadItemCount: 1,
  },
  {
    name: 'Messages',
    href: '/messages',
    icon: HiOutlineMail,
    color: '#2267f2',
    unreadItemCount: 2,
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: MdOutlineAnalytics,
  },
  { name: 'Announcements', href: '/announcements', icon: FiFlag },
];

const supportNavigationLinks = [
  { name: 'Settings', href: '/settings', icon: IoSettingsOutline },
  { name: 'Help', href: '/help', icon: BiHelpCircle },
  { name: 'Chat', href: '/chat', icon: IoChatboxEllipsesOutline },
];

type LinkItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  color?: string;
  unreadItemCount?: number;
};

type LinksProps = Readonly<{
  links: LinkItem[];
}>;

function SecondaryIconList(
  path: string,
  color: string | undefined,
  unreadItemCount: number | undefined
) {
  switch (path) {
    case '/':
      return <CiCirclePlus className="text-white text-2xl absolute right-2" />;
    case '/messages':
    case '/news':
      return <RadioNumber color={color ?? ''} num={unreadItemCount ?? 0} />;
    default:
      return null;
  }
}

function NavigationLinks({ links }: LinksProps) {
  const path = usePathname();

  return (
    <>
      {links.map(link => {
        const LinkIcon = link.icon;
        const isActive = path === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="mx-4 px-2 rounded-3xl relative text-gray-500 flex h-[48px] grow items-center justify-center gap-2 text-sm font-medium hover:bg-[#1D64F5] hover:text-white md:flex-none md:justify-start"
            style={{
              background: isActive
                ? 'linear-gradient(90deg,#2267f2 60%, #41a0f2 80%)'
                : 'unset',
            }}
          >
            <LinkIcon className={` ${isActive && 'text-white'} text-2xl`} />
            <p
              className={` ${
                isActive && 'text-white'
              }  text-sm hidden md:block`}
            >
              {link.name}
            </p>
            {SecondaryIconList(link.href, link?.color, link?.unreadItemCount)}
          </Link>
        );
      })}
    </>
  );
}

export function MainNavigationLinks() {
  return <NavigationLinks links={mainNavigationLinks} />;
}

export function SupportNavigationLinks() {
  return <NavigationLinks links={supportNavigationLinks} />;
}

function RadioNumber({
  color,
  num,
}: {
  readonly color?: string;
  readonly num?: number;
}) {
  return (
    <div
      className="rounded-full absolute right-2 text-white w-6 h-6 pt-[1px] flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      {num ?? 0}
    </div>
  );
}
