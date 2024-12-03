import React, { useEffect, useState } from "react";
import QuickLogo from "../../assets/images/subLogo.png";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3 saniye sonra isLoading state'ini false olarak ayarla
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Temizlik işlemi: Component unmount olduğunda zamanlayıcıyı temizle
    return () => clearTimeout(timer);
  }, []);

  // Eğer isLoading false ise, componenti render etme
  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#058789] animate-spin">
          <img src={QuickLogo} className="h-24 w-24 rounded-full object-contain animate-pulse" alt="Loading" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
