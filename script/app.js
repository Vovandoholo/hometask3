// high order funcrtions: forEach, map, filter, find, reduce, reverse, some, every, sort


// 1.getArraysEqualElementsCount, которая принимает два аргумента - массивы, и возвращает количество одинаковых элементов

function getArraysEqualElementCount(arr1, arr2) {
    return arr1.reduce(function (result, item,i) {

        if (item === arr2[i]) {
            result++;
        }
        return result;
    },0);
}
console.log(getArraysEqualElementCount([5, 6, 7, 8], [5, 6, 7, 8]));

// 2.getArraysNotEqualElementsCount, которая принимает два аргумента - массивы, и возвращает количество  элементов,
//у которых нет пары:

function getArraysNotEqualElementsCount(arr1, arr2) {
    return arr1.reduce(function (result, item, i) {
        if (item !== arr2[i]) {
            result++;
        }
        return result;
    },0);
}
console.log(getArraysNotEqualElementsCount([5, 6, 7, 8], [5, 6, 7, 8]));

// 3.getArraysEqualElementsCountHard, которая принимает два аргумента - массивы, и возвращает количество одинаковых элементов
//но теперь элементы массива могут идти не подряд, а как попало, но функция должна работать правильно
//идешь по arr1 при помощи reduce, результатом указываешь arr2, в результат всегда выпадает arr2, в нем нужно найти значение, если это значение найдено
// то удаляем его с помощью filter и потом count++, это если if, а если else то просто вернуть текущий результат
function getArraysEqualElementsCountHard(arr1, arr2) {
  let count = 0;
      return arr1.reduce(function (result, item) {
        debugger
        let lookingForElement = result.find(function(el) {
          return el === item;
        })
        if (item === lookingForElement) {
          result = result.filter(function(el) {return el !== lookingForElement
          })
          count++;
        };
        return result;
      },arr2);
    }
  console.log(getArraysEqualElementsCountHard([1, 2, 3, 'e', 'e', 'd', 'e', 'e', 'd'], ['a', 'b', 'c', 'd', 'e']));


// let num = [1,2,3,4,5];
// function filterShortNames(arr) {
//   let result = arr.filter(function(num) {
//     if (true) {return true;}
//   });
//   return result;
// }
// console.log(filterShortNames(num))









  /*  let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        for(let k = 0; k < arr2.length; k++) {
            if (arr1[i] === arr2[k]) {
                delete arr1[i];
                delete arr2[k];
                console.log(arr1, arr2)
                count++;
                break;
            }

        }
    }
    return count;*/

/*

// 4.getArrayElementsInARowAmount, которая возвращает количество раз, когда встретились два одинаковых элемента подряд.
function getArrayElementsInARowAmount(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        }
    }
    return count;
}
console.log(getArrayElementsInARowAmount([1, 2, 1, 2]))

// 5.getArrayElementByType, которая принимает 2 параметра - массив и строку, строка  указывает тип элементов, которые должны
//остаться в массиве

function getArrayElementByType(arr, str) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === str) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(getArrayElementByType([1, 'asd', 2, true, false, true, 3], 'boolean'))
console.log(getArrayElementByType([1, 'asd', 2, true, false, true, 3], 'string'))
console.log(getArrayElementByType([1, 'asd', 2, true, false, true, 3], 'number'))



*/
