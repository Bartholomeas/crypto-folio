/* eslint-disable react/button-has-type */
import React from "react";

interface Props {
  onClickFn: () => void;
  arrowDirection: boolean;
}

function ArrowButton({ onClickFn, arrowDirection }: Props) {
  return (
    <button
      onClick={onClickFn}
      className={`absolute w-[45px] h-[45px] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-accent rounded-full text-white text-lg font-bold rotate-[90deg]
			${arrowDirection ? "rotate-[-90deg]" : "rotate-[90deg]"} ${
        arrowDirection ? "md:rotate-[180deg]" : "md:rotate-0"
      } md:top-[50%] md:left-[0] xxl:hidden`}
    >
      {"<"}
    </button>
  );
}

export default ArrowButton;
