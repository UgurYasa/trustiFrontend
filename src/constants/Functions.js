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
