import React from 'react'
import { GiPlayButton } from 'react-icons/gi';

export const BackCard = ({cvv,setClicked}) => {
    return (
      <div className="grid grid-rows-5 xl:w-1/2 w-full h-52 border-[1px] border-black rounded-xl bg-slate-500">
        <div className="row-span-2 w-full rounded bg-black my-5 flex items-center justify-end p-5">
          <GiPlayButton
            className="text-2xl text-white cursor-pointer"
            onClick={() => setClicked(false)}
          />
        </div>
        <div className="row-span-1 w-3/4 flex items-center justify-end p-5 px-10 bg-white ">
          {cvv === "" ? "CVV" : cvv}
        </div>
      </div>
    );
  };