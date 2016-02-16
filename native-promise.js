console.log(Promise.toString()); // function Promise() { [native code] }

// The reason Chrome or Firefox says that the code is native is that
// it really is native - the WebKit and Firefox developers 
// have coded up that functionality in C or C++, not JavaScript. 
// However, if you want to see the actual code, 
// you can look at the source repositories for Chromium and Firefox.

// http://stackoverflow.com/questions/9103336/read-javascript-native-code

var foo = function(){
	return new Promise(function(resolve, reject) {
		var value = 123;
		setTimeout(function(){
			value++
		  if (value) {
		    resolve(value);
		  } else {
		    reject(Error("It broke"));
		  }
		}, 3000);
	});
}

foo().then(function(value){
	console.log(value)
})