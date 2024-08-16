export const censorWords = (sentence) => {
  const words = sentence.split(" ");

  const censoredWords = words.map((word) => {
    if (word.length > 2) {
      return (
        word[0].toUpperCase() +
        "*".repeat(word.length - 2) +
        word[word.length - 1].toUpperCase()
      );
    } else {
      return word;
    }
  });

  return censoredWords.join(" ");
};

export const calculateAge = (birthDateString) => {
  const birthDate = new Date(birthDateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
};

export const formatNumber = (num) => {
  let str = num.toFixed(2);
  str = str.replace(".", ",");
  let parts = str.split(",");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
};


export const formatDateToYYYYMMDD = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Ayı 2 basamaklı yapmak için
  const day = String(date.getDate()).padStart(2, '0'); // Günü 2 basamaklı yapmak için

  return `${year}-${month}-${day}`;
};

export default function turkishToUpper() {
  var string = this;
  var letters = { i: "İ", ş: "Ş", ğ: "Ğ", ü: "Ü", ö: "Ö", ç: "Ç", ı: "I" };
  string = string.replace(/(([iışğüçö]))+/g, function (letter) {
    return letters[letter];
  });
  return string.toUpperCase();
}

String.prototype.turkishToUpper = turkishToUpper;