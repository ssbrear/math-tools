// Buttons
var lcm = document.querySelector("#lcm-btn");
var gcf = document.querySelector("#gcf-btn");
var square = document.querySelector("#square-btn");
var squareRoot = document.querySelector("#square-root-btn");

// Text Fields
var userInput = document.querySelector("#num-input")
var userOutput = document.querySelector("#num-output")

// Input
var inputNum = 0

// Button Listeners

// Both LCM and GCF are computed in a similar manner, so comments are only included for LCM.
// LCM and GCF are computed by using what is referred to as the "cake method".
lcm.addEventListener("click", function() {
    if (userInput.value.indexOf(",") < 0) {
        userOutput.value = userInput.value
    }
    else {
        // Splits the user input into an array of strings, one for each number
        var str = userInput.value.split(",");

        // Initializes variables
        var answer = 0;
        var lower = 0;
        var upper = 0;
        var done = 0;

        // Determines the lower and upper bounds of the inputs
        if (str[0] < str[1]) {
            lower = parseInt(str[0]);
            upper = parseInt(str[1]);
        }
        else {
            upper = parseInt(str[0]);
            lower = parseInt(str[1]);
        }

        // Set to 1 so common factors can be accumulated multiplicatively
        answer = 1;

        // Loop for each possible factor starting at 2
        for (let i = 2; i <= lower; i++) {
            // "done" and "while" are included such that a factor can be included multiple times if necessary.
            // Theoretically, the only numbers that need to be tested for factors are all of the prime numbers below the lower bound of inputs. This is more sloppy and inefficient.
            done = 0;
            while (done != 1) {
                if ((upper % i == 0)&&(lower % i == 0)) {
                    upper = upper / i;
                    lower = lower / i;
                    answer = answer * i;
                }
                else {
                    done = 1;
                }
            }
            
        }

        userOutput.value = answer * lower * upper;
        
    }
})
gcf.addEventListener("click", function() {
    if (userInput.value.indexOf(",") < 0) {
        userOutput.value = userInput.value
    }
    else {
        var str = userInput.value.split(",");
        var answer = 0;
        var lower = 0;
        var upper = 0;
        var done = 0;
        if (str[0] < str[1]) {
            lower = parseInt(str[0]);
            upper = parseInt(str[1]);
        }
        else {
            upper = parseInt(str[0]);
            lower = parseInt(str[1]);
        }

        answer = 1;

        for (let i = 2; i <= lower; i++) {
            done = 0;
            while (done != 1) {
                if ((upper % i == 0)&&(lower % i == 0)) {
                    upper = upper / i;
                    lower = lower / i;
                    answer = answer * i;
                }
                else {
                    done = 1;
                }
            }
            
        }

        userOutput.value = answer;
    }
})
square.addEventListener("click", function() {
    inputNum = parseFloat(userInput.value);
    userOutput.value = Math.pow(inputNum, 2);
})
squareRoot.addEventListener("click", function() {
    inputNum = parseFloat(userInput.value);
    userOutput.value = Math.pow(inputNum, 0.5);
})