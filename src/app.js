/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let palos = ["♦", "♣", "♠", "♥"];

  let valores = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let palosRandom = Math.floor(Math.random() * palos.length);

  let valoresRandom = Math.floor(Math.random() * valores.length);

  let paloArriba = document.getElementById("paloArriba");
  let paloAbajo = document.getElementById("paloAbajo");
  let numero = document.getElementById("valores");

  paloArriba.innerHTML = palos[palosRandom];
  paloAbajo.innerHTML = palos[palosRandom];
  numero.innerHTML = valores[valoresRandom];

  console.log(palos[palosRandom]);
  if (palos[palosRandom] == "♥" || palos[palosRandom] == "♦") {
    paloAbajo.style.color = "red";
    paloArriba.style.color = "red";
  }
};
