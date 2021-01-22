// //Array
//
// //безымянная функция объявленная через переменную:
//
// let func = function () {};
//
// // стрелочная функция:
//
// let myFunc = () => {
//     console.log();
// }
// let count = 0;
// //циклы и функции
//
// // function loopFun() {
// //
// //     for (let i = 0; i < 100; i++) {
// //         count++;
// //     }
// // }
// //
// // for (let i = 0; i < 100; i++) {
// //     console.log(loopFun());
// // }
// // console.log(count)
//
// //методы работы с иклами : for, forEach, map, filter, find, reduce, reverse, some, every, sort
//
// //forEach:
// let names = ['Vladimir','Pussyboy','Andrew','Nick',]
//
// function getBiggestName(arr) {
//     arr.forEach( function (currentItem, index, currentArr){// чаще всего эти методы принимают в качестве настройки функцию.
//         //в данном случае это - функция настройка, которая принимает текущий жлемент, индекс, и текущий массив.
//         console.log(currentItem)// arr[i], index, currentArr)
//     });
// }
// console.log(getBiggestName(names))
// // forEach работает так же, как метод фор
//
//
//
// //map
// function duplicateArrItem(arr) {
//     let result = arr.map( function (currentItem){// в большинстве случаев достаточно currentItem, без индекса и массива
//         return currentItem + currentItem;
//     });
//     return result;// currentItem продублируется 'VladimirVladimir',..
// }
//
// console.log(duplicateArrItem(names))
// // метод мар ртвечает за модификацию каждого элемента
// // бонус - не нужно создавать новый массив для модификации элементов старого массива
// // для поиска самого длинного слова в массиве подошел бы forEach
//
// function filterShortName(arr) {
//     let result = arr.filter(function (name){//name как Item массива names
//         return name.length < 3;//if true item leave in array, false - get rid
//     });
//     return result;
// }
//
// console.log(filterShortName(names))
//
// //find
// function findItem(arr) {
//     let result = arr.find(function (name) {//name как Item массива names
//         return true//как только функция вернет true все остановиться, т.к он посчитает, что искомый элемент найден.
//     });
//     return result;// ДО ТЕХ ПОР, пока false будет проходить по новой
// }
//
// console.log(findItem(names))
//
//
// //пример работы с .map  & .filter
// function makeSurnameFromName(names ) {
//     let surnames = names.map(function (name){
//         return name + 'ievich'
//     });
//     let filterSurnames = surnames.filter(function(surname){
//         return surname.length > 10;
//     });
//     return filterSurnames;
// }
// console.log(makeSurnameFromName(names))
//
//
//
//
// // еще вариант :
//
//
//
//
// function makeSurnameFromNames(names ) {
//     let  makeSurnamesFromName = function (name) {
//         return name + 'ievich';
//     };
//     let surnameBiggerThen10 = function(surname){
//         return surname.length > 10;
// }
//     let surnames = names.map(makeSurnamesFromName);
//
//     let filteredSurnames = surnames.filter(surnameBiggerThen10);
//
//     return filteredSurnames;
// }
// console.log(makeSurnameFromNames(names))
//
// // и еще такой вариант
// function makeSurnameFromNames(names ) {
//     let  makeSurnamesFromName = function (name) {
//         return name + 'ievich';
//     };
//     let surnameBiggerThen10 = function(surname){
//         return surname.length > 10;
//     }
//     let surnames = names.map(makeSurnamesFromName);
//
//     let filteredSurnames = surnames.filter(surnameBiggerThen10);
//
//     return filteredSurnames;
// }
// console.log(makeSurnameFromNames(names))
//
// // стрелочная функция
// let getNames2 = function (name) {return name}
// let getName = (name) => name;
// // если необходима логика, то в скобочках дописываем ее
// let getNames3 = function (name) {
//     return name;
// }
//
// //вот такую запись для читабильности лучше заменить стрелочными фунциями
//
// function blaBlaBla(names) {
//     return names.map(function (name) {
//         return name + 'ievich';
//     }).filter(function (surname) {
//         return surname.length < 10;
//
//     });
// }
// console.log(blaBlaBla(names));
// //
// function blaBlaBla(names) {
//     return names.map(() => name + 'ievich').filter( (surname) => surname.length < 10);
// }
// console.log(blaBlaBla(names));
// //
//
// //а можно еще вот так написать, вообще просто
// let  blaBlaBla = (names) => names.map((name) => name + 'ievich').filter( (surname) => surname.length < 10);
// //вообще лаконично
//
// console.log(blaBlaBla(names));
//
// //reduce
// let result = [];
// function countArrayLettersAmount(names) {
//
//     return arr.reduce(function (result, item, index, arr){// первый параметр - result
//         return result;// должен дать ноль, так как он прошелся по именам, ничего не сделал
//     })
//     //arr.reduce(func, result) принимает
// }
// console.log(countArrayLettersAmount())
//
// //переделать задание через новые методы
// //переделать все задачи с помощью reduce
// //delete не использовать
// //delete работает только в цикле for

//Vladilen Minin:
//forEach
    let people = [
        { name: 'Владилен', age: 25, budget: 40000 },
        { name: 'Елена', age: 17, budget: 3400 },
        { name: 'Игорь', age: 49, budget: 50000 },
        { name: 'Михаил', age: 15, budget: 1800 },
        { name: 'Василиса', age: 24, budget: 25000 },
        { name: 'Виктория', age: 38, budget: 2300 },
        ];
for (let i = 0; i < people.length; i++) {
    console.log(people[i])// выводиться отдельный объект синтаксис es5
}

// цикл for of
for (let person of people) {
    console.log(person);// получим тожже самое, es6
}

//метод .forEach;
//данный метод принимает в параметр функцию. Функция в свою очередь принимает 3 параметра,
//1-ый в данном случае объект данного массива
//2-й  некоторый индекс
//3-й сам массив, с которым мы работаем, в данном случае массив people
// people.forEach(function (person,index, pArr) {// данная запись намного лаконичнее, сейчас укоротим еще
//     //запись в синтаксисе es5
//     console.log(person);
//     console.log(index);
//     console.log(pArr);
// })
// people.forEach(function (person) {//  намного лаконичнее, индекс и массив редко используется
//     //запись в синтаксисе es5
//     console.log(person);
// })

people.forEach(person => console.log(person));//  намного лаконичнее, индекс и массив редко используется
    //запись в синтаксисе es6

//метод .map
// похож на forEAch, но работает чуть по-другому,
// хорош тем, что мы можем как угодно изменять данные и аносить их
// в новый результирующий массив
// let newPeople = people.map(person => {
//     return person;// если мы вместо person будем возвращать строчку 'hello', то получим массив, в котором все объекты заменяны на
//     //строку 'hello'
//     // если написать return person.name вернуться все имена
//     // если вся логика состоит из одного стейтмента return, то можно написать в одну строку, убрав фигурные скобки
//     // если вернуть return person.age * 3 - получим возраста, умноженные на 3
// })
// console.log(newPeople)

//метод .filter
// служит для того, чтобы отфильтровать по какому липо признаку массив.
// например, нам нужно получить массив состоящий из людей, которым старше 18 лет
//при помощи for было бы так
// const adults = [];
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i]);
//     }
// }

//при помощи .filter выглядит следующим образом:
//он принимает три параметра элемент, индекс,массив
const adults = people.filter(person => {
    if (person.age >=18) {
        return true;
    }
})
//метод reduce служит для того, чтобы получить элемент после прохождения по массиву
/*
let amount = 0;
for (let i = 0; i < people.length; i++) {
    amount += people[i].budget;
}
console.log(amount)
*/
/*const amount = people.reduce((total, person) => {

},0)*/
                            //первый параметр это callback,который принимает в себя так же два параметра: 1)total, 2) итерируемый элемент у массива. а второй параметр у редьюс
                            //начальное значение переменной total// )

const amount = people.reduce((total, person) => {
    return total + person.budget;
},0);
console.log(amount);