function findFirstNonRepeating(str) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        const currChar = str[i];
        charCount[currChar] = charCount[currChar] + 1 || 1;
    }
    for (let i = 0; i < str.length; i++) {
        const currChar = str[i];
        if (charCount[currChar] === 1) {
            return i;
        }
    }
    return -1;
}
console.log(findFirstNonRepeating("sseemless")); // Output: 4