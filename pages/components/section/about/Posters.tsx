import type { FC } from 'react';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import postersImg from '@/public/Posters.png';

const Counter: FC = () => {

  return (
    <div id='counter' className='relative w-full max-w-[1920px] mx-auto text-white'>
      <Image src={postersImg} className="w-[100vw]" alt="Posters"/>
      <div className='absolute text-[16px] leading-[20px] lg:text-[20px] lg:leading-[24px] text-left left-[11.5%] top-[10.6%] w-[20.5%] h-[70%] overflow-auto'>
        1) Each day, every oDD will automatically go up against another random oDD in the eatery.
        <br />
        <br />
        2) In the eatery, one oDD will eat the other. (Rarest oDD wins)
        <br />
        <br />
        3) The losing oDD will be removed from the game and returned in the form of a ghost
        <br />
        <br />
        4) The winning oDD will gain the rarest trait of the losing oDD, improving its rarity.
        <br />
        <br />
        5) The higher an oDD$ rarity the greater its chance of surviving the Eatery the next time it enters.
      </div>
      <div className='absolute text-[16px] leading-[20px] lg:text-[20px] lg:leading-[24px] text-left left-[40%] top-[10.6%] w-[20.5%] h-[70%] overflow-auto'>
        1) On top of the daily automatic dinner at the eatery, any oDD may snack at any time.
        <br />
        <br />
        2) To snack an oDD enters the Eatery & goes up against another random oDD
        <br />
        <br />
        3) In the eatery, one oDD will snack on the other. (Rarest oDD wins)
        <br />
        <br />
        4) The oDD that is snacked on will swap its rarest trait with the corresponding trait of the winning oDD, but will NOT be removed from the game.
        <br />
        <br />
        5) The more you eat the better your oDD$.
      </div>
      <div className='absolute text-[16px] leading-[20px] lg:text-[20px] lg:leading-[24px] text-left left-[67.6%] top-[10.6%] w-[20.5%] h-[70%] overflow-auto'>
        1) When a oDD loses at dinner, it will be removed from the game and returned to its holder in the form of a ghost.
        <br />
        <br />
        2) A ghost is no longer eligible to win prizes withing the game.
        <br />
        <br />
        3) Ghosts can be redemmed for Bitelist reservations for the next round of the game.
      </div>
    </div>
  )
}

export default Counter;