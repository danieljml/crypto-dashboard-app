import { FiSearch } from 'react-icons/fi';
import { FaBell } from 'react-icons/fa';
import { CgMenuGridO } from 'react-icons/cg';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HiUserCircle } from 'react-icons/hi2';

const timePeriods = ['Monthly', 'Weekly', 'Daily'];

export default function Header() {
  return (
    <header className="flex items-center">
      <ul className="flex flex-1 gap-4 justify-end gap-y-4 text-sm">
        {timePeriods.map((period, i) => {
          return (
            <button
              key={period}
              className={`text-white px-4 py-[2px] rounded-[10px] ${
                i === 0 ? 'bg-[#1B78F2]' : 'bg-[#131326]'
              }`}
              style={{
                boxShadow:
                  i === 0 ? '0px 4px 16px 3px rgba(255,255,255,0.20)' : 'unset',
              }}
            >
              {period}
            </button>
          );
        })}
      </ul>
      <div className="flex flex-1 justify-end items-center text-3xl text-blue-300 gap-x-6">
        <button>
          <FiSearch />
        </button>
        <button>
          <CgMenuGridO />
        </button>
        <button
          className="flex items-center justify-center gap-[2px] bg-[#1B78F2] text-white rounded-[10px] text-sm h-[30px] w-[50px]"
          style={{
            boxShadow: '0px 4px 16px 3px rgba(255,255,255,0.20)',
            background: 'linear-gradient(90deg,#41a0f2 50%, #2267f2 90%)',
          }}
        >
          <FaBell />
          <p>8</p>
        </button>
        <button className="flex items-center">
          <HiUserCircle />
          <p className="text-sm text-white pl-2">Carlos M.</p>
          <IoMdArrowDropdown className="text-sm" />
        </button>
      </div>
    </header>
  );
}
