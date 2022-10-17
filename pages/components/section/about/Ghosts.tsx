import type { FC } from 'react';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import ghostsImg from '@/public/Ghosts.png';

const Ghosts: FC = () => {

  return (
    <div id='ghosts' className='relative'>
      <Image src={ghostsImg} />
      <div className='absolute font-[special-elite] text-[1.5vw] leading-[1.8vw] top-[43.3%] text-white flex flex-col justify-center w-full gap-1'>
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
            <img src='/icon/discord_large.png' alt='discord' className='w-[4vw]'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Ghosts;