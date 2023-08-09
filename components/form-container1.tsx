import type { NextPage } from "next";
import Property1YellowV2Default from "./property1-yellow-v2-default";

const FormContainer1: NextPage = () => {
  return (
    <>
    <div className="w-full relative  overflow-hidden mb-[18px] h-[319px] bg-slate-400 rounded-3xl">
    <img src="/HeaderImage.svg" className=" absolute h-[319px] object-cover top-0 left-0 right-0 bottom-0 z-0 w-full" />
      <div className="flex text-49xl justify-between  px-[55px] mb-[18px] ">
       
     
      <div className=" flex relative z-1 flex-col py-[40px] items-start justify-start gap-[8px]">
        <div className="relative tracking-[-0.02em] leading-[69px] inline-block lg:w-[413px] md:w-auto">
          <p className="m-0 text-gold-100">€200</p>
          <p className="m-0 text-primary-contrast">WELCOME BONUS</p>
        </div>
        <div className="relative text-base leading-[34px] font-instrument-sans text-primary-contrast">{`Receive a bonus up to €200 & 40 free rounds.`}</div>
        <Property1YellowV2Default
          lOGIN="REGISTER"
          property1YellowV2DefaultPosition="unset"
          property1YellowV2DefaultBorderRadius="12px"
        />
      </div>
  
      </div>
   
    </div>
   
    </>
  );
};

export default FormContainer1;
