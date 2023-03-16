function unique(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(newArray.indexOf(array[i]) === -1){
            newArray.push(array[i]);
        }
       
    }
    return newArray;
}
console.log(unique([1,2,3]))
console.log(unique([1, 2, 2, 3, 4, 3]))
console.log(unique([1, 1, 1, 1, 1, 1]))
module.exports = unique;