var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];



// Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

// Example output:

// Blue Dasher

// Red Dancer

console.log("Would you guide my sleigh tonight?");
// Create a for loop that iterates through the # of reindeer (since there are fewer reindeer than colors)
for (var i = 0; i < reindeer.length; i++) { 
// Create a variable that concatenates the color array objects to the corresponding reindeer array object [i]
    var reindeerColor = colors[i] + " " + reindeer[i] + "<br>";
//This was given.  If not: Create a variable that finds the element within the html (id="reindeer")
    var hohohoElement = document.getElementById("reindeer");
//Call the variable and use innerHTML to "print" the content of the variable reindeerColor to the DOM
    hohohoElement.innerHTML += reindeerColor;
}
// (•_•) ( •_•)>⌐■-■ (⌐■_■) //
//       DEAL WITH IT      //
