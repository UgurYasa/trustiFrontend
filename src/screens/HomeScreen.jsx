import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import NetworkCard from "../components/NetworkCard";
import Slider from "../components/Slider";
import { NETWORKS } from "../constants/FirstStep";
import { useGetCoverageById } from "../services/hooks/coverages";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { setNetworksCard } from "../redux/secondStepSlice";
import Loading from "../components/Loading";

export default function HomeScreen() {
  const { fiyatAl, isSearchSelected } = useSelector((state) => state.firstStep);
  const { NETWORKSCARDData } = useSelector((state) => state.secondStep);

  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const {
    data: Coverages,
    isLoading,
    status,
  } = useGetCoverageById(
    () => {},
    () => {},
    isSearchSelected > 0 && isSearchSelected
  );

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["Coverage"] });

    if (fiyatAl && isSearchSelected > 0&&Coverages) {
      dispatch(setNetworksCard(Coverages));      
    }
  }, [isSearchSelected, fiyatAl,Coverages]);

  return (
    <div className="flex flex-col xl:min-h-screen h-auto bg-[#F7F9FA]">
      <Header />
      <Slider />
      {fiyatAl && isLoading ? (
        <Loading/>
      ) : (
        <div
          className={`container grid grid-cols-3 gap-4 md:my-5 bg-white ${
            fiyatAl ? "block" : "hidden"
          } p-3 shadow-lg`}
        >
         {NETWORKSCARDData && NETWORKSCARDData[0] 
            ? NETWORKSCARDData[0].map((network, index) => (
                <div
                  key={index}
                  className="xl:col-span-1 col-span-3 max-xl:container"
                >
                  <NetworkCard network={network} />
                </div>
              ))
            : NETWORKS.map((network, index) => (
                <div
                  key={index}
                  className="xl:col-span-1 col-span-3 max-xl:container"
                >
                  <NetworkCard network={network} />
                </div>
              ))}
        </div>
      )}

      <div className="container flex items-center text-2xl leading-10 my-2">
        İhtiyaç duyduğunuz her anda uygun fiyat ve ödeme koşulları ile “Quick
        Tamamlayıcı Sağlık Sigortası” yanınızda…
        <br />
        Bulunduğunuz şehrin en iyi hastanelerinde uygun prim ödeyerek özel
        hastane konforunu yaşamak mı? İyi fikir!
        <br />
        Üstelik size özel ücretsiz geniş ek sağlık hizmetlerimizle.
      </div>
      <div className="container flex flex-col text-2xl leading-10 my-2">
        <h1 className="font-bolder md:text-5xl text-[#EB1C74]">
          Quick Tamamlayıcı Sağlık Sigortası
        </h1>
        <h2 className="font-bolder md:text-3xl">Nedir?</h2>
        <p>
          Quick Tamamlayıcı Sağlık Sigortası, Sosyal Güvenlik Kurumu (SGK)
          kapsamında karşılanan sağlık giderlerinizde oluşan fark ücretlerini,
          yalnızca SGK zorunlu katılım payını ödeyerek karşılayabilmenize imkân
          veren bir özel sağlık sigorta ürünüdür.
        </p>
        <p className="opacity-40 text-base">
          * SGK zorunlu muayene katılım payı tutarı{" "}
          <span className="font-bold opacity-100 text-black">15 TL</span>’dir.
        </p>
      </div>
    </div>
  );
}
