function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var number = 10;
if (isEven(number)) {
  console.log(number + " is even.");
} else {
  console.log(number + " is not even.");
}
