function topDouble(value, top) {
    while (value < top){
        value = value * 2;
        if(value < top){
            continue;
        }else{
            value = value / 2;
            break;
        }
    }
    return value;
}
console.log(topDouble(5,100))
console.log(topDouble(1,5))
console.log(topDouble(8,300))
console.log(topDouble(25,50))


//module.exports = topDouble(1,5)