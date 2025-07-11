const palindromes = function (string) {

    string = string.toUpperCase();
   const array = string.split("");
   
   while ( array.indexOf(",") + array.indexOf(".") + array.indexOf(" ") + array.indexOf("!")!= -4)
   {
    if ( array.indexOf(",") != -1)
        array.splice(array.indexOf(","),1)

    if ( array.indexOf("!") != -1)
        array.splice(array.indexOf("!"),1)
   

   if ( array.indexOf(" ") != -1)
        array.splice(array.indexOf(" "),1)

   if ( array.indexOf(".") != -1)
        array.splice(array.indexOf("."),1)
}
   const oldstring = array.join("");
   const newstring = array.reverse();
   const newwstring = newstring.join("");
 

   if (oldstring == newwstring)
return true;
else return false;};

// Do not edit below this line
module.exports = palindromes;
