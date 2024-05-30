// function squareNumbers(arrs) {
//     const square = arrs.map(arr  => arr * arr )
//     return square
// }

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = squareNumbers(numbers);
// console.log(squaredNumbers); // Output should be [1, 4, 9, 16, 25]


// // ///////////////////////////////////////////////////////////////////////////////

// function getValue(obj, key) {
//     const value = obj[key]   // Acces a un object en utilisant la valeur associer a une cle   
//     return value 
// }

// const person = { name: 'John', age: 30, job: 'Developer' };
// const value = getValue(person, 'job');
// console.log(person['job']); // Output should be "Developer"

///////////////////////////////////////////////////////////////////////////

function filterEvenNumbers(arrs) {
    const even = arrs.filter(arr => {
        if(arr % 2 === 0){
            return arr
        }
        return null

    })
    return even
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // Output should be [2, 4, 6]