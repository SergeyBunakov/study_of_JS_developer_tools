// тут ні які експорти не потрібні

console.log('polyfill for flat');

Array.prototype.flat = Array.prototype.flat || function flat() {
    // ... implementation for older browsers
};