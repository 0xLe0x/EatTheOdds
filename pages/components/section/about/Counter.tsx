import type { FC } from 'react';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import counterImg from '@/public/Counter.png';

const Counter: FC = () => {

  return (
    <div id='counter' className='relative w-full max-w-[1920px] mx-auto '>
      <Image src={counterImg} className="w-[100vw]"/>
      <div className='absolute font-[special-elite] text-[10px] leading-3 sm:text-[15px] sm:leading-5 lg:text-[20px] lg:leading-6 left-[12%] top-[18.2%] w-[19.6%] h-[26.4%] overflow-auto'>
        Welcome Delinquents, Deviants, & Degenerate Scum to an all new NFT fine dinning extravaganza,
        where being viscous is delicious.
        <br />
        <br />
        So, get on the Bitelist today
        Reserve your seat at the table and enjoy the worlds most
        Brutal Battle Royale Buffet.
        <br />
        <br />
        Join us for 2 weeks of cannibalistic carnage
        as 8 192 oDD$ chew through the community,
        Improving their rarity and driving scarcity.
      </div>
      <div className='absolute font-[special-elite] text-[10px] leading-3 sm:text-[15px] sm:leading-5 lg:text-[20px] lg:leading-6 left-[40.4%] top-[18.2%] w-[19.6%] h-[25%] overflow-auto'>
        It’s simple, to win the competition,
        you must devour ALL the opposition.
        Revel in victory and laugh at defeat
        Cause your oDD$ get better.
        The more that you eat!
      </div>
    </div>
  )
}

export default Counter;