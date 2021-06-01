// імпортуйте всі поліиіли з папки polyfills
// імпортуйте функції sum під такимож іменем, а також як default
// імпортуйте функцію fetchUser із profile/gatway під такимож 
// імпортуйте функцію printProfile із profile/index.js під такимож
import calcExpression, { sum, mult } from "./calculator/index.js";
import fetchUser from "./profile/gateway.js";
import { printProfile } from "./profile/index.js";
import "./polyfills/array-flat.js";
// import "./polyfills/array-flatMap";

const calcResult = calcExpression('1 + 2');
const sumResult = sum(1, 2);
const multResult = mult(1, 2);
const userDataPromise = fetchUser('facebook');
printProfile({ name: 'John', from: "The World" });

// Переконайтесь, що скрипт виконується без помилок 
