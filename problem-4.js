function findAddress(obj) {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';

    if (typeof obj !== "object") {
        return 'Please provide a valid object.';
    }
    else{
        return street + ', ' + house + ', ' + society;
    }


}
const obj1 = {street: 10, house: '15A', society: 'Earth Perfect'};

// const obj2 = {street: 10, society: 'Earth Perfect'};
// const obj3 = {street: 10};

console.log(findAddress({street: 10, house: '15A', society: 'Earth Perfect'}));


console.log(findAddress(obj2)); // Output: 10, 15A, Earth Perfect
// console.log(findAddress(obj2)); // Output: 10, __, Earth Perfect
// console.log(findAddress(obj3)); // Output: 10, __, __
