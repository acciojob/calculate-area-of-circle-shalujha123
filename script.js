 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
	 let area = 3.14*radius*radius
	 return `The area of the circle with radius ${radius} is ${area}.toFixed(2)`
           
}
calculateArea();
