for (let i = 1; i < 100; i++) {
  if (i % 15 === 0) {
    console.log(`FizzBuzz\x20${i}`);
  }else if(i % 3 === 0) {
    console.log(`Fizz\x20${i}`);
  }else if(i % 5 === 0) {
    console.log(`Buzz\x20${i}`);
  }
}
