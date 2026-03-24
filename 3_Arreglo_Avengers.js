// *************************** Reto: Operaciones sobre Objetos *********************

// El arreglo es el siguiente:
const avengers = [
  {
    name: "Iron Man",
    age: 48,
    movies: ["Iron Man", "The Avengers", "Avengers: Endgame"],
  },
  {
    name: "Captain America",
    age: 101,
    movies: [
      "Captain America: The First Avenger",
      "The Avengers",
      "Avengers: Endgame",
    ],
  },
  {
    name: "Thor",
    age: 1500,
    movies: ["Thor", "The Avengers", "Avengers: Endgame"],
  },
  {
    name: "Black Widow",
    age: 35,
    movies: ["Iron Man 2", "The Avengers", "Avengers: Endgame"],
  },
];

//**************Preguntas a resolver*************************
//1. En el arreglo se encuentra Iron Man (name)?

const IronMan_incluido = avengers.some(elemento => elemento.name == "Iron Man");
console.log(IronMan_incluido); //true

//2. Eb el arreglo se encuentra Thor (movies)?
const Thor_incluido = avengers.some(elemento => elemento.movies.includes("Thor")); //Se utiliza includes en movies debido a que este es un []
console.log(Thor_incluido); //true

//3. Cual es el avenger mas viejo?
const avengerViejo = avengers.reduce((personaje1, personaje2) => {
  if(personaje1.age > personaje2.age) {
  return personaje1;
  } else {
    return personaje2;
  }
});

console.log(avengerViejo.name); //Thor

//4. Cuál es el avenger más viejo? (Operadores ternarios)
const oldAvenger = avengers.reduce((personaje1, personaje2) =>
personaje1.age > personaje2.age ? personaje1 : personaje2);

console.log(oldAvenger.name);