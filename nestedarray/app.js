//* | NESTED ARRAYS |

//? Q1:

// let studentsName = [ ]

//? Q2:

// let studentsName = {}

//? Q3:

let carBrand = [ 'TESLA', 'BMW', 'HONDA', 'HYUNDAI', 'SAAB', 'MAZDA'];

//? Q4:

let studentAges = [ 21, 22, 69, 26, 27];

//? Q5:

let truefalse = [false, false, true]

console.log(typeof truefalse);

// ? Q6:

let mArray = ['gymbro', 'gaming bro', 'bro', 177034, zero90078601, true, false];

//? Q7:

let nwtworkarr = ['Telenor', 'zong/jazz', 'Onic', 'Ufone'];

// ? Q8:

let qualifications = ['SSC', 'HSC', 'BSC', 'BS', 'B.COM', 'MS', 'M.PHIL', 'PHD']
let div = document.querySelector('ol');

for(i=0; i<qualifications.length; i++){
    console.log(qualifications[i]);
div.innerHTML += `<li> ${qualifications[i]} </li>`
}

//? Q9:

//? Q10:

let Cars = ['Ferrari', 'Mclaren', 'Mercedes', 'TOYODA'];
console.log(`first index of array: ${Cars[0]}`);
console.log(`car at first index of array: ${Cars[0]}`);
console.log(`last index of array: ${Cars.length-1}`); 
console.log(`car at first index of array: ${Cars[3]}`);

//? Q11:

let student = ['leme', 'notme', 'somsom'];
let score = [690, 960, 690];
let percentage = score.map (score => (score/500) *100);

for(i=0; i <= 3; i++){
    console.log(`score of ${student[i]} is ${score[i]}. percentage ${percentage[i]}% `);
}

//? Q12:

//? Q13:

let fruits = ['strawberry','apple','orange','banana', 'batman'];
let sortFruits = fruits.sort();
console.log(`Ordered fruit list ${sortFruits}`);

//? Q15:

let cities = ['karachi','lahore','islamabad','abottabad','peshawar'];
let selectedCities = cities.slice(2,4);
console.log(selectedCities);

//? Q16:

let a = ["this", "is", "my", "cat"];
let joineda = a.join(" ");  
console.log(joineda);


//? Q17:


//? Q18:


//? Q19:

let Brands = ['Raspberry', 'Samsung','Nokia','blackberry','Sony','one and only Q mobile','redmi'];
let select = document.querySelector('select');

for (i=0; i <Brands.length; i++){
    select.innerHTML += `<option>${Brands[i]}</option>`;
}

// ? Q20:

let nestedArr = [[]];

//? Q21:

let matrix = [
  [1, 0, 1, 2], // index 0 ==> indices 0,1,2,3
  [0, 1, 2, 1], // index 1 ==> indices 0,1,2,3
  [2, 1, 0, 1], // index 2 ==> indices 0,1,2,3
];
console.log(matrix[0][3]); 
