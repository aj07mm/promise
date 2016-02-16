# promise

A study case of Promise.
This is a sketch of a lecture,
all credit goes to Matt Greer: http://www.mattgreer.org/articles/promises-in-wicked-detail/


![Image Alt](https://mdn.mozillademos.org/files/8633/promises.png)

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