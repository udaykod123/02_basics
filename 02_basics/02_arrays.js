const marvelHeros = ["thor", "ironMan", "spiderMan"]
const dcHeros = ["superMan", "flash", "batMan"]

//marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);


// marvelHeros.concat(dcHeros);
// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

// const all_new_Heros = [...marvelHeros, ...dcHeros]
// console.log(all_new_Heros);

const anotherArray = [1, 2, 3, 4, [5, 6, 7, 3], 9, [4, 5], 3, [1, 0]]
const realAnotherArray = anotherArray.flat(Infinity)

console.log(realAnotherArray);

console.log(Array.isArray("uday"))
console.log(Array.from("uday"))
console.log(Array.from({name : "uday"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score2, score1, score3));