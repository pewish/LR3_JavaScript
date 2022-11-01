//Если мы умножим случайное число от 0…1 на max-min, 
//тогда интервал возможных значений от 0..1 увеличивается до 0..max-min.
//И, если мы прибавим min, то интервал станет от min до max.
function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
