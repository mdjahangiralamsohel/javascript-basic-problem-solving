// Define a function named string_check that takes a parameter str1
function string_check(str1) {
  // Check if str1 is null, undefined, or starts with the substring 'Py'
  if (str1 === null || str1 === undefined || str1.substring(0, 4) === "Java") {
    // If true, return str1
    return str1;
  }
  // If false, prepend 'Py' to str1 and return the result
  return "Java" + str1;
}

// Log the result of calling the string_check function with the argument "Python" to the console
console.log(string_check("Javascript"));

// Log the result of calling the string_check function with the argument "thon" to the console
console.log(string_check("script"));
