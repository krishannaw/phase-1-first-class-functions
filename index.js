function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  function returnsANamedFunction() {
    // Define and return a named function
    function myFunction() {
      console.log('This is my function!');
    }
    return myFunction;
  }
  function returnsAnAnonymousFunction() {
    // Define and return an anonymous function
    return function() {
      console.log('This is an anonymous function!');
    }
  }
  