export const TIMELINE = [
  {
    id: 0,
    title: "Sigortalı Bilgileri",
    active: true,
  },
  {
    id: 1,
    title: "Aile Üyeleri",
    active: false,
  },
  {
    id: 2,
    title: "Teklif",
    active: false,
  },
  {
    id: 3,
    title: "Beyan",
    active: false,
  },
  {
    id: 4,
    title: "Ödeme",
    active: false,
  },
  {
    id: 5,
    title: "Poliçe",
    active: false,
  },
];

export const HOWTOBUY = [
  "Sigortalı bilgileri girilir.",
  "İletişim bilgileri girilir.",
  "Aile üyeleri eklenebilir.",
  "Bireyler sağlıklı varsayılarak teklif verilir.",
  "Sağlık beyanı alınır.",
  "Mevcut sigorta şirketi beyanı alınır.",
  "Ödeme yöntemi seçilir.",
  "Müşteri onayıyla poliçe düzenlenir.",
  "E-posta ile poliçe seti iletilir.",
];

export const VALIDATIONERRORS = [
  [
    "T.C. kimlik numarası alanı boş bırakılamaz",
    "Lütfen geçerli Vergi kimlik numarası veya T.C. kimlik numarası giriniz.",
  ],
  [
    "Doğum Tarihi alanı boş bırakılamaz",
    "Lütfen Geçerli bir doğum tarihini giriniz.",
  ],
  [
    "Sigortalı e-posta adresi boş bırakılamaz.",
    "Lütfen geçerli bir Sigortalı e-posta adresi giriniz.",
  ],
  [
    "Sigortalı cep telefonu numarası boş bırakılamaz.",
    "Lütfen geçerli bir Sigortalı cep telefonu numarası giriniz.",
  ],
  "Lütfen Gizlilik Politikası, Kullanıcı Sözleşmesi, KVKK Aydınlatma Metni ve Poliçe Bilgilendirme Formunu okuduğunuzu kabul ediniz.",
  "KVKK Aydınlatma Metnini okuduğunuzu kabul ediniz.",
];

export const FAMILYMEMBER = [
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
];
export const COLLATERALDETAILS = [
  {
    label: "Yatarak Tedavi Teminatları",
    value: ["Limitsiz", "Limitsiz"],
  },
  { label: "Ayakta Tedavi Teminatları", value: ["Cancel", "Check"] },
  { label: "Hizmetler", value: ["Check", "Check"] },
];

export const PRIM = { proximity: "", title: "Paket Seçiniz", amount: 0 };

//PRIM
// {
//   proximity: "Kendisi",
//   title: "Lacivert Network - Yatarak Tedavi",
//   amount: 2944.8,
// }
//COLLATERALDETAILS
//   {
//     title: "Pembe Network",
//     color: "#EB1C74",
//     option: [
//       {
//         value: "yatarak",
//         skill: [
//           {
//             label: "Yatarak Tedavi Teminatları",
//             value: ["Limitsiz", "Limitsiz"],
//           },
//           { label: "Ayakta Tedavi Teminatları", value: ["Cancel", "Check"] },
//           { label: "Hizmetler", value: ["Check", "Check"] },
//         ],
//       },
//       {
//         value: "yatarakveayakta",
//         skill: [
//           {
//             label: "Yatarak Tedavi Teminatları",
//             value: ["Limitsiz", "Limitsiz"],
//           },
//           { label: "Ayakta Tedavi Teminatları", value: ["Cancel", "Check"] },
//           { label: "Hizmetler", value: ["Check", "Check"] },
//         ],
//       },
//     ],
//   },
//   {
//     title: "Yeşil Network",
//     color: "#44BD32",
//     option: [
//       {
//         value: "yatarak",
//         skill: [
//           {
//             label: "Yatarak Tedavi Teminatları",
//             value: ["Limitsiz", "Limitsiz"],
//           },
//           { label: "Ayakta Tedavi Teminatları", value: ["Cancel", "Check"] },
//           { label: "Hizmetler", value: ["Check", "Check"] },
//         ],
//       },
//       {
//         value: "yatarakveayakta",
//         skill: [
//           {
//             label: "Yatarak Tedavi Teminatları",
//             value: ["Limitsiz", "Limitsiz"],
//           },
//           { label: "Ayakta Tedavi Teminatları", value: ["Cancel", "Check"] },
//           { label: "Hizmetler", value: ["Check", "Check"] },
//         ],
//       },
//     ],
//   },
//   {
//     title: "Lacivert Network",
//     color: "#1F2346",
//     option: [
//       {
//         value: "yatarak",
//         skill: [
//           {
//             label: "Yatarak Tedavi Teminatları",
//             value: ["Limitsiz", "Limitsiz"],
//           },
//           { label: "Ayakta Tedavi Teminatları", value: ["Cancel", "Check"] },
//           { label: "Hizmetler", value: ["Check", "Check"] },
//         ],
//       },
//       {
//         value: "yatarakveayakta",
//         skill: [
//           {
//             label: "Yatarak Tedavi Teminatları",
//             value: ["Limitsiz", "Limitsiz"],
//           },
//           { label: "Ayakta Tedavi Teminatları", value: ["Cancel", "Check"] },
//           { label: "Hizmetler", value: ["Check", "Check"] },
//         ],
//       },
//     ],
//   },
// ];
