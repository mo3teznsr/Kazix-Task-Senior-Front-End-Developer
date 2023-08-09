'use client';
import type { NextPage } from "next";
import GameCard from "./GameCard";
import React, { useEffect, useRef, useState } from "react";

import  games  from '../data/games-list.json'
const GamesList: NextPage = () => {


 

  const move=(scroll:number)=>{
    containerRef.current? containerRef.current.scrollLeft+=scroll:null
  }

  const containerRef=useRef<HTMLInputElement>(null)
  return (
    <div className="relative  rounded-lg lg:w-[1024px] md:w-auto bg-primary-contrast h-[336px] flex flex-col items-start justify-start gap-[10px] text-left text-xl text-primary-contrast font-fjalla-one">
      <div className="self-stretch rounded-t-lg rounded-b-none bg-black overflow-hidden flex flex-row py-3 px-4 items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img className="relative w-6 h-[25px]" alt="" src="/dot.svg" />
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[28px]">POPULAR SLOTS</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[18px] text-base text-black">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img onClick={()=>move(-680)}
              className="relative cursor-pointer w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/chevrons.svg"
            />
            <img onClick={()=>move(680)}
              className="relative cursor-pointer w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/chevrons1.svg"
            />
          </div>
          <div className="rounded-lg bg-primary-contrast flex flex-row py-1 px-2.5 items-start justify-start">
            <div className="relative leading-[28px] cursor-pointer">View All</div>
          </div>
        </div>
      </div>
      <div ref={containerRef} className="self-stretch scroll-smooth   overflow-x-auto flex flex-row py-0 px-[18px] items-start justify-start gap-[16px] text-lg">
       {games.map(({id,identifier,title,provider})=> <GameCard
       key={id}
          iMG={`https://cdn.softswiss.net/i/s3/${identifier}.png`}
          title={title}
          provider={provider}
          iconButtonSmall={false}
          propOpacity="unset"
        />)}
       
      </div>
    </div>
  );
};

export default GamesList;
