//Вспомогательная функция
function func1(str) {
  const charObj = {}
  for (let char of str.replace(/[^\w]/g).toLowerCase()) {
    //Если у объекта уже есть пара ключ-значение,
    //равная зацикливаемому значению - увеличиваем
    //значение на 1, в противном случае добавляем зацикленную букву
    //в качестве ключа и 1 в качестве её значения
    charObj[char] = charObj[char] + 1 || 1
  }
  return charObj
}

//Главная функция
function anagram(strA, strB) {
  //Определение объекта, который 
  const aCharObj = func1(strA)
  const bCharObj = func1(strB)
  if(Object.keys(aCharObj).length !== Object.keys(bCharObj).length){
    return false
  }
  for (let char in aCharObj) {
    if(aCharObj[char]!== bCharObj[char]) {
      return false
    }
  }
  return true
}

//Вывод в консоль
console.log(func1('hello'));
console.log(func1('why'));
console.log(func1('Marina'));
