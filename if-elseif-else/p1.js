// You have a thermometer that measures room temperature. Write an if-elseif condition to determine:

// If the temperature is below 18°C, print "It's too cold, turn on the heater."
// If the temperature is between 18°C and 25°C, print "The temperature is comfortable."
// If the temperature is above 25°C, print "It's too hot, turn on the fan."

let temperature = 40;

if (temperature < 18) {
    console.log("It's too cold, turn on the heater.");
} else if (temperature >= 18 && temperature <= 25) {
    console.log("The temperature is comfortable.");
} else {
    console.log("It's too hot, turn on the fan.");
}