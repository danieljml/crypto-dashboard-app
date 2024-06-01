import { SiBitcoinsv, SiLitecoin } from 'react-icons/si';
import { FaEthereum } from 'react-icons/fa';
import {
  PiWaveSineLight,
  PiArrowUpRightFill,
  PiArrowDownRightFill,
} from 'react-icons/pi';

type CryptoState = 'stable' | 'down' | 'up';

type Crypto = {
  title: string;
  icon: JSX.Element;
  color?: string;
  price: string;
  percentageChange: string;
  state: CryptoState;
};

const currentCryptos: Crypto[] = [
  {
    title: 'BTC',
    icon: <SiBitcoinsv className="text-2xl" />,
    color: '#F2C335',
    price: '1.9678',
    percentageChange: '+12.5',
    state: 'stable',
  },
  {
    title: 'ETH',
    icon: <FaEthereum className="text-2xl" />,
    price: '23.2324',
    percentageChange: '-5.23',
    state: 'down',
  },
  {
    title: 'LTC',
    icon: <SiLitecoin className="text-2xl" />,
    price: '380.234',
    percentageChange: '+39.69',
    state: 'up',
  },
];

const colors: Record<CryptoState, string> = {
  stable: 'rgb(241 245 249)',
  down: '#dc2626',
  up: '#33ff00',
};

export default function CurrencyCards() {
  return (
    <div className="xl:grid xl:grid-cols-4 mb-12 flex flex-wrap gap-4 w-fit">
      {currentCryptos.map(
        ({ title, icon, color, price, percentageChange, state }) => {
          return (
            <div
              key={title}
              style={{
                backgroundColor: color ?? '#272B40',
                boxShadow: '1px -16px 25px 22px rgba(0,0,0,0.29) inset',
              }}
              className={`grid grid-cols-3 rounded-lg text-white py-4 p-2 max-w-[165px]`}
            >
              <div className="flex items-center">{icon}</div>
              <div className="flex flex-col justify-items-center justify-self-center">
                <p>{price}</p>
                <div className="flex gap-x-2">
                  <PiWaveSineLight style={{ color: colors[state] }} />
                  {Number(percentageChange) > 0 ? (
                    <PiArrowUpRightFill />
                  ) : (
                    <PiArrowDownRightFill />
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end justify-center text-xs">
                <p className="text-gray-200">{title}</p>
                <p style={{ color: colors[state] }}>{percentageChange}%</p>
              </div>
            </div>
          );
        }
      )}
      <button className="flex justify-center items-center border-dashed border-gray-500 border-[1px] rounded-lg w-[165px] h-[72px]">
        <p className="text-gray-200 text-sm">+ Add Currency</p>
      </button>
    </div>
  );
}
