function cubeNumber(number) {
    if (typeof number !== "number" || number < 0) {
        return "Please provide a positive number.";
    } else {
        return Math.pow(number, 3);
    }
}

// console.log(cubeNumber(3)); // Output: 27
// console.log(cubeNumber(4)); // Output: 64

