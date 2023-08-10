function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please provide two strings as input.';
    }

    if (string1.toLowerCase().includes(string2.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

// console.log(matchFinder("John Doe", "ohn")); // Output: true
// console.log(matchFinder("JavaScript", "sc")); // Output: false
// console.log(matchFinder("Peter Parker", "Pen")); // Output: false
// console.log(matchFinder("Peter Parker","pet")); // Output: true
