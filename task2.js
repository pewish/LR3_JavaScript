function checkSpam(str) {
        //По заданию нужно "поймать" слова с viagra и с xxx, поэтому объявим такие переменные
        var firstWord = 'viagra';  //Объявление символьной переменной
        var secondWord = 'xxx'; //Объявление символьной переменной
        var string = str.toLowerCase(); //Возвращение значения строки, преобразованное в нижний регистр
        var result; //Сюда будем записывать вводимые слова

        if (checkTheWord(firstWord) || checkTheWord(secondWord)) {
            return true;
        }
        return false;

        function checkTheWord(word) { //Создадим функцию для проверки слова
            for (var i = 0; i < string.length - 1; i++) { //Проходим по массиву (string.length - длина слова)
                if (string[i] == word[0]) { //"Побуквенно" сравниваем
                    result = string.slice(i, i + word.length); //slice() возвращает новый массив, содержащий копию части исходного массива
                    if (result == word) {
                        return true;
                    }
                }
            }
        }
    }

//Вывод в консоль
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));
