console.log(5 > 4);                 //  true    Сравнение по значению   
console.log("ананас" > "яблоко");   //  false   Происходит сравнение посимвольно Unicode
console.log("2" > "12");            //  true    Первый символ у левого операнда больше, чем первый у правого
console.log(undefined == null);     //  true    Значения операндов равны
console.log(undefined === null);    //  false   Значения операндов равны, но типы различны
console.log(null == "\n0\n");       //  false   NULL может быть равен только undefined 
console.log(null === +"\n0\n");     //  false   Сравниваются разные типы
