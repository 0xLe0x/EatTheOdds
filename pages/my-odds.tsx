import type { NextPage } from 'next';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useState, useEffect } from 'react';

const MyOdds: NextPage = () => {
  const { address } = useAccount();
  const [odds, setOdds] = useState([]);

  const getOddsList = async(address: string | undefined) => {
    // TODO get a list of the odds this wallet owns
    if(!address) return

    const response = await fetch(`${process.env.API_URL}/api/tokens/by-owner/${address}`);  
    setOdds([])
  }

  useEffect(() => {
    getOddsList(address);
  }, []);

  return (
    <div className='justify-center text-center'>
      {/* <div className='flex justify-center'>
        <ConnectButton />
      </div> */}
      <div className="container mx-auto text-white">
        
        <h1 className="text-3xl">My Odds</h1>
        <div>
          <p>
            List of my odds. Are the ghosts? Rarity score. Images. Join Snacking queue.
            Did they win?
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyOdds;
