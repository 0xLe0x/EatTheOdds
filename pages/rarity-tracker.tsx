import type { NextPage } from 'next';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState, useEffect } from "react"
import { useRouter } from 'next/router';
import { paramCase, capitalCase } from 'change-case';
import Image from 'next/image';

const RarityTracker: NextPage = () => {
  const [metadata, setMetadata] = useState(null as any);
  const [selectedTokenId, setSelectedTokenId] = useState(0);
  const [selectedTrait, setSelectedTrait] = useState("skin");
  const [livingOdds, setLivingOdds] = useState([] as any);
  const [gameState, setGameState] = useState(null as any);
  const getMetadata = async (tokenId: number) => {
    const json = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tokens/metadata/${tokenId}`).then(res => res.json());
    return json
  }

  const getGameState = async () => {
    const json = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/game-state`).then(res => res.json());
    return json?.data?.attributes
  }

  const getLivingOdds = async (limit: number = 10) => {
    const json = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tokens/living/by-rarity`).then(res => res.json());
    if (Array.isArray(json)) return json.slice(0, limit)
    return []
  }

  const changeTokenId = async (e: any) => {
    setSelectedTokenId(e.target.value)
    const json = await getMetadata(e.target.value)
    setMetadata(json)
  }

  useEffect(() => {
    changeTokenId({ target: { value: 0 } })
    getGameState().then((json) => {
      setGameState(json)
    })
    getLivingOdds().then((odds: object[]) => {
      setLivingOdds(odds)
    })
  }, []);

  const traitButtons = [ "Skin", "Neck", "Mouth", "Eyes", "Nose", "Head", "Ears" ]

  return (
    <div className='justify-center text-center relative z-10'>
      {/* <div className='flex justify-center'>
        <ConnectButton />
      </div> */}
      <div className="w-[80vw] mx-auto text-white relative lg:text-[1vw] z-50">
        <img className="hidden lg:block absolute z-40 top-[-2vw] left-0 w-full" src="/rarity-tracker/screen.png" />
        <div className="relative lg:top-[5.5vw] z-50">

          <h1 className="text-[2vw] uppercase bold">Rarity Tracker</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 my-[2vw] lg:w-[70vw] lg:h-[18vw] mx-auto gap-4">
            <div className="text-left">
              <h2 className="lg:text-[1.6vw] uppercase">Trait</h2>
              <ul>
                {gameState?.traitNamesByType?.[selectedTrait]?.map((name: string, i: number) => {
                  return (<li key={`trait-rarity-${i}`}>{capitalCase(name)} ... {gameState?.traitCounts?.[name]}</li>)
                }).slice(0, 10)}
              </ul>
            </div>
            <div className="text-left">
              <div className=" grid grid-cols-2">
                <div className="text-[1.6vw] uppercase">
                  Search
                </div>
                <div>
                  <input type="text" className="bg-white rounded-sm p-1 text-black text-[1.2vw] w-[8vw]" onChange={changeTokenId} />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <h3 className="mb-[1vw]">Rarity score: {metadata?.rarityScore}</h3>
                  <ul>
                    {metadata?.attributes?.map((attr: any, i: number) => {
                      return (<li key={`attr-${i}`}>{attr.trait_value}... {gameState?.traitCounts?.[paramCase(attr.trait_value)]}</li>)
                    }).slice(0, 8)}
                  </ul>
                </div>
                <div>
                  <h2 className="text-[1vw] mb-[1vw] text-right">Odd #{selectedTokenId}</h2>
                  <iframe src={`${process.env.NEXT_PUBLIC_VIEWER_URL}/${selectedTokenId}`} className="w-full h-full lg:h-[11vw] lg:w-[11vw]"></iframe>
                </div>
              </div>
            </div>
            <div className="text-left">
              <h2 className="text-[1.6vw] uppercase">Leaderboard</h2>
              <ul>
                {Array.isArray(livingOdds) && livingOdds.map((odd: any, i: number) => {
                  return (<li key={`top-tokens-${i}`}>{i + 1}) oDD # {odd.tokenId}... {odd.rarityScore}</li>)
                })}
              </ul>
            </div>

          </div>
          <div className="grid grid-cols-7 gap-1">
            {traitButtons.map((trait, i) => (
              <button key={`trait-button-${i}`} onClick={() => {
                setSelectedTrait(paramCase(trait)) }}
                className="rounded-md text-fuchsia-600 uppercase relative"
              >
                <img src="/rarity-tracker/trait-button-background.png" className="w-full absolute" />
                <div className="relative z-20 top-[1vw]"> {trait} </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto w-[80vw] relative z-30 top-[31vw]">
        <div className="grid grid-cols-3 relative text-white">
          <div className="relative">
            <img src="/rarity-tracker/counter-box.png" className="absolute w-full top-0 left-0" />
            <h2 className="text-[1.6vw] top-[6vw] uppercase relative z-10">Chowtime: 00:00:00</h2>
          </div>
          <div className="relative">
            <img src="/rarity-tracker/counter-box.png" className="absolute w-full top-0 left-0" />
            <h2 className="text-[1.6vw] top-[6vw] uppercase relative z-10">Calendaargh: Day {gameState?.currentRound}</h2>
          </div>
          <div className="relative">
            <img src="/rarity-tracker/counter-box.png" className="absolute w-full top-0 left-0" />
            <h2 className="text-[1.6vw] top-[6vw] uppercase relative z-10">Total Active Odds: {gameState?.oddsRemaining}</h2>
          </div>
        </div>
      </div>
      <img src="/rarity-tracker/display-case.png" className="absolute z-40 w-full top-[31vw]" />

      </div>
  );
};

export default RarityTracker;
