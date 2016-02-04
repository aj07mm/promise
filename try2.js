// Our naive, poor promise implementation must use asynchronicity to work. 
// It’s easy to make it fail again, 
// just call then() asynchronously and we are right back to the callback being null again. 

function Promise(fn) {
  var callback = null;
  this.then = function(cb) { 
  	console.log(Date.now(), 'then')
    callback = cb;
  };

  function resolve(value) {
    // force callback to be called in the next
    // iteration of the event loop, giving
    // callback a chance to be set by then()
    setTimeout(function() {
      console.log(Date.now(), 'resolve')
      var value = 42
      callback(value);
    }, 1);
  }

  fn(resolve);
}


function doSomething() {
  return new Promise(function(resolve) {
    var value = Date.now();
    resolve(value);
  });
}

doSomething().then(function(value) {
	setTimeout(function(){
		console.log("got a value", value);
	},2);
});