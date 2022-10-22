import Link from 'next/link';
import Image from 'next/image';
import nav_about from '@/public/navbar/About.png';
import nav_bitelist from '@/public/navbar/Bitelist.png';
import nav_tracker from '@/public/navbar/Tracker.png';
import nav_eatery from '@/public/navbar/Eatery.png';
import nav_faq from '@/public/navbar/FAQ.png';

const Header = () => {
  return (
    <header className='z-20 fixed lg:top-0 flex items-center w-full bg-[#121212] pt-4 pb-10 px-[50px] lg:px-[7%] drop-shadow-2xl overflow-hidden'>
      <div className='flex gap-10 items-center justify-between w-full'>
        <div className='links flex justify-center items-center gap-10 text-white text-2xl uppercase font-bold'>
          <Link href='/'>
            <a>
              <img src="/EAT THE oDD$.png" alt="EAT THE oDDS" />
            </a>
          </Link>
        </div>

        <div className='hidden sm:flex gap-10'>
          <div className='links flex items-center gap-4 text-white text-3xl uppercase font-bold font-[Creepster]'>
            <Link className="cursor-pointer" href='#about'>
              <Image className="cursor-pointer" src={nav_about} />
            </Link>
            <Link className="cursor-pointer" href='/#bitelist'>
              <Image className="cursor-pointer" src={nav_bitelist} />
            </Link>
            <Link className="cursor-pointer" href='/tracker'>
              <Image className="cursor-pointer" src={nav_tracker} />
            </Link>
            <Link className="cursor-pointer" href='/#eatery'>
              <Image className="cursor-pointer" src={nav_eatery} />
            </Link>
            <Link className="cursor-pointer" href='/#faq'>
              <Image className="cursor-pointer" src={nav_faq} />
            </Link>
          </div>
          <div className='flex gap-2 items-center'>
            <a href="https://twitter.com/eattheodds" className="cursor-pointer">
              <img src='/icon/twitter.png' alt="Twitter" />
            </a>
            <a className="cursor-pointer">
              <img src='/icon/discord.png' alt="Discord" />
            </a>
            <a className="cursor-pointer">
              <img src='/icon/instagram.png' alt="Instagram" />
            </a>
            <a className="cursor-pointer">
              <img src='/icon/opensea.png' alt="Opensea" />
            </a>
          </div>
        </div>
      </div>
      <img src='/NavBar.png' className='absolute bottom-0 left-0 w-full h-6 bg-headline bg-fill object-fill'/>
    </header>
  );
};

export default Header;
