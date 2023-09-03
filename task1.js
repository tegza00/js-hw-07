function smaller(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      const number = arr[i];
      if (number > 10 && number % 2 === 0) {
       result.push(number);
      }
    }
    return result;
  }
  const arr1 = [5, 14, 8, 20, 3, 11, 17, 4];
  const result = smaller(arr1);
  console.log(result);
  