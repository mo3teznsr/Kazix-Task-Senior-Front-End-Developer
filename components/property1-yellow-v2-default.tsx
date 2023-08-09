import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type Property1YellowV2DefaultType = {
  lOGIN?: string;

  /** Style props */
  property1YellowV2DefaultPosition?: Property.Position;
  property1YellowV2DefaultBorderRadius?: Property.BorderRadius;
};

const Property1YellowV2Default: NextPage<Property1YellowV2DefaultType> = ({
  lOGIN,
  property1YellowV2DefaultPosition,
  property1YellowV2DefaultBorderRadius,
}) => {
  const property1YellowV2DefaultStyle: CSS.Properties = useMemo(() => {
    return {
      position: property1YellowV2DefaultPosition,
      borderRadius: property1YellowV2DefaultBorderRadius,
    };
  }, [property1YellowV2DefaultPosition, property1YellowV2DefaultBorderRadius]);

  return (
    <div
      className="relative cursor-pointer rounded-lg bg-nesine-main-yellow flex flex-row p-3 items-center justify-center text-left text-base text-main-color font-fjalla-one"
      style={property1YellowV2DefaultStyle}
    >
      <div className="relative leading-[28px]">{lOGIN}</div>
    </div>
  );
};

export default Property1YellowV2Default;
