function addOne(array) {
    const arr = [];
    let array1 = array;
    if(array.length === 1){
        return array1[0] + 1
    } 
    else {
        for(let i = 0; array1.length; i++){
        arr.push(array1[i] + 1);
        
        }
        
    }
    return arr;
}
console.log(addOne([2,3]));
module.exports = addOne;