import { SiBitcoinsv, SiLitecoin } from 'react-icons/si';
import { FaEthereum } from 'react-icons/fa';

const historyItems = [
  {
    title: 'From BTC wallet Binance',
    amount: '+30.000',
    icon: <SiBitcoinsv />,
    date: '08/05/2024',
  },
  {
    title: 'To Ether Blockchain',
    amount: '-5.23',
    icon: <FaEthereum />,
    date: '07/26/2024',
  },
  {
    title: 'From LiteCoin Wallet',
    amount: '+1.000',
    icon: <SiLitecoin />,
    date: '07/03/2024',
  },
  {
    title: 'From BTC Wallet',
    amount: '+90.0',
    icon: <SiBitcoinsv />,
    date: '06/10/2024',
  },
];

export default function HistoryCard() {
  return (
    <div
      className="w-full min-w-[300px] min-h-80 bg-[#272D40] rounded-2xl border-gray-500 border-[1px] p-6 mt-16 text-white"
      style={{
        background: 'linear-gradient(177deg,#272d40 0%, #18182e 80%)',
      }}
    >
      <p className="text-2xl">Wallet Activity</p>
      <div className="flex justify-between my-6 text-sm px-2">
        <p>History</p>
        <button className="text-gray-400">See All</button>
      </div>
      <div className="grid px-2 gap-y-6">
        {historyItems.map(({ title, amount, icon, date }) => {
          return (
            <div key={title} className="flex text-xs gap-x-4">
              <div className="flex flex-1 items-center gap-x-2">
                {icon}
                <p className="capitalze text-violet-300">{title}</p>
              </div>
              <p
                className={`${
                  Number(amount) > 0 ? 'text-green-500' : 'text-red-500'
                } text-end`}
              >
                ${amount}
              </p>
              <p className="text-violet-300">{date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
