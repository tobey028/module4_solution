// Assuming you have two libraries, sayHello.js and sayGoodbye.js
// You would first include these libraries in your HTML file.

// Then, in your script.js, you would write something like this:

(function () {
  // Array of names
  var names = ["John", "Yaakov", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop over the array
  for (var i = 0; i < names.length; i++) {
    // Current name
    var currentName = names[i];

    // Check the first letter of the name
    if (currentName.charAt(0).toLowerCase() === 'j') {
      // If it starts with J, say Goodbye
      sayGoodbye(currentName);
    } else {
      // Otherwise, say Hello
      sayHello(currentName);
    }
  }
})();

// The sayHello and sayGoodbye functions would be defined in your external libraries.
// You would need to fix those libraries as per the assignment instructions.
