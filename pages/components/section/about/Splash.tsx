import type { FC } from 'react';
import { useState, useEffect } from 'react'
import Image from 'next/image';
import { useWindowSize } from 'usehooks-ts';
import plateImg from '@/public/Plate.gif';
import forkImg from '@/public/Fork.png';
import knifeImg from '@/public/Knife.png';

const Splash: FC = () => {
  const size = [
    { w: 338, h: 385 },
    { w: 390, h: 389 },
    { w: 311, h: 380 },
    { w: 319, h: 358 },
    { w: 220, h: 393 },
    { w: 340, h: 356 },
    { w: 401, h: 349 },
    { w: 288, h: 371 },
    { w: 386, h: 359 },
    { w: 271, h: 349 },
    { w: 318, h: 328 },
    { w: 334, h: 383 },
    { w: 395, h: 381 },
    { w: 389, h: 372 },
    { w: 199, h: 345 },
    { w: 391, h: 390 },
    { w: 264, h: 346 },
    { w: 388, h: 392 },
    { w: 220, h: 395 },
    { w: 365, h: 379 },
    { w: 334, h: 392 },
    { w: 302, h: 353 },
    { w: 319, h: 349 },
    { w: 390, h: 360 },
    { w: 308, h: 374 },
    { w: 326, h: 356 },
    { w: 395, h: 365 },
    { w: 289, h: 388 },
    { w: 265, h: 391 },
    { w: 350, h: 387 },
    { w: 206, h: 352 },
    { w: 348, h: 381 },
    { w: 291, h: 355 },
    { w: 242, h: 347 },
    { w: 388, h: 356 },
    { w: 262, h: 346 },
    { w: 257, h: 392 },
    { w: 224, h: 380 },
    { w: 278, h: 376 },
    { w: 318, h: 375 },
    { w: 217, h: 370 },
    { w: 263, h: 334 },
    { w: 393, h: 365 },
    { w: 327, h: 379 },
    { w: 258, h: 351 },
  ]

  const pos = [
    { x: 1685, y: 505 },
    { x: -131, y: 12 },
    { x: 1300, y: -41 },
    { x: 688, y: 773 },
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

  const windowSize = useWindowSize();
  const pos_percent = pos.map(p => {
    return { x: p.x / 1920 * windowSize.width, y: (p.y - 108) / 1920 * windowSize.width }
  })
  const size_percent = size.map(s => {
    return { w: s.w / 1920 * windowSize.width, h: s.h / 1920 * windowSize.width }
  })

  return (
    <div id='splash' className='relative' style={{ height: Math.floor(1080 / 1920 * windowSize.width) }}>
      <div>
        {pos_percent.map((p, i) => (
          <img
            src={`/odds/oDD ${i + 1}.png`}
            className='absolute hover:animate-[small-bounce_0.1s_ease-in-out_infinite]'
            style={{ left: p.x, top: p.y, width: size_percent[i].w }}
            key={`odd-${i}`}
          />
        ))}
      </div>
      <div className='absolute' style={{ left: 406 / 1920 * windowSize.width, top: (388 - 108) / 1920 * windowSize.width }}>
        <Image src={forkImg} width={`${forkImg.width / 1920 * windowSize.width}`} height={`${forkImg.height / 1920 * windowSize.width}`} />
      </div>
      <div className='absolute' style={{ left: 575 / 1920 * windowSize.width, top: (191 - 108) / 1920 * windowSize.width }}>
        <img src='Plate.gif' width={`${plateImg.width / 1920 * windowSize.width}`} height={`${plateImg.height / 1920 * windowSize.width}`} />
      </div>
      <div className='absolute' style={{ left: 1411 / 1920 * windowSize.width, top: (387 - 108) / 1920 * windowSize.width }}>
        <Image src={knifeImg} width={`${knifeImg.width / 1920 * windowSize.width}`} height={`${knifeImg.height / 1920 * windowSize.width}`} />
      </div>
    </div>
  )
}

export default Splash;