//1  Write a function splitAndMerge
function splitAndMerge(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(' ');
    for (var i = 0; i < arrayOfStrings.length; i++) {
        arrayOfStrings[i]=arrayOfStrings[i].split('').join(separator);
    }
    return arrayOfStrings.join(' ');
}
console.log(splitAndMerge("Hello World!", ','));

//2 Convert a hash into an array. 
function convert(obj) {
    var array = [];
    for (i in obj) {
        array.push([i, obj[i]]);
    }
    return array;
}
console.log(convert({ name: 'Jeremy', age: 24, role: 'Software Engineer' }));

//3  Function that converts dash/underscore delimited words into camel casing
function toCamelCase(str) {
    str = str.split('');
    var newStr = [];
    str.map(function(el, i) {
        if (el == '-' || el == '_') {
            el = str[i + 1].toUpperCase();
            str.splice(i + 1, 1);
        }
        newStr.push(el);
        return el;
    });
    str = newStr.join('');
    return str;
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));

//4 Function that takes a sentence (string) and reverses each word in the sentence
function reverseStr(stringToReverse) {
    var resultArray = [];
    var arrayOfStrings = stringToReverse.split(' ');
    for (var i = 0; i < arrayOfStrings.length; i++) {
        var reverseWord = arrayOfStrings[i].split('').reverse();
        resultArray.push(reverseWord.join(''));
    }
    return resultArray.join(' ');
}
console.log(reverseStr('Hello world!'));

//5 Write a function stringExpansion
function stringExpansion(str) {
    var newStr = "",
        number = /\d/,
        letter = /[A-z]/;
    if (!str.match(number)) {
        return str;
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(number) && str[i + 1].match(letter)) {
            for (var j = 0; j < str[i]; j++) {
                newStr += str[i + 1];
            }
        }
    }
    return newStr;
}
console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));

//6  Functions that returns the largest and smallest number passed like an argument
function largest() {
    var max = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

function smallest() {
    var min = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}
console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));

//7  function  that transform array of numbers to array of functions that will return value from a base array
function transform(arr) {
    return arr.map(function(el) {
        return function() {
            return el;
        }
    });
}
var baseArray = [10, 20, 30, 40, 50];
var newArr = transform(baseArray);
console.log(newArr[3]());
console.log(newArr[4]());

//8 Function expects arbitrary number of digit arguments and returns compound value of them
function sum() {
    var arr = [].slice.call(arguments);
    if (arr.length == 1) {
        return arr[0];
    }
    return arr[0] + sum.apply(null, arr.slice(1));
}
console.log(sum(1, 3, 5, 7));

//9 Function expects number and logs values one by one till zero with one second delay
function countDown(number) {
    var timer = setInterval(function() {
        if (number < 0)
            clearInterval(timer);
        else {
            console.log(number);
            number--;
        }
    }, 1000);
}
countDown(3);

//10 Write a polyfill for a .bind() function and save it in Function.prototype.myBind()
Function.prototype.myBind = function(context) {
    var func = this;
    return function() {
        return func.apply(context, arguments);
    }
}

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1));
