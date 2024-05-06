let numberToMultiply = 9;

for (var i = 1; i <= 10; i++) {
  console.log(
    `${numberToMultiply}`,
    "X",
    `${i}`,
    "=",
    `${numberToMultiply * i}`
  );
}

let strPalindrome = "mkam";
let isPalindrome = true;

for (var i = 0; i < strPalindrome.length / 2; i++) {
  if (strPalindrome[i] !== strPalindrome[strPalindrome.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(
  isPalindrome
    ? strPalindrome + " is a palindrome"
    : strPalindrome + " is not a palindrome"
);

const paragraph = "hello world!";
const replacer = "ell";
console.log(paragraph.replace(replacer, ""));

const kataDibalik = "testing";
let kataArrayBalik = "";
let arrayKata = [];

for (var i = kataDibalik.length - 1; i >= 0; i--) {
  kataArrayBalik += kataDibalik[i];
}
for (var i = kataDibalik.length - 1; i >= 0; i--) {
  console.log(kataDibalik[i]);
}
for (var i = kataDibalik.length - 1; i >= 0; i--) {
  arrayKata.push(kataDibalik[i]);
}
console.log(kataArrayBalik);
console.log(arrayKata);

const kalimatDiCapital = "hello world";
let arrayCapital = kalimatDiCapital
  .split(" ")
  .map((capital) => capital.charAt(0).toUpperCase() + capital.slice(1))
  .join(" ");
console.log(arrayCapital);

let bandingNomer = Math.floor(Math.random() * 100);
let compareNumber = Math.floor(Math.random() * 100);
console.log(compareNumber, " ", bandingNomer);
if (bandingNomer > compareNumber) {
  console.log(bandingNomer, "lebih besar");
} else if (bandingNomer < compareNumber) {
  console.log(compareNumber, "lebih besar");
} else {
  console.log(bandingNomer, "sama dengan", compareNumber);
}

const paragraphK = "hello world!";
const replacerK = "l";
console.log(paragraph.replace(replacerK, "*"));

let strAcak = "The QuiCK BrOwN Fox";
let swapAcak = "";

for (var i = 0; i < strAcak.length; i++) {
  let char = strAcak[i];
  if (char >= "A" && char <= "Z") {
    swapAcak += char.toLowerCase();
  } else if (char >= "a" && char <= "z") {
    swapAcak += char.toUpperCase();
  } else {
    swapAcak += char;
  }
}
console.log(swapAcak);

let Num1 = Math.floor(Math.random() * 100);
let Num2 = Math.floor(Math.random() * 100);
let Num3 = Math.floor(Math.random() * 100);
let sortNum = [Num1, Num2, Num3].sort((a, b) => b - a);
console.log(sortNum);

let strAcak2 = "an apple a day keeps the doctor away";
let swapAcak2 = "";

for (var i = 0; i < strAcak2.length; i++) {
  let char = strAcak2[i];
  if (char === "a" || char === "A") {
    swapAcak2 += "*";
  } else {
    swapAcak2 += char;
  }
}
console.log(swapAcak2);

