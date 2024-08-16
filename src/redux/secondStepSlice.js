import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FAMILYMEMBERS: [
    {
      id: 0,
      name: "ADI SOYADI",
      tcNo: "KİMLİK NO",
      telNo: "TELEFON",
      proximity: "YAKINLIK DERECESİ",
      risk: "RİSK İLİ",
    },
    {
      id: 1,
      name: "aaaaaaa aaaaaaa aaaaaaa",
      tcNo: "41125054776",
      telNo: "05347895621",
      proximity: "Kendisi",
      risk: "İstanbul",
      birthDate: "2001-07-26",
      address:
        "Sarı Lale Sokak Vedat Günyol Caddesi No:3 Fay Plaza Ataşehir/İSTANBUL",
    },
  ],
  FAMILYMEMBER: {
    id: 0,
    name: "",
    tcNo: "",
    telNo: "",
    proximity: "",
    risk: "",
    birthDate: "",
    address:
      "Sarı Lale Sokak Vedat Günyol Caddesi No:3 Fay Plaza Ataşehir/İSTANBUL",
  },
  NETWORKSCARDData:[]
};
const secondStepSlice = createSlice({
  name: "secondStepSlice",
  initialState,
  reducers: {
    setFamilyMember: (state, action) => {
      state.FAMILYMEMBER.id = action.payload.id;
      state.FAMILYMEMBER.city_Id = action.payload.city_Id;
      state.FAMILYMEMBER.name = action.payload.name;
      state.FAMILYMEMBER.tcNo = action.payload.tcNo;
      state.FAMILYMEMBER.telNo = action.payload.telNo;
      state.FAMILYMEMBER.proximity =
        action.payload.proximity === "Kendi"
          ? "Kendisi"
          : action.payload.proximity;
      state.FAMILYMEMBER.risk = action.payload.risk;
      state.FAMILYMEMBER.birthDate = action.payload.birthDate;
      state.FAMILYMEMBERS.length === 2
        ? (state.FAMILYMEMBERS[1] = state.FAMILYMEMBER)
        : state.FAMILYMEMBERS.push(state.FAMILYMEMBER);
    },
    setNetworksCard: (state, action) => {
    
      const colors = [
        { title: "Pembe", color: "#EB1C74" },
        { title: "Yeşil", color: "#44BD32" },
        { title: "Lacivert", color: "#1F2346" }
      ];
    
      const networks = colors.map((color, index) => {
        const cityIndex = index * 2;
        return {
          id: index,
          city: action.payload[cityIndex].city_Name,
          title: color.title,
          color: color.color,
          yatarakTedaviFiyat: action.payload[cityIndex]?.coverage_Amount || 0,
          yatarakveayaktaFiyat: action.payload[cityIndex + 1]?.coverage_Amount || 0,
        };
      });
      state.NETWORKSCARDData.length === 1
        ? (state.NETWORKSCARDData[0] = networks)
        : state.NETWORKSCARDData.push(networks);
    },
    
  },
});

export const { setFamilyMember,setNetworksCard} = secondStepSlice.actions;
export default secondStepSlice.reducer;
