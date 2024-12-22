export default function readingNumEasier(num) {
  const arrayedStringedNum = num.toString().split("");
  const numOfDigits = arrayedStringedNum.length;

  const easierNum = [];

  let j = 1;
  for (let i = numOfDigits - 1; i >= 0; i--) {
    j % 3 === 0 && j !== numOfDigits
      ? easierNum.unshift(`,${arrayedStringedNum[i]}`)
      : easierNum.unshift(arrayedStringedNum[i]);
    j++;
  }

  return easierNum.join("").trim();
}
