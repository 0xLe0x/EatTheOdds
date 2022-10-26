import type { NextPage } from 'next';
import Image from 'next/image';
import bookImg from '@/public/bitelist.png';

const RarityTracker: NextPage = () => {
  return (
    <div className='text-center'>
      <Image src={bookImg} />
    </div>
  );
};

export default RarityTracker;
