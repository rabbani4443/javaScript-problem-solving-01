function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please provide a positive number.";
    } else {
        return Math.pow(number, 3);
    }
}

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please provide two strings as input.';
    }

    else if (string1.toLowerCase().includes(string2.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

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

function findAddress(obj) {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';

    if (typeof obj !== "object") {
        return 'Please provide a valid object.';
    }
    else{
        return street + ',' + house + ',' + society;
    }
}

function canPay(changeArray, totalDue){
    if (!Array.isArray(changeArray)) {
        return "Please provide a valid Array for the change.";
    }

    if (typeof totalDue !== "number") {
        return "Please provide a valid number for the total due.";
    }

    let totalChange = 0;
    for(let i = 0; i < changeArray.length; i++) {
        totalChange += changeArray[i];
    }
    

    if (totalChange >= totalDue) {
        return true;
    } else {
        return false;
    }
}


// const obj1 = {street: 10, house: '15A', society: 'Earth Perfect'};

// problem-01
console.log(cubeNumber(3)); // Output: 27
// problem-02
console.log(matchFinder("John Doe", "ohn")); // Output: true
// problem-03
console.log(sortMaker([0,8])); // Output: "Invalid Input"
// problem-04
console.log(findAddress({street: 10,  }));
// problem-05
console.log(canPay([1, 2, 5], 10));
