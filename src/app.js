/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generateTypeOfACard());
  document.getElementById("generate").innerHTML = generateValueOfACard();
};

const generateTypeOfACard = () => {
  const cardType = ["diamond", "heart", "spade", "club"];
  return cardType[Math.floor(Math.random() * cardType.length)];
};

const generateValueOfACard = () => {
  const cardValues = [
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "J🤴",
    "K👑",
    "Q👑",
    "A"
  ];

  return cardValues[Math.floor(Math.random() * cardValues.length)];
};
