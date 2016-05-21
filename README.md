# promise

A study case of Promise.
This is a sketch of a lecture,
all credit goes to Matt Greer: http://www.mattgreer.org/articles/promises-in-wicked-detail/


![Image Alt](https://mdn.mozillademos.org/files/8633/promises.png)

---

## Promise terminology

promise   - is an object or function with a then method whose behavior conforms to this specification.
thenable  - is an object or function that defines a then method.
value     - is any legal JavaScript value (including undefined, a thenable, or a promise).
exception - is a value that is thrown using the throw statement.
reason is a value that indicates why a promise was rejected.

A promise states can be:

fulfilled - The action relating to the promise succeeded 
rejected  - The action relating to the promise failed 
pending   - Hasn't fulfilled or rejected yet 
settled   - Has fulfilled or rejected

---

## Common libs out there

	Q
	when
	WinJS
	RSVP.js

---

## Support of Promise:

http://stackoverflow.com/questions/21564993/native-support-for-promises-in-node-js


Although Node.js added native promise in stable version 0.12.

But due to the memory leak issue, I recommend to use bluebird to avoid the issue.

	https://github.com/promises-aplus/promises-spec/issues/179
	https://github.com/tj/co/issues/180

If node is using the same or later version of V8 that Chrome 32 uses then it is likely natively supported. Otherwise you will need to load 'es6-shim' (I recommend loading es5-shim first) I have no idea which version of V8 the current release of node is using.

---

## References:

	- http://www.mattgreer.org/articles/promises-in-wicked-detail/
	- http://www.html5rocks.com/en/tutorials/es6/promises/
	- https://promisesaplus.com/