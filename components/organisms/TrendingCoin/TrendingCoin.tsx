import React from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

function TrendingCoin({ children }: Props) {
  return (
    <div className="flex bg-baseVeryLight rounded-xl py-xs px-sm text">
      <div>
        <p className="text-font">{children}</p>
      </div>
    </div>
  );
}

export default TrendingCoin;
