import React from "react";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { GiPlayButton } from "react-icons/gi";

const logoUrls = [
  "https://logowik.com/content/uploads/images/visa-payment-card1873.jpg", // Visa
  "https://imageio.forbes.com/blogs-images/steveolenski/files/2016/07/Mastercard_new_logo-1200x865.jpg?height=512&width=711&fit=bounds", // MasterCard
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/601px-American_Express_logo_%282018%29.svg.png", // American Express
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-n4Zp7F2ny-Jb-V3tcmRdf2PNfp-yAieiw&s", // Diners Club
  "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/092013/2013_display_logo.png?itok=ZixRLSRG", // JCB
  "https://seeklogo.com/images/D/Discover_Card-logo-4BC5D7C02C-seeklogo.com.png", // Discover
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UnionPay_logo.svg/1280px-UnionPay_logo.svg.png", // UnionPay
  "https://upload.wikimedia.org/wikipedia/commons/4/4d/Maestro_logo.png", // Maestro
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82g8mkrlMMiQ17FGj5_VQAQ-P2gHUyXhYIQ&s", // RuPay
];

// Banka logoları için URL'leri içeren fonksiyon
const getBankLogoUrl = (cardNo) => {
  if (cardNo.startsWith("4")) return logoUrls[0]; // Visa
  if (cardNo.startsWith("5")) return logoUrls[1]; // MasterCard
  if (cardNo.startsWith("3")) {
    if (cardNo[1] === "4" || cardNo[1] === "7") return logoUrls[2]; // American Express
    if (cardNo[1] === "0") return logoUrls[3]; // Diners Club
    return logoUrls[4]; // JCB
  }
  if (cardNo.startsWith("6")) return logoUrls[5]; // Discover
  if (cardNo.startsWith("2")) return logoUrls[6]; // UnionPay
  if (cardNo.startsWith("3") && cardNo[1] === "6") return logoUrls[7]; // Maestro
  if (cardNo.startsWith("6") && cardNo[1] === "3") return logoUrls[8]; // RuPay
  return null;
};

export const FrontCard = ({ fname, lname, cardNo, expdate, setClicked }) => {
  const bankLogoUrl = getBankLogoUrl(cardNo);

  return (
    <div className="relative grid grid-rows-5 xl:w-1/2 w-full h-52 border-[1px] border-black rounded-xl bg-slate-500 text-white transition-transform transform hover:scale-105 animate-flip">
      <div className="row-span-2 w-full rounded p-5 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2 animate-slideIn">
          <BsCreditCard2FrontFill className="text-4xl" />
          <p className="xl:text-2xl font-black">CREDIT CARD</p>
        </div>
        <GiPlayButton
          className="text-2xl cursor-pointer"
          onClick={() => setClicked(true)}
        />
      </div>
      <div className="row-span-1 w-full flex items-center p-5 px-10">
        {cardNo === "" ? "XXXX-XXXX-XXXX-XXXX" : cardNo}
      </div>
      <div className="row-span-1 w-full flex items-center justify-center">
        {expdate}
      </div>
      <div className="row-span-1 w-full flex items-center p-5">
        {fname === "" ? "AD" : fname} {lname === "" ? "SOYAD" : lname}
      </div>
      <div className="absolute bottom-2 right-2 animate-slideIn">
        {bankLogoUrl && (
          <img src={bankLogoUrl} alt="Bank Logo" className="w-12 h-8" />
        )}
      </div>
    </div>
  );
};
