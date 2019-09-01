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
    const currentIndex = initial ? 0 : 1;
    let result = initial ? initial : array[0];

    for (let i = currentIndex; i < array.length; i++) {
        result = fn(result, array[i], i, array);
    }

    return result;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let arr = [];

    for(let key in obj) {
        arr.push(key.toUpperCase())
    }

    return arr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */

function slice(array, from = 0, to = array.length) {
    let newArr = [];

    const length = array.length;
    const endValue = to > length ? length : to;
    const startValue = from < 0 ? length - Math.abs(from) : from;

    let currentIndex = startValue < 0 ? 0 : startValue;
    let lastIndex = endValue < 0 && Math.abs(endValue) < length ? length - Math.abs(endValue) : endValue;

    for (let i = currentIndex; i < lastIndex; i++) {
        newArr = [...newArr, array[i]];
    }

    return newArr;
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