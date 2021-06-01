const store = (function () {
    let storage = {};
    return {
        addTime: function (key, value) {
            Object.assign(storage, { key, value })
        },
        clear: function () {
            storage = {};
        }
    }
})();

console.log(store);
console.log(storage);

// (function func() {
//     let a = 27;

//     console.log(a);
// })();
