// Задание 3. 

// Вариант 1

/*  function sumNum(firstnum){
 return function(secondNum){
  debugger
  return firstnum + secondNum
 }
  }
  console.log(sumNum(3)(2)); */

// Вариант 2 

/*  function checkNum(firstnum){
 return function(secondNum){
  console.log(firstnum + secondNum)
 }
  }
  const resultNums = checkNum(4);
  resultNums(6) */

// Вариант 3 (короткий)

/* const sumNum = (firstnum) => (secondNum) => firstnum + secondNum
console.log(sumNum(5)(2));  */

// Неправильный вариант(но сперва по логике думал, что верно)

/*   function firstNum(num){
  const func = (a) => {
    return console.log(a + num)
  }
  func(num)
  }
  firstNum(5) */

// Написать функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
// Выведите в консоль результат.
