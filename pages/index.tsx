import type { NextPage } from 'next';
import type { FC } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Home: NextPage = () => {
  return (
    <div className='py-6 justify-center text-center'>
      <div className='flex justify-center'>
        <ConnectButton />
      </div>

      <h1 className='text-4xl font-bold mt-6'>Eat the Odds</h1>
      <InfoSection />
    </div>
  );
};

const InfoSection: FC = () => {
  return (
    <div className='mt-10'>
      <h2 className='text-xl font-bold'>If you need help</h2>
      <div className='flex flex-col gap-2 mt-2'>
        <a
          href='https://wagmi.sh'
          target='_blank'
          className='underline text-gray-600'
        >
          Link to wagmi docs
        </a>
      </div>
    </div>
  );
};

export default Home;
