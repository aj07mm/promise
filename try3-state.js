// A promise can be pending waiting for a value, or resolved with a value.
// Once a promise resolves to a value, it will always remain at that value and never resolve again.

function doPromise(fn) {
  var state = 'pending';
  var value;
  var deferred;

  function resolve(newValue) {
    value = newValue;
    state = 'resolved';

    if(deferred) {
      handle(deferred);
    }
  }

  function handle(onResolved) {
    if(state === 'pending') {
      deferred = onResolved;
      return;
    }

    onResolved(value);
  }

  this.then = function(onResolved) {
    handle(onResolved);
  };

  fn(resolve);
}


function doSomething() {
  console.log(Date.now(), 'doSomething');
  return new doPromise(function(resolve) {
    var value = 42;
    resolve(value);
  });
};

var promise = doSomething();

promise.then(function(value) {
  console.log('Got a value:', value);
});

promise.then(function(value) {
  console.log('Got the same value again:', value);
});