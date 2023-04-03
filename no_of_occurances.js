function occurances(string){
    return string.split('').reduce((map , char) => {
        map[char] = (map[char] || 0) + 1;
        return map;
    },{});
}
console.log(occurances('hello'))