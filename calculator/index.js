let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = ""; 
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        // Calculate result when "=" is clicked
        if (buttonText === '=') {
            try {
                string = eval(string); 
                input.value = string;
            } catch {
                input.value = "Error"; 
                string = ""; 
            }
        } 
        // Clear the input on "AC" or "C"
        else if (buttonText === 'AC' || buttonText === 'C') {
            string = "";
            input.value = string;
        }
        // Delete last character on "DEL"
        else if (buttonText === 'DEL') {
            string = string.slice(0, -1); // Removes the last character
            input.value = string;
        }
        // Add the clicked button value to the string
        else {
            string += buttonText; 
            input.value = string;
        }
    });
});
