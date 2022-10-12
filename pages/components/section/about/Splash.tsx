import type { FC } from 'react';
import Image from 'next/image';
import plateImg from './../../../../public/Plate.png';
import forkImg from './../../../../public/Fork.png';
import knifeImg from './../../../../public/Knife.png';

const Splash: FC = () => {
  const pos = [
    { x: 1685, y: 505 },
    { x: -131, y: 12 },
    { x: 1300, y: -41 },
    { x: 688, y: 733 },
    { x: -16, y: 209 },
    { x: 1730, y: -11 },
    { x: 1549, y: 2 },
    { x: -72, y: 448 },
    { x: 1541, y: 240 },
    { x: 239, y: 2 },
    { x: 1474, y: -20 },
    { x: -114, y: 721 },
    { x: 493, y: 734 },
    { x: 348, y: -71 },
    { x: 1467, y: 147 },
    { x: 1196, y: 497 },
    { x: 81, y: 713 },
    { x: 1100, y: 22 },
    { x: 1032, y: -19 },
    { x: 1209, y: 230 },
    { x: 1551, y: 664 },
    { x: 60, y: -7 },
    { x: 388, y: 799 },
    { x: 922, y: 744 },
    { x: 1379, y: 383 },
    { x: 81, y: 153 },
    { x: 1382, y: 727 },
    { x: 1100, y: 723 },
    { x: 1736, y: 709 },
    { x: 512, y: -28 },
    { x: 723, y: -26 },
    { x: 1703, y: 240 },
    { x: 841, y: -20 },
    { x: 1293, y: 788 },
    { x: 189, y: 298 },
    { x: 1560, y: 454 },
    { x: 384, y: 180 },
    { x: 265, y: 533 },
    { x: 72, y: 419 },
    { x: 510, y: 219 },
    { x: 1441, y: 634 },
    { x: 563, y: 639 },
    { x: 775, y: 742 },
    { x: 213, y: 709 },
    { x: 402, y: 518 },
  ];

  return (
    <div id='splash'>
      <div>
        {pos.map((p, i) => (
          <img src={`/odds/oDD ${i + 1}.png`} className='absolute hover:animate-[small-bounce_2s_ease-in-out_infinite] hover:drop-shadow-[0_15px_15px_rgba(255,255,255,1)]' style={{ left: p.x, top: p.y }} />
        ))}
      </div>
      <div className='flex justify-center items-center gap-[3%]'>
        <div className='hover:animate-[flip_4s_ease-in-out_infinite] hover:drop-shadow-[0_15px_15px_rgba(255,255,255,1)]'>
          <Image src={forkImg} />
        </div>
        <div className='hover:animate-[zoom_2s_ease-in-out_infinite] hover:drop-shadow-[0_15px_15px_rgba(255,255,255,1)]'>
          <Image src={plateImg} />
        </div>
        <div className='hover:animate-[flip_4s_ease-in-out_infinite] hover:drop-shadow-[0_15px_15px_rgba(255,255,255,1)]'>
          <Image src={knifeImg} />
        </div>
      </div>
    </div>
  )
}

export default Splash;