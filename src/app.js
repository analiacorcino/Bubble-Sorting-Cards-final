/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let button = document.getElementById("order");

  // elementos de la Carta aleatoria
  const palo = ["♦", "♥", "♠", "♣"];
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  let ordenar = [];
  let container = document.getElementById("container");
  let input = document.getElementById("containerInput");

  // funcion de generar carta aleatoria
  function RandomCardGenerator() {
    container.innerHTML = "";
    // empieza mi funcion for
    for (let i = 0; i < input.value; i++) {
      // let Math.random
      let randomPalo = palo[Math.floor(Math.random() * palo.length)];
      console.log(randomPalo);
      let randomNumero = number[Math.floor(Math.random() * number.length)];
      console.log(randomNumero);

      // Etiquetas de HTML
      container.innerHTML += `<div class="card m-3">
    <div class="">
      <div class="">
        <div id="paloTop">${randomPalo}</div>
      </div>
      <div class="">
        <div id="number">${randomNumero}</div>
      </div>
      <div>
        <div id="paloBot">${randomPalo}</div>
      </div>
    </div>
  </div>`;
      ordenar.push({
        palo: randomPalo,
        number: randomNumero
      });
    }
    console.log(ordenar);
  }
  RandomCardGenerator();

  // BUCLE CON WHILE
  const bubbleSort = arr => {
    let wall = arr.length - 1; //we start the wall at the end of the array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //compare the adjacent positions, if the right one is bigger, we have to swap
        if (arr[index].number > arr[index + 1].number) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        index++;
      }
      wall--; //decrease the wall for optimization
    }
    return arr;
  };

  button.addEventListener("click", function() {
    let nuevoArrayOrdenado = bubbleSort(ordenar);
    imprimirOrdenadas(nuevoArrayOrdenado);
    console.log(nuevoArrayOrdenado);
  });

  const imprimirOrdenadas = arr => {
    container.innerHTML = "";
    for (let index = 0; index < arr.length; index++) {
      container.innerHTML += `<div class="card m-3">
    <div class="">
      <div class="">
        <div id="paloTop">${arr[index].palo}</div>
      </div>
      <div class="">
        <div id="number">${arr[index].number}</div>
      </div>
      <div>
        <div id="paloBot">${arr[index].palo}</div>
      </div>
    </div>
  </div>`;
    }
  };

  input.addEventListener("input", function() {
    if (input.value <= 0) {
      input.value = 1;
    } else if (input.value > 12) {
      input.value = 12;
    }
  });
};
