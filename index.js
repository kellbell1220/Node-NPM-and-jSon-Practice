var fs = require("fs");

// lodash required
var _ = require('lodash');


// Get content from JSON file
var contents = fs.readFileSync("data.json");

// Define to JSON type
var jsonData = JSON.parse(contents);

//less typing needed
items = jsonData.items;

// Get Value from JSON
// console.log("First Name: ", items[0].fname);
// console.log("Last Name:", items[0].lname);
// console.log("Age:", items[0].age);

// console.log("First Name: ", items[1].fname);
// console.log("Last Name:", items[1].lname);
// console.log("Age:", items[1].age);

// firstLast = (items[0].fname + " " + items[0].lname ),
// console.log("Full Name: ", firstLast);

//forEach works as a loop checking every index number
var i = 0;
_.forEach(items, function (items, i) {
    fullName = items.fname + ' ' + items.lname;
    console.log("Full Name: ", fullName, " Age: ", items.age);
    i++;
});







