function splitAtX(string){
    for(let i = 0; i <= string.length; i++){
        //console.log(string[i])
        if (string[i] == 'x'){
            //console.log(i)
            const before = string.slice(0,i)
            const after = string.slice(i+1,string.length)
            if (before.length > after.length){
                return before
            } else {
                 return after
            }

        }
    }

    //console.log(spx);
}
console.log(splitAtX('Happyxdays'))
console.log(splitAtX('The value of x is the center'))

module.exports = splitAtX