function FizzBuzz(num) {
  for(let i = 1; i <= num; i++){
    //Проверка если число делится на 3 и на 5 одновременно
    if(i % 3 === 0 && i % 5 === 0) {
      //Выводим в консоль FizzBuzz
      console.log('FizzBuzz')
    }
    //Проверка если число делится только на 3
    else if (i % 3 === 0) {
      //Выводим в консоль Fizz
      console.log('Fizz')
    }
    //Проверка если число делится только на 3
    else if (i % 5 === 0) {
      //Выводим в консоль Buzz
      console.log('Buzz')
    }
    else {
      //Если ничего не выполняется - выводим просто значение i
      console.log(i)
    }
  }
}

FizzBuzz(3);
FizzBuzz(5);
FizzBuzz(15);
