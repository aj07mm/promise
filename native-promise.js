// console.log(Promise.toString());

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