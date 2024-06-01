import CryptoChart from '@/ui/activity/chart';
import CurrencyCards from '@/ui/activity/currency-cards';
import Header from '@/ui/activity/header';
import HistoryCard from '@/ui/activity/history-card';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex gap-x-3.5 md:flex-wrap lg:flex-nowrap">
        <div className="w-2/3">
          <div className="flex gap-8 font-semibold text-white py-8 text-[26px]">
            <p>Total balance</p> <p className="px-4">$183.936</p>
          </div>
          <CurrencyCards />
          <CryptoChart />
        </div>
        <div className="flex items-center w-1/3 mx-4">
          <HistoryCard />
        </div>
      </div>
    </div>
  );
}
