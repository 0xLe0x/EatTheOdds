import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='z-10 lg:absolute lg:top-0 flex items-center w-full bg-[#121212] pt-4 pb-10 px-[50px] lg:px-[7%] drop-shadow-2xl overflow-hidden'>
      <div className='flex items-center justify-between w-full'>
        <div className='links flex justify-center items-center gap-10 text-white text-2xl uppercase font-bold'>
          <Link href='/'>
            <a>
              <img src="/EAT THE oDD$.png" alt="EAT THE oDDS" className='animate-[pulsate_20s_infinite]' />
            </a>
          </Link>
        </div>

        <div className='flex gap-10'>
          <div className='links flex items-center gap-4 text-white text-3xl uppercase font-bold font-[Creepster]'>
            <Link href='#about'>
              About
            </Link>
            <Link href='#bitelist'>
              Bitelist
            </Link>
            <Link href='#tracker'>
              Tracker
            </Link>
            <Link href='#eatery'>
              Eatery
            </Link>
            <Link href='#faq'>
              Faq
            </Link>
          </div>
          <div className='flex gap-2 items-center'>
            <a>
              <img src='/icon/twitter.png' alt="Twitter" />
            </a>
            <a>
              <img src='/icon/discord.png' alt="Discord" />
            </a>
            <a>
              <img src='/icon/instagram.png' alt="Instagram" />
            </a>
            <a>
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
