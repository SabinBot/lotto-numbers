function generateNumbers() {
  let index;
  let arrayNumbers = [];
  const containerNumbers = document.querySelector(".numbersLotto");
  containerNumbers.innerHTML = "";
  for (index = 0; index < 6; index++) {
    let randomNumber = Math.ceil(Math.random() * 49);
    if (arrayNumere.includes(randomNumber)) {
      index--;
    } else {
      arrayNumere.push(randomNumber);
      let elementSpan = document.createElement("span");
      elementSpan.innerHTML = randomNumber;
      containerNumbers.appendChild(elementSpan);
    }
  }
}
