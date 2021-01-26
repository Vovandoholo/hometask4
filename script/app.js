//1.написать функцию  filterFalsyValues, которая принимает массив и возвращает массив без '', null, NaN, false, undefined, 0:
function filterFalsyValues(arr) {
  return arr.filter(function(el) {
   if (el === '') {return false;}
   if (el === null) {return false;}
   if (el === false){return false;}
   if (el === undefined) {return false;}
   if (el === 0) {return false;}
   if( Number.isNaN(el)){return false;}
   else {return true;}
  });
}
console.log(filterFalsyValues([5, 'asd', 'false', true, false, null, NaN, undefined,0]))//[5, 'asd', 'false', true]

// 2.написать функцию getMultipliedBigNumbers, которая принимает один прараметр  - массив чисел, и умножает  каждое число в массиве  само
// на себя, и возвращает массив с числами  больше 1000:

function getMultipliedBigNumbers(arr) {
  let newArr = [];
     arr.reduce(function(result, item, i){
       let res = item * arr[i];
      if (res > 1000 ) {
        return newArr.push(res)
      };
      return result;
  },arr);
  return newArr;
}
console.log(getMultipliedBigNumbers([7, 12, 20, 50, 70, 100]))//[2500, 4900, 10000]

//3.написать функцию getArraysValuseSum ,которая принимает  массив, и возвращает сумму всех чисел в массиве, если элемент массива
// не число, а строка, то суммирует  кол-во букв в строке:

function getArraysValuseSum(arr) {
  let newArr = [];
  arr.reduce(function(result,item) {
    if (typeof(item) === 'string') {
      return newArr.push(item.length);
    } else if (typeof(item) === 'number') {
      return newArr.push(item);
    }
   },arr);
   newArr = newArr.reduce(function(result, item) {
     return result + item;
   })
return newArr;
}
console.log(getArraysValuseSum(['asdasd'])); //6
console.log(getArraysValuseSum(['400', 400])); //403
console.log(getArraysValuseSum(['100','100'])); //6
console.log(getArraysValuseSum([5, 100, 20])); //125
console.log(getArraysValuseSum([200, -100, 100, 1000])); //1200

//4.написать функцию reverseArray , которая разворачивает массив. Если в массиве больше 5-ти элементов, то функция должна вернуть исходный
//массив. Использовать можно только цикл for:
function reverseArray(arr) {return arr.reverse();}

console.log(reverseArray([5, 12, 17])) //[17, 12, 5]
console.log(reverseArray([5, 12, 17, 18, 20])) //[20, 18, 17, 12, 5]
console.log(reverseArray([5, 12, 17, 18, 20, 21])) //[21, 20, 18, 17, 12, 5]
