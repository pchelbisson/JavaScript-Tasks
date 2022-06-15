function convertToF() {
  let celsius = +prompt("Введите градусы в Цельсиях").trim();
  let fahrenheit = (celsius * 9) / 5 + 32;
  if (!celsius) {
    alert("Введите числовое значение");
  } else {
    return alert(
      `${celsius} градусов по Цельсию - это ${fahrenheit} градусов по Фаренгейту`
    );
  }
  return;
}
convertToF();
