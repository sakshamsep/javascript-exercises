const convertToCelsius = function(tempInFahrenheit) {
  let celsius = (5/9)*(tempInFahrenheit - 32 );
  return  Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(tempInCelsius) {
  let fahrenheit = ((9/5*tempInCelsius) + 32 )
  return  Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
