var fruit = 'banana';
fruit = 'pera';
console.log(fruit);

let animal = 'dog';
fruit = 'cat';
console.log(animal);

const other = 'car';
other = 'bici';
console.log(other);

const fruits = () => {
    if (true) {
        var fruit1 = 'pera';
        let fruit2 = 'manzana'; //block scope
        const fruit3 = 'apple'; //block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();