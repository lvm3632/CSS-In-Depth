let book = {
  title: "Professional Javascript",
  authors: ["Nicholas C. Zakas", "Matt Frisbie"],
  edition: 4,
  year: 2017,
};

let banderita = false;

// Convertir a JSON
let jsonText = JSON.stringify(book);

console.log(jsonText);
console.log(jsonText.title);

let botoncito = document.getElementById("boton_bonito");

botoncito.addEventListener("click", () => {
  console.log("entra??");
  let hotel = document.getElementsByClassName("hotel_nombre");

  hotel[0].innerHTML = "algo nuevo bro";

  if (!banderita) {
    document.getElementsByClassName("hotel_nombre")[0].innerHTML = book.year;
    banderita = true;
  } else {
    document.getElementsByClassName("hotel_nombre")[0].innerHTML =
      book.authors[1];
    banderita = false;
  }

  console.log(document.getElementsByClassName("hotel_nombre")[0].innerHTML);
});
