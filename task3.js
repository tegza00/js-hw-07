function deleteMinusNumber(arr) {
    const minus = arr.some(number => number < 0);
    if (minus) {
      const plusNumber = arr.filter(number => number > 0);
      return plusNumber;
    } else {
      return "No negative numbers found";
    }
  }
  const arr = [3, -2, 5, 6, -8, 2];
  const result = deleteMinusNumber(arr);
  
  console.log(result);
  
  