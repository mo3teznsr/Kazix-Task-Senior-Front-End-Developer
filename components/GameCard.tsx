import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type FormCardHoverType = {
  iMG?: string;
  title?: string;
  iconButtonSmall?: boolean;
  provider?:string;
  /** Style props */
  propOpacity?: Property.Opacity;
};

const GameCard: NextPage<FormCardHoverType> = ({
  iMG,
  title,
  iconButtonSmall,
  propOpacity,
  provider

}) => {
  const gameCardHoverStyle: CSS.Properties = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  return (
    <div
      className="relative cursor-pointer rounded-lg w-[181px] h-[250px] overflow-hidden shrink-0 text-left text-lg text-primary-contrast font-fjalla-one"
      style={gameCardHoverStyle}
    >
      <img
        className="absolute top-[calc(50%_-_125px)] left-[calc(50%_-_90.5px)] w-[181px] h-[250px] overflow-hidden object-cover"
        alt=""
        src={iMG}
      />
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(0deg,_#000,_rgba(23,_54,_58,_0.29))] flex flex-col p-4 box-border items-start justify-start gap-[24px]">
        <div className="flex flex-col items-start justify-start gap-[2px]">
          <div className="relative">{title}</div>
          <div className="relative text-3xs">{provider} </div>
        </div>
        {!iconButtonSmall && (
          <div className="rounded-xl bg-primary-2 w-8 h-8 hidden flex-row p-2 box-border items-start justify-start">
            <img className="relative w-4 h-4" alt="" src="/uiicon.svg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;
