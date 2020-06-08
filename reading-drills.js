//Drills for Thinkful Big O section

// Constant time example
const getRandomItem = (array) => {
  let ticks = 0;
  const item = array[Math.floor(Math.random() * array.length)];
  ticks++;
  return { result: item, ticks };
};
// console.log(getRandomItem([1, 2, 3]));
// console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Linear time example
const sum = (array) => {
  let sum = 0,
    ticks = 1;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    ticks++;
  }
  return { result: sum, ticks };
};

// console.log(sum([1, 2, 3]));
// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Logarithmic time example
const howManyLessThanNitems = (arr, n) => {
  let ticks = 0;
  /* If the 1st element in the array is greater than `n`, return 0,
       because no items in the array are less than `n`. */
  if (!arr.length || arr[0] >= n) {
    ticks++;
    return 0;
  }
  let lowIndex = 0;
  highIndex = arr.length;

  while (highIndex > lowIndex) {
    // find midpoint
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    /* If `midIndex` element is greater than `n`, that means all elements
           to the right of `midIndex` are also greater than `n`, so
           we only need to focus on elements to the left of `midIndex`.
           We set `highIndex` to the current value of `midIndex` so next time
           through the loop, we'll only look at the left half */
    if (arr[midIndex] >= n) {
      highIndex = midIndex;
      ticks++;
    } else if (arr[midIndex + 1] < n) {
      /* If the element to the right of `midIndex` is less than `n`, then we
           know that we need to check the items to the right of `midIndex`, so
           we set `lowIndex` to the current value of `midIndex`, so that next
           time through the loop we only look at the right side */
      lowIndex = midIndex;
      ticks++;
    } else {
      ticks++;
      return {
        result: midIndex + 1,
        ticks,
      };
    }
  }
};
// helper fucntion to make a sequence of numbers
const makeSequence = (num) => {
  // Array.from creates a new shallow-copied Array instance from an interable object.
  // It also takes a second argument which is a map function
  return Array.from(Array(num), (x, idx) => idx + 1);
};
// test the O(logN) function
// console.log(howManyLessThanNitems([1, 2, 3], 2));
// let array = makeSequence(100);
// console.log(howManyLessThanNitems(array, 99));

// Polynomial time example
const hasDuplicates = (array) => {
  let ticks = 0,
    result = false;
  for (let i = 0; i < array.length; i++) {
    ticks++;
    for (let j = 0; j < array.length; j++) {
      ticks++;
      if (array[i] === array[j] && i !== j) {
        result = true;
      }
    }
  }
  return {
    result,
    ticks,
  };
};

// console.log(hasDuplicates([1, 2, 2]));
// console.log(hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));

// Exponential time example
const countTriangle = (layers) => {
  let ticks = 1,
    count = 0,
    layer = 0,
    lastLayer = 1;
  while (layer < layers) {
    ticks++;
    let newLayer = 0;
    for (let i = 0; i < lastLayer; i++) {
      ticks++;
      newLayer += 2;
    }
    lastLayer = newLayer;
    count += lastLayer;
    layer++;
  }
  return {
    result: count,
    ticks,
  };
};
console.log(countTriangle(2));
console.log(countTriangle(4));
console.log(countTriangle(16));
