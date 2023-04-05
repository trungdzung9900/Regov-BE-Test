function findTwoElements(arr, target) {
const complements = {};
    
for (let i = 0; i < arr.length; i++) {
  if (complements[arr[i]] !== undefined) {
    return [complements[arr[i]], arr[i]];
}
    
    complements[target - arr[i]] = arr[i];
}
    
    return null; // or throw an error if no solution is found
}
    
// Example usage:
const arr = [2, 7, 11, 10, 3, 15, 44];
const target = 14;
const solution = findTwoElements(arr, target);
console.log(solution); // [11, 3]