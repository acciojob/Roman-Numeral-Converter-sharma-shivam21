function convertToRoman(num) {
  if (num <= 0 || num > 100000) {
    return "Input out of range";
  }

  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let romanNumeral = '';

  // Handle thousands place (up to 100,000)
  if (num >= 1000) {
    let thousands = Math.floor(num / 1000);
    romanNumeral += 'M'.repeat(thousands);
    num %= 1000;
  }

  // Handle hundreds, tens, and ones places
  for (let i = 2; i <= 6; i += 2) {
    let placeValue = Math.floor(num / obj[i][1]);
    if (placeValue === 9) {
      romanNumeral += obj[i][0] + obj[i - 2][0];
    } else if (placeValue >= 5) {
      romanNumeral += obj[i - 1][0] + obj[i][0].repeat(placeValue - 5);
    } else if (placeValue === 4) {
      romanNumeral += obj[i][0] + obj[i - 1][0];
    } else {
      romanNumeral += obj[i][0].repeat(placeValue);
    }
    num %= obj[i][1];
  }

  return romanNumeral;
}
