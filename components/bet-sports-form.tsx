import type { NextPage } from "next";
import Property1YellowV2Default from "./property1-yellow-v2-default";

const BetSportsForm: NextPage = () => {
  return (
    <div className=" relative  md:block  lg:flex flex-row items-start justify-start gap-[18px] text-left text-49xl text-gold-100 font-fjalla-one">
      <div className="flex-1 mb-[26px] relative rounded-3xl h-[319px] overflow-hidden bg-[url(/header-images1@3x.png)] bg-cover bg-no-repeat bg-[top]">
        <img
          className="absolute h-full w-[57.6%] top-[0%] right-[0%] bottom-[0%] left-[42.4%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/symbol1.svg"
        />
        <img
          className="absolute top-[calc(50%_-_90.5px)] left-[calc(50%_+_97.5px)] w-[181px] h-[181px] overflow-hidden"
          alt=""
          src="/soccerball-1-1.svg"
        />
        <div className="absolute top-[calc(50%_-_99.5px)] left-[55px] flex flex-col items-start justify-start gap-[8px]">
          <div className="relative tracking-[-0.02em] leading-[70px]">
            <p className="m-0">BET</p>
            <p className="m-0 text-primary-contrast">SPORTS</p>
          </div>
          <Property1YellowV2Default
            lOGIN="EXPLORE MATCHES"
            property1YellowV2DefaultPosition="unset"
            property1YellowV2DefaultBorderRadius="12px"
          />
        </div>
      </div>
      <div className="flex-1 mb-[26px] relative rounded-3xl h-[319px] overflow-hidden bg-[url(/header-images2@3x.png)] bg-cover bg-no-repeat bg-[top]">
        <img
          className="absolute h-full w-[57.6%] top-[0%] right-[0%] bottom-[0%] left-[42.4%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/symbol2.svg"
        />
        <div className="absolute top-[calc(50%_-_99.5px)] left-[55px] flex flex-col items-start justify-start gap-[8px]">
          <div className="relative tracking-[-0.02em] leading-[70px]">
            <p className="m-0">PLAY</p>
            <p className="m-0 text-primary-contrast">CASINO</p>
          </div>
          <Property1YellowV2Default
            lOGIN="EXPLORE GAMES"
            property1YellowV2DefaultPosition="unset"
            property1YellowV2DefaultBorderRadius="12px"
          />
        </div>
        <img
          className="absolute top-[calc(50%_-_90.5px)] left-[390px] w-[181px] h-[181px] overflow-hidden"
          alt=""
          src="/soccerball-1-2.svg"
        />
      </div>
    </div>
  );
};

export default BetSportsForm;
