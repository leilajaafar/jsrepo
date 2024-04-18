function performOperation() {
// Get user input from input fields
let num1 = parseInt(document.getElementById('input1').value);
let num2 = parseInt(document.getElementById('input2').value);
// Check if inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
// Perform the operation
                let result = multiply(num1, num2);

                // Display the result
                displayResult(result);
            } else {
                displayResult('Please enter valid numbers');
            }
        }

        function multiply(a, b) {
            // Introduce a debugger statement to pause execution
            debugger;

            // Multiply the numbers
            return a * b;
        }

        function displayResult(result) {
            // Display the result in the paragraph element
            const resultElement = document.getElementById('result');
            resultElement.textContent = `The result is: ${result}`;
        }
        //practice task
        function performOperation(operation) {
            // Get user input from input fields
            let num1 = parseInt(document.getElementById('input1').value);
            let num2 = parseInt(document.getElementById('input2').value);
            let result;
        
            // Check if inputs are valid numbers
            if (!isNaN(num1) && !isNaN(num2)) {
                // Perform the operation based on the parameter
                switch (operation) {
                    case 'addition':
                        result = add(num1, num2);
                        break;
                    case 'multiplication':
                        result = multiply(num1, num2);
                        break;
                    case 'division':
                        result = divide(num1, num2);
                        break;
                    default:
                        console.error("Invalid operation!");
                        break;
                }
        
                // Display the result
                displayResult(result);
            } else {
                displayResult('Please enter valid numbers');
            }
        }
        
        function add(a, b) {
            // Introduce a debugger statement to pause execution
            debugger;
        
            // Add the numbers
            return a + b;
        }
        
        function multiply(a, b) {
            // Introduce a debugger statement to pause execution
            debugger;
        
            // Multiply the numbers
            return a * b;
        }
        
        function divide(a, b) {
            // Introduce a debugger statement to pause execution
            debugger;
        
            // Check for division by zero
            if (b === 0) {
                console.error("Division by zero!");
                return null;
            }
        
            // Divide the numbers
            return a / b;
        }
        
        function displayResult(result) {
            // Display the result in the paragraph element
            const resultElement = document.getElementById('result');
            resultElement.textContent = `The result is: ${result}`;
        }
        