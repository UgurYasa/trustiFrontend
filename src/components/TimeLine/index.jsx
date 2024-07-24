import React from 'react'
import { TIMELINE } from '../../constants/SecondStep'

export default function TimeLine() {
    const Dot = ({ item }) => {
        return (
          <div
            className={`xl:w-12 xl:h-12 w-10 h-10 rounded-full border-[1px] flex items-center justify-center cursor-pointer ${
              item.active ? "border-[#EB1C74] " : "border-slate-400"
            }`}
          >
            <div
              className={`xl:w-5 xl:h-5 h-3 w-3 rounded-full border-[1px] ${
                item.active ? "bg-[#EB1C74]" : "bg-slate-400"
              } ${!item.active && "hover:bg-slate-600"}`}
            />
          </div>
        );
      };
      const TimeStep = ({ item }) => {
        return (
          <div className="flex flex-col">
            <p className={` text-sm self-start my-3 ${item.active?"text-[#EB1C74]":"text-slate-400"} max-xl:hidden`}>
              {item.title}
            </p>
            <div className="flex flex-row items-center">
              <Dot item={item} />
              {item.title != "Ödeme" && (
                <div className="xl:w-20 w-10 bg-gray-400 h-[2px]" />
              )}
            </div>
          </div>
        );
      };
    
  return (
    <div className='flex flex-row items-center'>
         {TIMELINE.map((item) => (
              <TimeStep key={item.id} item={item} />
            ))}
    </div>
  )
}
