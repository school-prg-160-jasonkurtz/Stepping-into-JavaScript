// Assigns all items to be looped through to the variable "links". This give the ability to count the number of items by accessing the length of the variable.
var links = document.getElementsByTagName('a');


// Loop that counts each item in the "links" variable and console.logs each iteration.
for (i = 1; i <= links.length; i++) {
	console.log('this is link number ' + i);
}

// Confirms completion of the by printing to the document.
document.write('all links are now looped');

// Console.logs the contents of the items being looped through.
console.log(links);