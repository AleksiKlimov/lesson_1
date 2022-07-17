// // function showMessage(from, text) {
// // 	from = '*' + from + '*';
// // 	alert(from + ' : ' + text)
// // }
// // let from = 'Anyya';
// // showMessage(from, 'Hello')


// // function showMessage2(fro1, text) {
// // 	from1 = '*' + from1 + '*';
// // 	alert(from1 + ' : ' + text);
// // }
// // let from1 = 'Anya';
// // showMessage2(from1, 'Hiiii')

// // function showMessage(one, two) {
// // 	one = '*' + one + '*';
// // }

// // let result = prompt('how old are you?');

// // showMessage('welcome', "dont/'t walk");

// // console.log(Number(result));

// // if (result >= 18) {
// // 	console.log('more 18');
// // } else {
// // 	console.log('less 18');
// // }
// let resultPrompt
// function anotherFunction(name, patronymic) {
// 	resultPrompt = prompt('who are in your life?')
// }
// let resultLog = console.log(Boolean(resultPrompt));
// if (resultLog != true) {
// 	console.log('dont true');
// } else {
// 	console.log('yes it is true');
// }

// let resConfirm
// function showMessage(form, text = anotherFunction()) {
// 	form = '*' + form + '*';
// 	resConfirm = confirm(form + ':' + 'Suck my scribs ?');
// }
// let form = "Anya"
// showMessage(form);
// if (resConfirm == true) {
// 	console.log('yes she will be suck my dick');
// } else {
// 	console.log('noo she don\'t suck my dick');
// }
// let resultLogTrue = console.log(Boolean(resultPrompt));


// let result
// if (resultLogTrue != true) {
// 	result = 5 * 10 + 'Boolean' - '111'
// } else {
// 	console.log(5 + 5);
// }
// console.log(result);



// function sum(a, b) {
// 	return a + b;

// }
// let result = sum(1, 2);
// alert(result);
// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return confirm('А родители разрешили?');
// 	}
// 	console.log(Boolean(age));

// }
// let age = prompt('Сколько вам лет?', 18);
// if (checkAge(age)) {
// 	alert('Доступ открыт!!!!')
// } else {
// 	alert('Доступ закрыт')
// }

// function checkAge(age) {
// 	if (age > 18) {
// 		return true
// 	} else {
// 		return confirm('a с хуяли???')
// 	}
// }
// let age = prompt('сколько вам лет', 18);a
// 	alert('пошел на хуй ');
//}
/*function checkAge(age) {
	if (age > 18) {
		return true
	} else {
		return confirm('А родители разрешают?')
	}
}
let age = prompt('вам есть 18 лет??', 18);
if (checkAge(age)) {
	alert('welcome mother fucka')
} else {
	alert('fuck off fucking bich!!!')
}*//*
function showMovie(age) {
	if (!checkAge(age)) {
		return;
	}

	alert('You are shown movies')
}*/
// let parting = 'bye bye';
// let greeting = 'hello';
// function getMessage(a = 2, b) {
// 	if (a > b) {
// 		console.log(`я хочу сделать приветствие${greeting}`);
// 	} else {
// 		console.log(`i want do it ${parting}`);
// 	}
// }
// getMessage(, 1);

// function User(name) {
// 	this.name = name;
// 	this.isAdmin = false;
// }
// let user = new User('vasya');
// let user2 = new User('Ivan');
// let user3 = new User('Aleks');
// alert(user.name);
// // alert(user.isAdmin)

// let user = function (name) {
// 	user.name = name;
// 	user.isAdmin = false
// }

// let user = new function () {
// 	this.name = 'name';
// 	this.isAdmin = false;
// }

// function User() {
// 	alert(new.target)
// }
// User();
// new User();

// function User(name) {
// 	if (!new.target) {
// 		return new User(name)
// 	}
// 	this.name = name;
// }
// let vasya = User('vasya')
// alert(vasya.name)
// function BigUser() {
// 	this.name = 'Vasya';
// 	return { name: 'Godzilla' };

// }
// alert(new BigUser().name)

//
// function User(name) {
// 	this.name = name;

// 	this.sayHi = function () {
// 		alert('my name is:' + this.name);
// 	}
// }
// let vasya = new User('Vasya');

// vasya.sayHi();



// //declaration
// function hello1(name) {
// 	console.log('hello', name);
// }
// hello1('declaration');
// //expression
// const hello2 = function (name) {
// 	console.log('hello', name);
// }
// hello2('expression')
// //arrow
// const hello3 = name => console.log('hello', name);
// hello3('arrow')
// //bind function
// const hello4 = console.log.bind(null, 'hello')
// hello4('bind')
// //constructor function
// const hello5 = new Function('name', "console.log('hello', name)")
// hello5('constructor')

// let a;
// let b;
// function result1(a, b) {
// 	let result1 = a + b;

// 	console.log(result1);
// }
// result1(4, 2);

// let result2 = function (a, b) {
// 	result2 = a + b;
// 	console.log(result2);
// }
// result2(8, 4);

// let result3 = (a, b) => (console.log(result3 = a + b));
// result3(9, 7);

// let result4 = console.log.bind(a, b,);
// result4(100 + 200);

// //let result5 = new Function('a + b', "console.log(result5)");
// //result5(10, 20)



// let getSumm = (letOne, letTwo, big, little) => {
// 	let c = getSumm = letOne + letTwo;
// 	if (c > 100) {
// 		big()
// 	} else {
// 		little()
// 	}
// }
// let bigGetNumm = (a = 10, b = 1) => {
// 	bigGetNumm = a * b;
// 	console.log(bigGetNumm);
// }

// let littleGetNumm = (a = 100, b = 20) => {
// 	littleGetNumm = a / b;
// 	console.log(littleGetNumm);
// }

// getSumm(10, 20, bigGetNumm, littleGetNumm)
// console.log(getSumm);

// function calcSumm(numOne, numTwo) {
// 	let numSumm = numOne + numTwo;
// 	return numSumm;
// }
// let numSumm = calcSumm(10, 20);
// console.log(`Summa: ${numSumm}`);


// let numSumm = function (numOne, numTwo) {
// 	let getSumm = calcSumm(numOne, numTwo);
// 	console.log(getSumm);

// }

// let calcSumm = function (numOne, numTwo) {
// 	return calcSumm = numOne + numTwo;
// }
// numSumm(2, 33);

// function numRes(numOne, numTwo) {
// 	let numm = 1;
// 	for (let index = 0; index < numTwo; index++) {
// 		numm *= numOne;
// 	}
// 	return numm
// }
// console.log(numRes(3, 3));

// function numSumm(one, two) {
// 	if (two == 1) {
// 		return one;
// 	} else {
// 		return one * numSumm(one, two - 1);

// 	}
// }
// console.log(numSumm(2, 3));
// function  showMessage(name, text) {
// console.log(`${name} ${text}`);
// 	//setTimeout(showMessage, 500, name, text)

//setInterval(showMessage, 50, 'hello', 'vollodya')
//setTimeout(showMessage, 500, 'hi', 'petr')

//setInterval(showMessage, 500, 'petr', 'hello')



// setInterval((text, name) => {

// 	console.log(`${text} ${name}`);
// }, interval);

// function show(num) {
// 	console.log(num);
// 	let timeid = setTimeout(show, 1, ++num);
// 	if (num == 1000) {
// 		clearTimeout(timeid)
// 	}
// }
// setTimeout(show, 1, 1)

// let result = 0;
// function show(num) {
// 	result += num;
// 	console.log(result);
// 	if (result == 5) {
// 		clearInterval(timeid)
// 	}
// }
// let timeid = setInterval(show, 100, 1)

// function numSumm(one, two) {
// 	if (two == 1) {
// 		return one
// 	} else {
// 		return one * numSumm(one, two - 1)
// 	}
// }
// console.log(numSumm(, 3));
//сreational design patern
//construktor


// function Server(name, ip) {
// 	this.name = name
// 	this.ip = ip
// }

// Server.prototype.getUrl = function () {
// 	return `https://${this.ip}:80`
// }
// const aws = new Server('AWS German', '82.2121.32')
// console.log(aws.getUrl());

function hello() {
	console.log('Hello', this);


}
function summ(a = 2, b = 3) {
	const summ = a + b;
	console.log('summ', this);
}

const person = {
	name: 'Alexey',
	age: 28,
	sayHello: hello,
	sayHelloWindow: hello.bind(this), //=
	//sayHelloWindow: hello.bind(), 
	getSumm: summ,
	getSummWindow: summ.bind(window),//=
	//getSummWindow: summ.bind(this,
	logInfo: function (job, phone) {
		console.group(`${this.name} info`);
		console.log(`Name is ${this.name}`);
		console.log(`Age is ${this.age}`);
		console.log(`Job is ${job}`);
		console.log(`Phone is ${phone}`);
		console.groupEnd();
	}

}
const lena = {
	name: 'Elena',
	age: 30,
}

const fnPersonInfoLog = person.logInfo.bind(lena)()
const fnPersonInfoLogperson.logInfo.bind(person)()