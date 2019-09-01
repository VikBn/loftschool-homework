/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn, thisArg) {
    for (let i = 0; i < array.length; i++) {
        fn.call(thisArg, array[i], i, array);
    }

    /* Еще один вариант
     for (let [index, key] of array.entries()) {
         fn( key, index, array);
     }
     */
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn, thisArg) {
    let arr = [];

    for (let i = 0; i < array.length; i++) {
        arr.push(fn.call(thisArg, array[i], i, array));
    }

    return arr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let result = initial <= 0 ? initial : initial || array[0];

    console.log('result', result);
    console.log('initial', initial);

    for (let i = 0; i < array.length; i++) {
        console.log('beforeResult', result);
        result = fn(result, array[i], i, array);
        console.log('array[i]', array[i]);
        console.log('afterResult', result);
        console.log('------------');
    }

    return result;
}

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);
let result1 = reduce(arr, (sum, current) => sum + current, 0);

console.log('resultReduce', result);
console.log('result1Reduce', result1);

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let arr = [];

    for(let key in obj) {
        arr.push(key)
    }

    return arr.map(item => item.toUpperCase());
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to = array.length) {
    let arr = [];

    let fromMin = from < 0 ? array.length - Math.abs(from) : from;
    let toMin = to < 0 ? array.length - Math.abs(to) : to;

    for (let i = fromMin; i < toMin; i++) {
        arr.push(array[i]);
    }

    return arr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    // createProxy
};