import React from 'react'
import { HOWTOBUY } from '../../../constants/SecondStep';

export default function FirstSection() {
    return (
        <div>
          <p className="text-[#EB1C74] font-bold text-lg">
            Trusti Tamamlayıcı Sağlık Sigortası <br /> nasıl alınır?
          </p>
    
          {HOWTOBUY.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-2 max-xl:hidden"
            >
              &#8226; <p className="text-black text-base">{item}</p>
            </div>
          ))}
        </div>
      );
}