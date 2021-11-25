// Pair Elements

// Challenge 1
// Implement the function pairElements that accepts an array and returns a new array where we pair the first number in an array with the last, the second number with the second to last and so on...

// Notes:

// If the array has an odd length, repeat the middle element twice for the last pair.
// Return an empty array if the input is an empty array.
// Examples:

// pairElements([1, 2, 3, 4, 5, 6, 7]) ➞ [[1, 7], [2, 6], [3, 5], [4, 4]]

// pairElements([1, 2, 3, 4, 5, 6]) ➞ [[1, 6], [2, 5], [3, 4]]

// pairElements([5, 9, 8, 1, 2]) ➞ [[5, 2], [9, 1], [8, 8]]

// pairElements([]) ➞ []

function pairElements(arr) {
    let len = arr.length;
    var finalArr = [];
    if (len == 0) {
        return finalArr;
    }

    else if (len % 2 == 0) {
        for (let i = 0; i < len; i++){
            var tempArray = [];
            tempArray.push(arr[i]);
            tempArray.push(arr[len - 1]);
            len--;
            finalArr.push(tempArray);
        }       
    }

    else {
        for (let i = 0; i <= len-1; i++){
            var tempArray = [];
            tempArray.push(arr[i]);
            if (i == len - 1) {
                tempArray.push(arr[i]);
            }
            else{
                tempArray.push(arr[len-1]);
            }
            len--;
            finalArr.push(tempArray);
        }    
    }
    console.log(finalArr);
    return finalArr;
}

pairElements([5, 9, 8, 1, 2]);
pairElements([1, 2, 3, 4, 5, 6]);
pairElements([1, 2, 3, 4, 5, 6, 7]);
pairElements([]);