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

`Another example with two (nested) for loops. This algorithm is O(N^2)`
