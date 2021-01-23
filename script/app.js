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
//нужно находить индекс, вместо find делать findIndex, если Index найден, то необходимо удалить элемент по индексу

function getArraysEqualElementsCountHard(arr1, arr2) {
  let length = arr2.length;
    arr1.reduce(function (result, item) {

    let lookingForElement = result.findIndex(function(el) {
      return el ===item;
    })
    if (lookingForElement !== -1) {
      result.splice (lookingForElement,1);
    }
    return result;
  },arr2);
return length - arr2.length ;
}

console.log(getArraysEqualElementsCountHard([1, 1, 1, 'e', 'e', 'd', 'e', 'e', 'd'], [1,1,1,1,1,1,1,1,1,1,'e','a', 'b', 'c', 'd', 'e']));

// 4.getArrayElementsInARowAmount, которая возвращает количество раз, когда встретились два одинаковых элемента подряд.
function getArrayElementsInARowAmount(arr) {
  let count = 0;
  arr.reduce(function(result, item, i) {
// debugger
    if (item === arr[i - 1]) {
      count++;
    };
    return result;
  },arr);
  return count;
}
console.log(getArrayElementsInARowAmount([1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7]))

// 5.getArrayElementByType, которая принимает 2 параметра - массив и строку, строка  указывает тип элементов, которые должны
//остаться в массиве

function getArrayElementByType(arr, str) {
  return arr.reduce(function(result,item) {
    if (typeof(item) === str) {
      result = result.filter(function(el){
        if (typeof(el) === str) {
          return true
        }
      });
    }
    return result;
  },arr);
}
console.log(getArrayElementByType([1, 'asd', 2, true, false, true, 3], 'boolean'))
console.log(getArrayElementByType([1, 'asd', 2, true, false, true, 3], 'string'))
console.log(getArrayElementByType([1, 'asd', 2, true, false, true, 3], 'number'))
