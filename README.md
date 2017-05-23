# Readme

## Lessons Notes



#### This keyword Pt.2
*Explicit Binding*

```javascript
var sayName = function(lang1, lang2, lang3) {
	console.log(`My name is ${this.name} and I know ${lang1}, ${lang2} and ${lang3}`) 	
}

var person = {
	name: "Renato",
	age: 27
}

var languages = ['javascript', 'html', 'css'];

/*
	call, apply -> immedetaly invoke the function
	bind -> returns a new function to be invoked later
*/

//fn.call(thisContext, arguments separated)
sayName.call(person, languages[0], languages[1], languages[2])
// prints "May name is Renato and i Know javascrip, html and css"

//fn.apply(thisContext, argsArray)
sayName.call(person, languages),
// prints "May name is Renato and i Know javascrip, html and css"

// bind is equal to call but returns new function
//var newFn = fn.bind(thisContext, arg1, arg2, arg3..)

var newFn = sayName.call(person, languages[0], languages[1], languages[2]);
newFn();
// prints "May name is Renato and i Know javascrip, html and css"
```

#### This keyword Pt.3
*New binding*

```javascript

/*
	1. when a function is invoked with the new keyword
		what happens behing the scens is that a new 
		object is created name this, so this is bound to that new
		object
*/
var Animal = function(color, name, type){
	// this = {}; [1]
	this.color = color;
	this.name = name;
	this.type = type;
} 


var lion = new Animal("brown", "Leão", "cat");

```
