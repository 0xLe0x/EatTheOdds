import type { NextPage } from 'next';
import type { FC } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Splash from './components/section/about/Splash';

const Home: NextPage = () => {
  return (
    <div className='justify-center text-center'>
      {/* <div className='flex justify-center'>
        <ConnectButton />
      </div> */}
      <Splash />
    </div>
  );
};

export default Home;
