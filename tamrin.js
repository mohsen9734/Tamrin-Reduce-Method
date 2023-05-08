function countChars(string) {
    return string.replace(/\s+/g, '').split('')
    .reduce(function (prev, curr) {
        prev[curr] = (prev[curr] || 0) + 1;
        return prev;
    }, {});
}
console.log(countChars('Hello my name is MOHSEN'));