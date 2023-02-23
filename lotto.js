function genereazaNumerele() {
  let index;
  let arrayNumere = [];
  const containerNumere = document.querySelector(".numbersLotto");
  containerNumere.innerHTML = "";
  for (index = 0; index < 6; index++) {
    let numarAleatoriu = Math.ceil(Math.random() * 49);
    if (arrayNumere.includes(numarAleatoriu)) {
      // true/false
      index--;
    } else {
      arrayNumere.push(numarAleatoriu);
      let elementSpan = document.createElement("span");
      elementSpan.innerHTML = numarAleatoriu;
      containerNumere.appendChild(elementSpan);
    }
  }
}
