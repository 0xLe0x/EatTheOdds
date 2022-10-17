import type { NextPage } from 'next';
import type { FC } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Splash from './components/section/about/Splash';
import Counter from './components/section/about/Counter';
import Napkin from './components/section/about/Napkin';
import Ghosts from './components/section/about/Ghosts';

const Home: NextPage = () => {
  return (
    <div className='justify-center text-center'>
      {/* <div className='flex justify-center'>
        <ConnectButton />
      </div> */}
      <Splash />
      <Counter />
      <Napkin />
      <Ghosts />
    </div>
  );
};

export default Home;
