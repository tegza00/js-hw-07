function numbers(arr) {
    let sum = 0;
    for (let number of arr) {
      if (number > 0 && number % 3 === 0) {
        sum += number;
      }
    }
    return sum;
  }
  let arr = [3, 5, -9, 7, 2, 8, 10, -6];
  let sumNumbers = numbers(arr);
  console.log(sumNumbers);
  