const removeFromArray = function(array,removeItem) 

{
    
   for ( let i = 0 ; i < array.length ; i++){
     let index = array.indexOf(removeItem);


       while ( index != -1)
       { array.splice(index,1);
        index = array.indexOf(removeItem);}
   }
return array;
}
// Do not edit below this line
module.exports = removeFromArray;
