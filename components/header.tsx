'use client';
import type { NextPage } from "next";
import { useState } from "react";

const Header: NextPage = () => {

  const [showDropdown,setShowDropdown]=useState(false)
  return (
    <>
    <div className="fixed top-[0px]  left-[0px] right-0 z-10 flex flex-col items-start justify-end text-left text-base text-black font-fjalla-one">
      <div onClick={()=>setShowDropdown(!showDropdown)} className="self-stretch bg-gold-200 flex flex-row flex-grow py-3 lg:px-[120px] items-center  justify-end">
        <img
          className="relative w-[120.14px] h-[43.05px] hidden"
          alt=""
          src="/group-48095368.svg"
        />
        <div className="flex relative flex-row items-center  justify-start gap-[12px]">
          <div className="flex cursor-pointer flex-row p-2 items-center justify-start gap-[12px] text-sm font-primary-texts-roboto-regular-14">
            <img className="relative w-7 h-5" alt="" src="/flags.svg" />
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="relative leading-[16px]">ENG</div>
              <img
                className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                alt=""
                src="/chevron-arrows-icons.svg"
              />
            </div>
          {showDropdown&& <div className="absolute top-[66px]  bg-primary-contrast shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col p-4 items-start justify-start gap-[16px] text-sm text-black font-primary-texts-roboto-regular-14">
      <div className="relative w-[88px] h-5">
        <div className="absolute top-[2px] left-[40px] w-12 h-4 flex flex-row items-center justify-start">
          <div className="relative leading-[16px]">ENG</div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-7 h-5"
          alt=""
          src="/flags.svg"
        />
      </div>
      <div className="relative w-[88px] h-5">
        <div className="absolute top-[2px] left-[40px] w-12 h-4 flex flex-row items-center justify-start">
          <div className="relative leading-[16px]">ENG</div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-7 h-5"
          alt=""
          src="/flags.svg"
        />
      </div>
    </div>}
          </div>
          <div className="rounded-xl cursor-pointer bg-primary-contrast flex flex-row p-3 items-center justify-center text-main-color">
            <div className="relative leading-[28px]">LOG IN</div>
          </div>
          <div className="rounded-xl cursor-pointer bg-darkslategray flex flex-row p-3 items-center justify-center gap-[8px] text-primary-contrast">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/users.svg"
            />
            <div className="relative leading-[28px]">REGISTER</div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Header;
