import { number, object, string } from "yup";

const validations = object({
  tcNo: string().required("T.C. Kimlik Numarası alanı boş bırakılamaz").max(11),
  birthDate: "",
  name: string(),
  email: string(),
  telNo: number(),
});

export const TCKValidation = (identityNo) => {
  /*İlk rakam 1-8 arasında olmalı, 11 karakter olmalı ve son karakteri çift olmalı*/
  const pattern = new RegExp(/^([1-8])(\d{9})([02468])/);

  if (!pattern.test(identityNo) || !identityNo) return false;
  const arr = identityNo
    .toString()
    .split("")
    .map((x) => parseInt(x));
  const lastIndex = arr.length - 1;

  //İlk 10 basamağının toplamı birler basamağı 11.rakamı vermektedir
  if (
    arr.reduce((sum, a, index) => sum + (index !== lastIndex ? a : 0), 0) %
      10 !==
    arr[lastIndex]
  )
    return false;
  // 1, 3, 5, 7 ve 9. rakamın toplamının 7 katı ile 2, 4, 6 ve 8. rakamın toplamının 9 katının toplamının birler basamağı 10. rakamı verir.
  if (
    ((arr[0] + arr[2] + arr[4] + arr[6] + arr[8]) * 7 +
      (arr[1] + arr[3] + arr[5] + arr[7]) * 9) %
      10 !==
    arr[lastIndex - 1]
  )
    return false;

  //1, 3, 5, 7 ve 9. rakamın toplamının 8 katının birler basamağı 11. rakamı verir.
  return (
    ((arr[0] + arr[2] + arr[4] + arr[6] + arr[8]) * 8) % 10 === arr[lastIndex]
  );
};

export const EmailValidation = (email) => {
  // Regex pattern for validating email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the email with the pattern
  return emailPattern.test(email); // Burada test fonksiyonu kullanılıyor
};

export const PhoneNumberValidation = (phoneNumber) => {
  // Regex pattern for validating Turkish phone numbers
  const phonePattern = /^(?:\+90|0)?5\d{9}$/;

  // Test the phone number with the pattern
  return phonePattern.test(phoneNumber);
};

export default validations;
