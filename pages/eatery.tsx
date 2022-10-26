import type { NextPage } from 'next';
import Image from 'next/image';
import eateryImg from '@/public/eatery.png';

const RarityTracker: NextPage = () => {
  return (
    <div className='relative w-full max-w-[1920px] mx-auto'>
      <Image src={eateryImg} />
    </div>
  );
};

export default RarityTracker;
