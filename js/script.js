function changeColor() {
  let hex_numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let hexcode = "";

  for (let contadora = 0; contadora < 6; contadora++) {
    let random_index = Math.floor(Math.random() * hex_numbers.length);
    hexcode += hex_numbers[random_index];
  }
  document.getElementById("hex-code").innerHTML = hexcode;
  document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
}
