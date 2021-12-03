const square = function (x) {
    return x* x;
}

//const squareArrow = (x) => { return x*x; }

const squareArrow = (x) => x*x;
console.log(squareArrow(9));


// const firstname = (n) => {
//     return n.split(' ')[0];
// }

// console.log(firstname('bob smith'));

const firstname = (n) =>  n.split(' ')[0];
console.log(firstname('sam smith'));

// 


const user = {
    name: 'andrew',
    cities: ['winnipeg','toronto', 'vancouver'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        //** es6 no longer binds the this */
        // this.cities.forEach( function (city) {   
        // this.cities.forEach( (city) => {
        //     console.log(this.name + ' has lived in ' + city )
        // });
    }
}
console.log(user.printPlacesLived());




const multipier = {
    numbers: [2,6,8,9],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map((n) => this.multiplyBy * n);
    }
}


console.log(multipier.multiply());