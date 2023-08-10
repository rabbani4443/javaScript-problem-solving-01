function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray)) {
        return "Please provide a valid Array for the change.";
    }

    if (typeof totalDue !== "number") {
        return "Please provide a valid number for the total due.";
    }

    let totalChange = changeArray.reduce((a, b) => a + b, 0);

    if (totalChange >= totalDue) {
        return true;
    } else {
        return false;
    }
}

console.log(canPay([3, 2, 5], 10));  // Output: true
console.log(canPay([1, 5, 5], 10));  // Output: true
