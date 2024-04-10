// 1. Ejercicios destructuring

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];

const [,todo] = empleados
const {name,email} = todo

console.log("name:",name," email:",email)

const [luis] = empleados
const {email:correo} = luis

console.log(correo)


const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

const {name:nombre} = pokemon

console.log(nombre)

const {type} = pokemon

console.log(type)

const {moves} = pokemon

const [,movement] = moves

console.log(movement)


// 2.Ejercicios spread/rest

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}


const pokemonCombined = {...pokemon, ...pikachu}

console.log(pokemonCombined)


function sumEveryOther(...numeros){
    let sum = 0
    for (let index = 0; index < numeros.length; index++) {
        sum += numeros[index]
    }
    console.log(sum)
}

sumEveryOther(1,2,3,4,5,6)

function addOnlyNums(...numeros){
    let sum = 0
    for (let index = 0; index < numeros.length; index++) {
        if(typeof numeros[index] === "number"){
            sum += numeros[index]
        }
    }
    console.log(sum)
}

addOnlyNums(1,"j",3,"n",5,"h")

function countTheArgs(...tamaño){
    console.log(tamaño.length)
}

countTheArgs(1,"j",3,"n",5,"h")



function combineTwoArrays(array1,array2){
    let combineArray = [...array1,...array2]
    console.log(combineArray)
}

combineTwoArrays([1,2,3], [4,5,6])


// 3.Extras

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

  const {today} = HIGH_TEMPERATURES;
  const {tomorrow} = HIGH_TEMPERATURES;
  console.log(today)
  console.log(tomorrow)


function onlyUniques(...unicos){
    let verify = []
    for (let index = 0; index < unicos.length; index++) {
        if(!verify.includes(unicos[index])){
            verify.push(unicos[index])
        }
    }
    console.log(verify)
}

onlyUniques(1,3,4,1,1,3,4)

function combineAllArrays(...combine){
    let combineArray = []
    for (let index = 0; index < combine.length; index++) {
        combineArray.push(...combine[index])
        
    }
    console.log(combineArray)
}

combineAllArrays([1,2,3],[4,5,6],[7,8,9])


function sumAndSquare(...numeros){
    let suma = 0
    for (let index = 0; index < numeros.length; index++) {
        suma += numeros[index] ** 2
    }
    console.log(suma)
}

sumAndSquare(1,2,3,4,5)