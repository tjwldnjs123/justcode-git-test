function even() {
  let num = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      num.push(i);
    }
  }
  //console.log(num);
  return num;
}
even();
