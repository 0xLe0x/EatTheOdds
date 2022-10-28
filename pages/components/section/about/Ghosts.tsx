import type { FC } from 'react';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import ghostsImg from '@/public/Ghosts.png';

const Ghosts: FC = () => {

  return (
    <div id='ghosts' className='relative w-full  mx-auto'>
      <Image src={ghostsImg} />
      <div className='absolute font-[special-elite] text-[1.2vw]  leading-[1.6vw] 3xl:text-[30px] 3xl:leading-[32px] top-[43.3%] text-white flex flex-col justify-center w-full gap-1'>
        <div>
          Head over to discord.
          <br />
          Grab a seat at the table.
          <br />
          Get the latest news.
          <br />
          Contribute to the community.
          <br />
          Share the love
          <br />
          and reserve your spot
          <br />
          on the BITELIST!
        </div>
        <div className='flex justify-center'>
          <a href='#'>
            <img src='/icon/discord_large.png' alt='discord' className='w-[4vw] 3xl:w-[76px]'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Ghosts;