//Promises capture the notion of an eventual value into an object

//unpromised
function doSomething(callback) {
  var value = 42;
  callback(value);
}

//promised
// function doSomething() {
//   return {
//     then: function(callback) {
//       var value = 42;
//       callback(value);
//     }
//   };
// }