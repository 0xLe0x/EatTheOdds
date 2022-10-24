import type { NextPage } from 'next';
import { useAccount, useContractRead } from 'wagmi';
import { useState, useEffect } from 'react';
import deployments from '../contracts/deployments.json';
import abi from '../abi/EatTheOdds.json';

const MyOdds: NextPage = () => {

  const { address } = useAccount();
  const [odds, setOdds] = useState([]);

  const contractAddress = deployments['goerli']?.address as string;

  const { data: contractOwner, isError, isLoading, isFetched } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: abi,
    functionName: 'owner',
    chainId: 5,
    onSuccess(data){
      console.log('success', data)
    },
    onError(error){
      console.log('error', error)
    }
  });

  const getOddsList = async(address: string | undefined) => {
    // TODO get a list of the odds this wallet owns
    if(!address) return

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tokens/by-owner/${address}`);  
    setOdds([])
  }

  useEffect(() => {
    // getOddsList(address);
  }, []);

  return (
    <div className='justify-center text-center'>
      <div className="container mx-auto text-white">
        
        <h1 className="text-3xl">My Odds</h1>
        <div>
          <p>
            List of my odds. Are the ghosts? Rarity score. Images. Join Snacking queue.
            Did they win?
          </p>
          <p>test reading contract data: {contractOwner}</p>
        </div>
      </div>
    </div>
  );
};

export default MyOdds;
