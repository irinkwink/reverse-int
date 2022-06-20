module.exports = function reverse (n) {
    let result = '' + Math.abs(n);    //toString
    result = result.split('').reverse().join('');  //to array, reverse array and join into string
    result = +result //toNumber (trim '0' in the begin)
    return result;
}
