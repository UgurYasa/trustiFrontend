export const maskCardNumber = (input) => {
  const maxLength = 16; // Maksimum kart numarası uzunluğu (XXXX-XXXX-XXXX-XXXX)
  let maskedNumber = "X".repeat(maxLength); // Başlangıçta tüm karakterler 'X'
  const inputWithoutSpaces = input.replace(/\s|-/g, ""); // Boşlukları ve tireleri kaldır

  for (let i = 0; i < inputWithoutSpaces.length; i++) {
    maskedNumber =
      maskedNumber.substr(0, i) +
      inputWithoutSpaces[i] +
      maskedNumber.substr(i + 1);
  }

  // Dört karakterde bir tire ekleyerek formatla
  let formattedNumber = "";
  for (let i = 0; i < maskedNumber.length; i++) {
    formattedNumber += maskedNumber[i];
    if ((i + 1) % 4 === 0 && i !== maskedNumber.length - 1) {
      formattedNumber += "-";
    }
  }

  return formattedNumber;
};
export const isValidCardNumber = (cardNumber) => {
  if (!/^\d+$/.test(cardNumber)) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};
export const maskExpDate = (input) => {
  const maxLength = 4;
  let maskedDate = "A".repeat(maxLength / 2) + "Y".repeat(maxLength / 2);

  for (let i = 0; i < input.length; i++) {
    maskedDate = maskedDate.substr(0, i) + input[i] + maskedDate.substr(i + 1);
  }

  if (maskedDate.length >= 2) {
    maskedDate = maskedDate.substr(0, 2) + "/" + maskedDate.substr(2);
  }

  return maskedDate;
};

export const isValidExpDate = (expDate) => {
  if (!/^\d{4}$/.test(expDate)) {
    return false;
  }

  const month = parseInt(expDate.substr(0, 2));
  const year = parseInt(expDate.substr(2, 2));

  if (month < 1 || month > 12) {
    return false;
  }

  const currentYear = new Date().getFullYear() % 100; // Son iki rakamını al
  const currentMonth = new Date().getMonth() + 1; // 0-indexed olduğu için 1 ekle

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return false;
  }

  return true;
};

export const maskCvv = (input) => {
  let masked = input
    .split("")
    .map(() => "X")
    .join("");
  if (input.length > 0) {
    masked = masked.slice(0, -1) + input.slice(-1);
  }
  return masked;
};

export const isValidCvv = (cvv) => {
  return /^\d{3,4}$/.test(cvv);
};

export const isValidName = (fName, lName) => {
  return fName.length >= 2 && lName.length >= 2;
};
