const repeatString = function(str,num) {
    if (num < 0)
    {
        return 'ERROR';
    }
    else {
    let final = ""
    for ( let i = 0 ; i < num ; i++)
    {
        final = final + str;
    }
    return final;
    }
}

// Do not edit below this line
module.exports = repeatString;
