//Part 1

function biggerNumber(a, b) {
  if (a > b) {
    // console.log(a);
    return a
  } else {
    // console.log(b);
    return b
  }
}

biggerNumber(7, 11);

//Part 2

function numberSquares(n) {
  if (n == 0) {
    console.log(1);
  } else {
    let arr = [];
    for (let a = 1; a <= n; a++) {
      let b = a * a;
      arr.push(b);
    }

    let total = 0;
    for (let i in arr) {
      total += arr[i];
    }
    return total;
  }
}

numberSquares(10);

//Task 2

exports = { biggerNumber, numberSquares };
