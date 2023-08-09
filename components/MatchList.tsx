'use client';
import type { NextPage } from "next";
import Match from "./Match";
import {matches} from "../data/match-list.json"
import { useState } from "react";
import moment from "moment";
const MatchList: NextPage = () => {
  const [betList,setBet]=useState([])
  const [userBet,setUserBet]=useState(0)
  const pageLength=5
  const max=matches.length%pageLength
  const [openBet,setOpenBet]=useState(false)

  const betOptions=[5,10,50]

  const back=()=>{
    console.log('back')
    if(page==0){
      return;
    }
    setPage(page-1)
  }

  const next=()=>{
    console.log('next')
    if(page>max){
      return;
    }
    setPage(page+1)
  }

  

const possibleWin=()=>{
  let win=0
  for(let i=0;i<betList.length;i++)
  {
    win=(userBet*betList[i]?.odds.home_team)
  }

  return Math.round(win)
}

  const addBet=(match:any)=>{
  
    
      setBet([...betList,{...match,dateTime:new Date()}])
   
  }

  const removeAll=()=>{
    setBet([])
    setUserBet(0)
  }

  const removeBet=(index:number)=>{
   const newList=betList.filter((item,i)=>i!=index)
    setBet(newList)
    if(newList.length==0)
    {
      setUserBet(0)
    }
  }
 

  const [page,setPage]=useState(0)
  console.log(pageLength*page,((page+1)*pageLength-1))
  return (
    <div className="relative  rounded-lg bg-primary-contrast lg:w-[1024px] md:w-auto flex flex-col items-center justify-start gap-[10px] text-left text-xl text-primary-contrast font-fjalla-one">
      <div className="self-stretch rounded-t-lg rounded-b-none bg-black overflow-hidden flex flex-row py-3 px-4 items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img className="relative w-6 h-[25px]" alt="" src="/dot.svg" />
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[28px]"> TODAY MATCHES</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[18px] text-base text-black">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img onClick={back}
              className="relative cursor-pointer w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/chevrons.svg"
            />
            <img onClick={next}
              className="relative cursor-pointer w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/chevrons1.svg"
            />
          </div>
          <div className="rounded-lg cursor-pointer bg-primary-contrast flex flex-row py-1 px-2.5 items-start justify-start">
            <div className="relative leading-[28px]">View All</div>
          </div>
        </div>
      </div>
    {matches.slice(pageLength*page,(page+1)*pageLength-1).map((match,index)=> <Match key={index}
    onAdd={addBet}
    index={index}
      {...match}
    />)}
     <div 
    
     className=" z-10 bottom-[0px] cursor-pointer right-[10px] fixed rounded-t-lg rounded-b-none bg-black w-[304px] overflow-hidden flex flex-col py-3 px-4 box-border items-center justify-center">
        <div className="flex flex-row items-center w-full justify-start gap-[8px]"  onClick={()=>setOpenBet(!openBet)}>
          <img className="relative w-6 h-[25px]" alt="" src="/dot.svg" />
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[28px]">BET SLIP ({betList.length==0?'Empty':betList.length})</div>
          </div>
        
        </div>

        <div className={openBet? ``:` hidden`}>
        {betList.length==0&& <div className="w-[304px] flex flex-row py-[54px]  px-2.5 box-border items-center justify-center text-base text-gray-500">
          <div className="relative leading-[18px]">Your betslip is empty</div>
        </div>}


        {betList.length>0&&<div className="text-[12px]">

          <div className="rounded bg-gray-400 w-[304px] flex flex-row py-2.5 px-3 box-border items-center justify-between">
          <div className="relative z-[1]">Single</div>
          <div className="relative [text-decoration:underline] text-gray-300 z-[0]" onClick={removeAll}>
            Remove All
          </div>
        </div>
        {betList.map((item:any,index)=> <div key={index} className="rounded bg-gray-1200 w-[304px] flex flex-col py-1.5 px-0 box-border items-center justify-center gap-[14px] text-2xs text-gray-500">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="w-72 flex flex-row items-start justify-between">
              <div className="relative leading-[16px]">
                <p className="m-0">{item.teams[0]}</p>
                <p className="m-0">{item.teams[1]}</p>
              </div>
              <img
              onClick={()=>removeBet(index)}
                className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                alt=""
                src="/close.svg"
              />
            </div>
            <div className="relative leading-[16px] text-gray-600">
               {moment(item.dateTime).format("DD.MM.YYYY HH:MM a")}
            </div>
            <div className="relative text-xs leading-[14px] text-gray-700">
              Match Result
            </div>
            <div className="w-72 flex flex-row items-start justify-between text-xs text-gray-900">
              <div className="relative">{item.teams[0]}</div>
              <div className="relative leading-[14px] text-[#ECCC22]">{item.odds.home_team}</div>
            </div>
          </div>
          
        </div>)}
        <div className="flex flex-col justify-start align-middle gap[10px] px-1 gap-[14px] mb-2">
        <div className="rounded bg-[#313131] box-border  overflow-hidden flex flex-row py-2.5 px-3 items-start justify-start text-sm text-gray-1100 border-[1px] border-solid border-gray-800">
            <div className="relative">Enter stake  {userBet}</div>
          </div>
          <div className=" flex flex-row items-start justify-between text-xs text-gray-900">
            <div className="relative">Possible win:</div>
            <div className="relative leading-[14px] text-[#ECCC22]">{`$${possibleWin()} `}</div>
          </div>
          </div>
          </div>}


        <div className="rounded bg-[#AA7F0033] flex flex-row py-1.5 px-2.5 box-border items-center justify-start gap-[5px] text-left  text-[11px] text-gray-1000">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/warning-sign.svg"
          />
          <div className="relative leading-[16px]">
            To place your bet, please
          </div>
          <div className="relative [text-decoration:underline] leading-[16px]">
            Sign in
          </div>
          <div className="relative [text-decoration:underline] leading-[16px]">
            or
          </div>
          <div className="relative [text-decoration:underline] leading-[16px]">
            Register
          </div>
        </div>
        <div className="rounded bg-gray-1300 w-[304px] flex flex-col py-2.5 px-2 box-border items-center justify-center text-sm text-gray-1100">
          <div className="flex flex-row items-start justify-start gap-[2px]">
           {betOptions.map(item=> <div key={item} onClick={()=>setUserBet(betList.length>0? item:0)}
           className={`rounded ${userBet==item?"bg-[#ECCC22] text-[#000000]":"bg-[#262626]"} w-20 overflow-hidden shrink-0 flex flex-row items-center justify-center`}>
              <div className="relative leading-[36px]">{item}</div>
            </div>)}
           
            <div className="rounded bg-gray-1200 flex flex-row py-1.5 px-[9px] items-start justify-start">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/edit.svg"
              />
            </div>
            
          </div>
          <div className="rounded flex w-full flex-col p-2.5 items-center justify-center text-xs text-gray-200">
          <div className={`rounded ${userBet>0?"bg-[#ECCC22] text-[#000000]": "bg-[#262626]"} w-full  flex-grow overflow-hidden flex flex-row py-[11px] px-0 box-border items-center justify-center `}>
            <div className="relative uppercase ">Bet Now</div>
          </div>
        </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default MatchList;
