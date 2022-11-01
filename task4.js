function palindrome(str) {
  //Перевод строки в нижний регистр
  str = str.toLowerCase();
  //Разворот вводимой строки и её сравнение
  return str === str.split('').reverse().join('')
}

//Вывод в консоль
console.log(palindrome('racecar'));
console.log(palindrome('table'));
console.log(palindrome('Поставьте 54 45 етьватсоП'));
