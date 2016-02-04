var Promise = require('./promise.js');

function setTimeout1000(callback){
	setTimeout(callback,1000)
}

function setTimeout3000(callback){
	setTimeout(callback,3000)
}


function delayedConsoleLog(text){
	setTimeout1000(function(){
		console.log(text);
	});
};

function delayedConsoleLogWithCallback(text, callback){
	setTimeout1000(function(){
		console.log(text);
		callback();
	});
};

function delayedConsoleLogPromiseErrado(callback){
	callback();
	return {
		then: function(callback){
			callback()
		}
	}
}

function delayedConsoleLogPromise(callback){
	return new Promise(function(resolve) {
		var value = callback()
		resolve(value);
	});
}

//default asynchronous:

	// delayedConsoleLog('oi!')
	// console.log('oi primeiro')

//callback approach:

	// delayedConsoleLogWithCallback('eu segundo', function(){
	// 	console.log('eu primeiro')
	// })

//Not yet a Promise

	// delayedConsoleLogPromiseErrado(function(){
	// 	console.log('failed foo');
	// });

//promise approach

	delayedConsoleLogPromise(function(){
		console.log('eu depois 3000')
		return 10;
	}).then(function(value){
		console.log('asdasd ' + value)
	})