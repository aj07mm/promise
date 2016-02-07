// A promise can be pending waiting for a value, or resolved with a value.
// Once a promise resolves to a value, it will always remain at that value and never resolve again.

//2 ways:

// fn -> .then, resolve set value and .then receives value
// .then -> fn, 
//     .then call handle, set deferred and return undefined
//     call resolve, set value and call deferred which is .then

function doPromise(fn) {
	//start with pending state
  var state = 'pending';
  var value;
  // defer means delay
  var deferred;

  // resolve receive 42 
  // resolve set state do 'resolved'
  // resolve don't return anything, just set data 
  function resolve(newValue) {
    value = newValue;
    state = 'resolved';

    //only sets free if deferred is set
    if(deferred) {
      // run deferred on resolve!
      handle(deferred); //onResolve callback
    }
  }

  //NEW THING: Handler! He controls the state
  // receives onResolved callback from handle inside .then
  // executes onResolved if state is resolved
  function handle(onResolved) {
    if(state === 'pending') {
      // set deferred if .then runs first! 
      // because resolve is the only one that can change state
      deferred = onResolved;
      return;
    }
    //only runs if resolve already worked!
    // but who garantees that fn is going to run first?
    // value set in resolve
    onResolved(value);
  }

  //receive value
  // onResolved is a callback argument of .then
  this.then = function(onResolved) {
    handle(onResolved);
  };

  fn(resolve);
}


function doSomething() {
  // resolve is a function
  // onResolved
  return new doPromise(function(resolve) {
    setTimeout(function(){
      console.log(Date.now(), 'doSomething');
      var value = 42;
      resolve(value); //newValue
    }, 6000);
  });
};

var foo = doSomething()

setTimeout(function(){
  foo.then(function(value) {
    console.log('Got a value:', value);
  });
},3000)


// doSomething().then(function(value) {
//   console.log('Got the same value again:', value);
// });

// This is not completely true for the promise implementation in this article. 
// If the opposite happens, ie the caller calls then() multiple times before resolve() is called, 
// only the last call to then() will be honored. 
// The fix for this is to keep a running list of deferreds inside of the promise instead of just one. 
// I decided to not do that in the interest of keeping the article more simple, it’s long enough as it is :)