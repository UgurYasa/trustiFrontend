import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import QuickLogo from "../../assets/images/logo.png";
import Barcode from "../../assets/images/barcode.png";
import { IoMdDownload } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useCustomerById } from "../../services/hooks/customers";
import {
  useGetCoverageByCoverageId,
  useGetCoverageById,
} from "../../services/hooks/coverages";
import { useSelector } from "react-redux";

const PolicyPDF = () => {
  const { customer_No } = useParams();
  const { PRIM } = useSelector((state) => state.thirdStep);
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Aylar 0-11 arası olduğu için +1 ekliyoruz
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const today = formatDate(new Date());
  const nextYear = formatDate(
    new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  );

  const { data: customer } = useCustomerById(
    () => {},
    () => {},
    customer_No
  );
  const { data: coverage } = useGetCoverageByCoverageId(
    () => {},
    () => {},
    PRIM.coverageId
  );

  const POLICY = [
    {
      id: 0,
      title: "Poliçe Bilgileri",
      options: [
        {
          id: 0,
          label: "Sigorta Şirketi",
          value: "Quick Sigorta",
        },
        {
          id: 1,
          label: "Telefon",
          value: "+90 212 000 00 00",
        },
      ],
    },
    {
      id: 1,
      title: "Sigortalı Bilgileri",
      options: [
        {
          id: 0,
          label: "Ad Soyad",
          value: customer.data
            ? `${customer.data.first_Name} ${customer.data.last_Name}`
            : "Uğur Yaşa",
        },
        {
          id: 1,
          label: "Cep Telefon",
          value: customer.data ? customer.data.phone : "5874848445",
        },
        {
          id: 2,
          label: "TC Kimlik Numarası",
          value: customer.data ? customer.data.tckNo : "27654879654",
        },
        {
          id: 3,
          label: "E Posta",
          value: customer.data ? customer.data.email : "27654879654",
        },
        {
          id: 4,
          label: "Sigorta Başlangıç Tarihi",
          value: today,
        },
        {
          id: 5,
          label: "Sigorta Bitiş Tarihi",
          value: nextYear,
        },
      ],
    },
    {
      id: 2,
      title: "Teminatlar",
      options: [
        {
          id: 1,
          label: "Teminat Modeli",
          value: `${coverage ? coverage.coverage_Network : "Pembe"} Network`,
        },
        {
          id: 2,
          label: "Tedavi Modeli",
          value: `${coverage ? coverage.coverage_Model : "Yatarak"}`,
        },
        {
          id: 3,
          label: "Teminat Şehri",
          value: customer.data ? customer.data.city_Name : "İstanbul",
        },
      ],
    },
    {
      id: 3,
      title: "Ödeme Bilgileri",
      options: [
        {
          id: 0,
          label: "Ödenen Tutar",
          value: `${coverage ? coverage.coverage_Amount : "1500"} TL`,
        },
      ],
    },
  ];

  const randomPolicyNumberCreater = () => {
    let firstDigit = Math.floor(Math.random() * 9) + 1;
    let remainingDigits = "";
    for (let i = 0; i < 9; i++) {
      remainingDigits += Math.floor(Math.random() * 10);
    }
    return firstDigit + remainingDigits;
  };
  const componentRef = useRef();

  const handleDownloadPdf = async () => {
    // 210mm x 297mm A4 boyutlarında PDF oluştur
    const pdfWidth = 210; // mm
    const pdfHeight = 297; // mm

    // A4 boyutlarında canvas oluşturulacak
    const canvas = await html2canvas(componentRef.current, {
      scale: 5, // Daha yüksek çözünürlük için ölçeklendir
      onclone: (clonedDoc) => {
        // Butonu gizle
        const button = clonedDoc.querySelector("button");
        if (button) {
          button.style.display = "none";
        }
      },
    });
    // Canvas'ı A4 boyutlarına göre piksel cinsinden hesapla
    const pdf = new jsPDF("p", "mm", [pdfWidth, pdfHeight]);
    const imgData = canvas.toDataURL("image/png");

    // PDF'e resmi ekle (x, y, width, height)
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(
      customer.data
        ? `${customer.data.first_Name}${customer.data.last_Name}Police.pdf`
        : "Police.pdf"
    );
  };

  const Lines = ({ item }) => {
    return (
      <div className="py-4">
        <div className="text-lg md:text-xl font-semibold">{item.title}</div>
        <div className="flex flex-col py-2">
          {item.options.map((element) => (
            <div
              key={element.id}
              className={`grid grid-cols-7 items-center gap-2 my-1`}
            >
              <div className="font-black text-xs md:text-sm col-span-3 px-4 bg-slate-400 h-10 flex items-center text-white rounded-xl">
                <p>{element.label}</p>
              </div>
              <p className="col-span-1">:</p>
              <div className="text-xs md:text-sm col-span-3 px-4 bg-slate-300 h-10 rounded-xl flex items-center">
                <p>{element.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      ref={componentRef}
      className="w-full max-w-[210mm] mx-auto p-4 box-border bg-white border border-gray-300"
    >
      <div className="w-full flex justify-end">
        <button
          className="p-2 text-xl bg-red-300 rounded-lg mb-4"
          onClick={handleDownloadPdf}
        >
          <IoMdDownload />
        </button>
      </div>

      <div className="w-full py-5 px-10 bg-white border border-gray-400 mb-5 mx-auto max-w-[210mm] ">
        <div className="flex flex-row items-center justify-between md:mb-4 ">
          <img
            src={QuickLogo}
            alt="Quicksigorta Logo"
            className="h-8 md:h-10 object-contain"
          />
          <img
            src={Barcode}
            alt="Barkod Logo"
            className="h-12 md:h-16 object-contain"
          />
        </div>
        <div className="w-full flex flex-col items-end py-5 text-xs justify-end">
          <p className="font-semibold">Poliçe Numarası :</p>
          <p>{randomPolicyNumberCreater()}</p>
        </div>
        <div className="flex items-center justify-center pb-4 text-lg md:text-xl font-bold">
          Tamamlayıcı Sağlık Sigortası
        </div>
        {POLICY.map((item) => (
          <Lines key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PolicyPDF;
