import type { NextPage } from "next";

type FormContainerType = {
  league?:string;
  odds?:object;
  teams?:[string];
 onAdd?:any
  index?:number
};

const Match: NextPage<FormContainerType> = ({
  league,odds,teams,onAdd,index
  
}) => {
  return (
    <div className="self-stretch overflow-hidden flex flex-row items-start justify-center text-left text-smi text-black font-primary-texts-roboto-regular-14">
      <div className="flex-1 rounded-3xl  bg-whitesmoke overflow-hidden flex flex-col md:flex-row  lg:flex-row  p-6 items-center justify-start gap-[16px]">
      <div className="flex flex-grow gap-[10px] flex-row">
        <div className="flex flex-col items-start justify-start w-[120px] lg:w-[240px]">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/soccer.svg"
              />
              <div className="relative uppercase">
                
                <p className="m-0">{league} </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex flex-row items-center  text-sm font-fjalla-one">
        
            
              <div className="relative leading-[20px] w-[80px] lg:w-[120px] ">{teams&&teams[0]} </div>
           
         
          <div className="rounded me-[40px] bg-nesine-main-yellow w-6 h-6 flex flex-row items-center justify-center text-smi">
          
              vs
           
          </div>
          <div className="flex flex-row items-center justify-start">
           
                <div className="relative leading-[20px]">
                { teams&&teams[1]}
               
            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px] text-xs text-lightsteelblue">
          <div className="rounded-lg bg-nesine-main-yellow w-[86px] h-[60px] overflow-hidden shrink-0 flex flex-col py-3 px-4 box-border items-center justify-between relative text-gray">
            <b className="relative leading-[16px] z-[0]">1</b>
            <b className="relative text-smi leading-[18px] z-[1]">{odds?.home_team}</b>
       
          </div>
          <div className="rounded-lg bg-black box-border w-[86px] h-[60px] overflow-hidden shrink-0 flex flex-col py-3 px-4 items-center justify-between relative border-[1px] border-solid border-black">
            <b className="relative leading-[16px] z-[0]">draw</b>
            <b className="relative text-smi leading-[18px] text-aliceblue z-[1]">
              {odds?.draw}
            </b>
            {/* {!polygonIcon2 && (
              <img
                className="absolute my-0 mx-[!important] top-[calc(50%_-_24px)] left-[calc(50%_+_28px)] w-[9px] h-[7.79px] hidden z-[2]"
                alt=""
                src="/polygon-3.svg"
              />
            )}
            {!polygonIcon3 && (
              <img
                className="absolute my-0 mx-[!important] top-[calc(50%_+_24px)] left-[calc(50%_+_28px)] w-[9px] h-[7.79px] hidden z-[3]"
                alt=""
                src="/polygon-4.svg"
              />
            )} */}
          </div>
          <div className="rounded-lg bg-black box-border w-[86px] h-[60px] overflow-hidden shrink-0 flex flex-col py-3 px-4 items-center justify-between relative border-[1px] border-solid border-black">
            <b className="relative leading-[16px] z-[0]">2</b>
            <b className="relative text-smi leading-[18px] text-aliceblue z-[1]">
             {odds?.away_team}
            </b>
            {/* {!polygonIcon4 && (
              <img
                className="absolute my-0 mx-[!important] top-[calc(50%_-_24px)] left-[calc(50%_+_28px)] w-[9px] h-[7.79px] hidden z-[2]"
                alt=""
                src="/polygon-3.svg"
              />
            )}
            {!polygonIcon5 && (
              <img
                className="absolute my-0 mx-[!important] top-[calc(50%_+_24px)] left-[calc(50%_+_28px)] w-[9px] h-[7.79px] hidden z-[3]"
                alt=""
                src="/polygon-4.svg"
              />
            )} */}
          </div>
          <div onClick={()=>onAdd({league,odds,teams})} className="rounded-lg bg-black box-border w-[86px] h-[60px] overflow-hidden shrink-0 flex flex-col py-3 px-4 items-center justify-between relative border-[1px] border-solid border-black">
            <b className="relative leading-[16px] z-[0]" >+</b>
            <b className="relative text-smi leading-[18px] text-nesine-main-yellow z-[1]">
              
            </b>
            {/* {!polygonIcon6 && (
              <img
                className="absolute my-0 mx-[!important] top-[calc(50%_-_24px)] left-[calc(50%_+_28px)] w-[9px] h-[7.79px] hidden z-[2]"
                alt=""
                src="/polygon-3.svg"
              />
            )}
            {!polygonIcon7 && (
              <img
                className="absolute my-0 mx-[!important] top-[calc(50%_+_24px)] left-[calc(50%_+_28px)] w-[9px] h-[7.79px] hidden z-[3]"
                alt=""
                src="/polygon-4.svg"
              />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
