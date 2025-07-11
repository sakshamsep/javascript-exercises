const leapYears = function(year) {
    if (year % 4 == 0 ) 
        {
            if ( year % 100 == 0 )
                if (year % 400 == 0 ) return true;
        else return false;
        else return true;
    }
    else return false;//4 100 200
}

// Do not edit below this line
module.exports = leapYears;
