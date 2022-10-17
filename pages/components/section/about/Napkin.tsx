import type { FC } from 'react';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import napkinImg from '@/public/Napkin.png';

const Napkin: FC = () => {

  return (
    <div id='napkin' className='relative'>
      <Image src={napkinImg} />
    </div>
  )
}

export default Napkin;