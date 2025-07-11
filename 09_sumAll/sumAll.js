const sumAll = function(first,second) {

    if (((Number.isInteger(first)) && (Number.isInteger(second))) && ( first > 0 && second > 0 ))

   { let sum = 0;
    let temp = first;
    if (first > second) {first = second ; second = temp}
    for ( let i = first ; i <= second ; i++)
    {
        sum = sum + i;
    }
return sum;}

else { return 'ERROR'}

}

// Do not edit below this line
module.exports = sumAll;
