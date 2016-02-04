// Our naive, poor promise implementation must use asynchronicity to work. 
// It’s easy to make it fail again, 
// just call then() asynchronously and we are right back to the callback being null again. 

// A promise can be pending waiting for a value, or resolved with a value.
// Once a promise resolves to a value, it will always remain at that value and never resolve again.

function doPromise(fn) {
  var callback = null;
  //then setta o callback que é chamado em resolve
  this.then = function(cb) { 
    callback = cb;
  };

  function resolve(value) {
    // force callback to be called in the next
    // iteration of the event loop, giving
    // callback a chance to be set by then()
    setTimeout(function() {
      var value = 42
      callback(value);
    }, 1);
  }

  fn(resolve);
}


function doSomething() {
  console.log(Date.now(), 'doSomething');
  return new doPromise(function(resolve) {
    var value = 42;
    resolve(value);
  });
};

// NOT BREAKING
//event loop normal

// doSomething(function(){
//   console.log(Date.now(), 'doSomething')
// }).then(function(value) {
//     console.log("got a value", value);
// });

// BREAKING
//how to break:
// - remove setTimeout in promise
// - put setTimeout wrapping then

var lol = doSomething();
//call resolve before then
// because setTimeouts are with differente times: 1, 3000
setTimeout(function(){
  lol.then(function(value) {
      // console.log("got a value", value);
  });
}, 3000);

//duda: apartir de que momento setTimeout começa a contar?