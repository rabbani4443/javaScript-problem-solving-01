function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return "Invalid Input";
    }

    if (arr[0] === arr[1]) {
        return "equal";
    }

    if (arr[0] < arr[1]) {
        return [arr[1], arr[0]];
    }
    return arr;
}

console.log(sortMaker([8, 12])); // Output: [12, 8]
console.log(sortMaker([-8, 2])); // Output: [4, 2]
console.log(sortMaker([4, 4])); // Output: "equal"
console.log(sortMaker([1, 2])); // Output: [2, 1]
console.log(sortMaker([4, -2])); // Output: "Invalid Input"
