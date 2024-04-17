import React from "react";
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";

const Button = () => {

  const myLink = "https://drive.google.com/drive/folders/1H_QF-o-vYrW3Hs_6g1wZm9-XtgZANFx6?usp=sharing";
  function handleClick(url: string) {
    window.open(url, '_blank');
  }
  

  return (
    <button type="button" onClick={() => handleClick(myLink)} className={clsx("group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50  px-4 py-2 font-bold transition-transform ease-out  hover:scale-105")}
    >
      <span
        className={clsx(
          "absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
        )}
      />
      <span className="relative flex items-center justify-center gap-2 text-slate-900">
        Resume {<MdArrowOutward className="inline-block" />}
      </span>
    </button>
  );
};

export default Button;

