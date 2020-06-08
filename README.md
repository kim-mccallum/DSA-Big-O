# Data Structures & Algorithms

1. What is the Big O for this?

1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

`This is O(1) as in theory, if you yell loud enough, it would take the same amount of time no matter how many people are in the room`

2. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

`This is O(N) as the time will increase linearly with the number of people`

2. Even or odd
   What is the Big O of the following algorithm? Explain your answer

```
   function isEven(value) {
      if (value % 2 === 0) {
         return true;
      } else
      return false;
      }
   }

```

`This is constant time, O(1), as it involves a simple mathematical operation and the function is called only once`

3. Are you here?
   What is the Big O of the following algorithm? Explain your answer.

```
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```

`This snippet is an example of polynomial time as the two for loops means it wil run at O(N^2).`

4. Doubler
   What is the Big O of the following algorithm? Explain your answer

```
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```

`This snippet is another example of O(N) as each iteration of the loop is one step and the arithmetic is negligible. The time will increase linearly with the size of the input array`

5. Naive search
   What is the Big O of the following algorithm? Explain your answer

```
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```

`This snippet is another example of linear time. The loop will run once however each item is also checked so it is O(2N) but constants are ignored so it is O(N)`

6. Creating pairs:
   What is the Big O of the following algorithm? Explain your answer

```
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```

`Another example with two (nested) for loops. Time complexity increases exponentially depending on inputs and this algorithm is O(N^2)`

7. Compute the sequence
   What does the following algorithm do? What is its runtime complexity? Explain your answer

```
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
```

`This algorithm computes the Fibonacci sequence from 1 up to the input number. The loop will run only one time even though its referencing the saved values from previous iterations. This version has a time complexity of O(N).`

8. An efficient search
   In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

```
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```

`This is an example of O(log(N)). As with each iteration, the size of the input is cut in half.`

9. Random element
   What is the Big O of the following algorithm? Explain your answer

```
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

`This is an efficient O(1) and runs at a constant time as it takes only one step to access the array item and multiply it by the constant`

10. What Am I?
    What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

```
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
```

`This algorithm determines whether n is a prime number or not. It will run n times for each and is therefore O(N).`
