const fibonacci = function(num) {

   
    const array = [];
    array[0] = 0;
    array[1] = 1;
    for ( let i = 2 ; i <= num ; i++)
    {
        array[i] = array[i-2] + array[i-1];
    }

    if ( num < 0) return "OOPS";
return array[num] ;
};

// Do not edit below this line
module.exports = fibonacci;
