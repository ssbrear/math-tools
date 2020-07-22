// Container
var con = document.querySelector("#math-tool")

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

// Error
var errorMsg = document.querySelector("#error");

// Button Listeners

// Both LCM and GCF are computed in a similar manner, so comments are only included for LCM.
// LCM and GCF are computed by using what is referred to as the "cake method".
lcm.addEventListener("click", function() {
    errorMsg.style.display = "none"
    if (userInput.value.indexOf(",") < 0) {
        errorMsg.style.display = "inline-block"
        return;
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

        // "done" and "while" are included such that a factor can be included multiple times if necessary.
        // Checks for all prime factors of 2 so I don't have to check even numbers in the for loop
        done = 0;
        while (done != 1) {
            if ((upper % 2 == 0)&&(lower % 2 == 0)) {
                upper = upper / 2;
                lower = lower / 2;
                answer = answer * 2;
            }
            else {
                done = 1;
            }
        }

        // Loop for each possible odd factor starting at 3
        for (let i = 3; i <= (lower/2); i += 2) {
            // Theoretically, the only numbers that need to be tested for factors are all of the prime numbers below half of the lower bound.
            // Unfortunately, the only code I can think of that can determine a list of all of the possible prime numbers could theoretically
            // be almost as memory intensive as brute forcing all odd numbers
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
});
gcf.addEventListener("click", function() {
    errorMsg.style.display = "none"
    if (userInput.value.indexOf(",") < 0) {
        errorMsg.style.display = "inline-block"
        return;
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

        done = 0;
        while (done != 1) {
            if ((upper % 2 == 0)&&(lower % 2 == 0)) {
                upper = upper / 2;
                lower = lower / 2;
                answer = answer * 2;
            }
            else {
                done = 1;
            }
        }

        for (let i = 3; i <= (lower/2); i += 2) {
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
});
square.addEventListener("click", function() {
    errorMsg.style.display = "none"
    if (userInput.value.indexOf(",") >= 0) {
        errorMsg.style.display = "inline-block"
        return;
    }
    inputNum = parseFloat(userInput.value);
    console.log(inputNum);
    userOutput.value = Math.pow(inputNum, 2);
});
squareRoot.addEventListener("click", function() {
    errorMsg.style.display = "none"
    if (userInput.value.indexOf(",") >= 0) {
        errorMsg.style.display = "inline-block"
        return;
    }
    inputNum = parseFloat(userInput.value);
    userOutput.value = Math.pow(inputNum, 0.5);
});

window.addEventListener("resize", function() {
    if ((window.innerWidth <= 767)&&(con.className == "container")) {
        con.classList.remove("container");
        con.classList.add("container-fluid");
    }
    else if ((window.innerWidth > 767)&&(con.className == "container-fluid")){
        con.classList.remove("container-fluid");
        con.classList.add("container");
    }
});