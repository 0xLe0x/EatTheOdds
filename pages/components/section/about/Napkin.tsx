import type { FC } from 'react';
import { useState, useEffect } from 'react'
import Image from 'next/image';

const Napkin: FC = () => {

  return (
    <div id='napkin' className='relative w-full'>
      <img src='Napkin.png' alt="napkin" className='w-full'/>
    </div>
  )
}

export default Napkin;