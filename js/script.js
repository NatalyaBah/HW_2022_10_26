// Задание
// 1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.
let countSymbol = function () {
	let str = "Какой хороший день, и делать мне не лень 06.02.2023 г."
	let summChar = str.match(/[А-я]/gi).length;
	let summNumber = str.match(/[0-9]/gi).length;
	let summSymbol = str.match(/[!-/]/gi).length;
	console.log('Количество букв = ' + summChar);
	console.log('Количество цифр = ' + summNumber);
	console.log('Количество других знаков = ' + summSymbol);
}
console.log("Задание №1");
countSymbol();

// 2. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.

function textNumber(number) {
	let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
	let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
	let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
	if (number > 0 && number <= 9) {
		return 'Error';
	}
	if (number >= 10 && number <= 20) {
		return second[number - 10];
	}
	if (number > 20 && number <= 99) {
		let str = `${number}`;
		str = str.split('');
		let firstNumber = str[0];
		let secondNumber = str[1];
		return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
	}
}

console.log('Задание №2');
console.log(textNumber(10));

// 3. Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания.

let toUpperToLower = function (str) {
	let res = [];
	for (var i = 0; i < str.length; i++) {
		if (/^\d+$/.test(str[i])) {
			res.push('_')
		}
		else if (str[i].toUpperCase() === str[i]) {
			res.push(str[i].toLowerCase());
		}
		else if (str[i].toLowerCase() === str[i]) {
			res.push(str[i].toUpperCase());
		}
		else res.push(str[i]);
	}
	console.log('Строка до замены');
	console.log(str);
	console.log('Страка после замены');
	console.log(res.join(''));
}
console.log('Задание №3')
toUpperToLower('Мы делили апельсин. Много нас а он один. 12345');

// 4. Написать функцию, которая преобразует названия cssстилей с дефисом в название в СamelСase
//стиле: font-size в fontSize, background-color в backgroundColor, text-align в textAlign.

let toCamelCase = function (str) {
	return str.trim().split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join('');
}
console.log('Задание №4');
console.log(toCamelCase("font-size"));

// 5. Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно-ориентированное программирование в ООП.
let abbreviation = line => {
	return line.replace(/-/g, "- ").split(' ').map(s => s.charAt(0).toUpperCase()).join('');
}
console.log('Задание №5');
console.log(abbreviation("объектно-ориентированное программирование"));

// 6. Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную
//строку и  возвращает ее.

let line = function (count) {
	let newLine = "";
	do {
		numberOfLines = prompt('Введите строку');
		newLine += numberOfLines;
		newLine += " ";
		count--;
	} while (count > 0)
	return 'Полученная общая строка: ' + newLine;
}
let promptLine = res => {
	res = prompt('Введите количество строк которое нужно добавить');
	console.log(line(res));
}
console.log('Задание №6');
//promptLine();

// 7. Написать функцию – калькулятор. Функция принимает строку с примером, определяет, какое действие необходимо выполнить (+ - * /), переводит операнды в числа, решает пример и возвращает результат.

let calculater = str => {
	let newstr = str.trim().split(' ');
	let num1 = parseFloat(newstr[0]);
	let num2 = parseFloat(newstr[2]);
	let znak = newstr[1];
	switch (znak) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
		case '/':
			return (num2 == 0) ? 'На ноль делить нельзя' : res = num1 / num2;
		default:
			return 'Такого знака нет';
	}
}
console.log('Задание №7');
console.log(calculater('15 + 1'));

// 8. Написать функцию, которая получает url и выводит подробную информацию о нем.
// Например: url “https://itstep.org/ua/about”, информация “протокол: https, домен: itstep.org, путь: /ua/about”.

let urlInfo = url => {
	let array1 = url.split('://');
	let protocol = array1[0];
	console.log('Протокол: ' + protocol);
	let array2 = array1[1].split('/');
	let domain = array2[0];
	console.log('Домен: ' + domain);
	array2.shift();
	let path = array2.join('/');
	console.log('Путь: ' + path);
}
urlInfo('https://itstep.org/ua/about');
console.log('Задание №8');

// 9. Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью указанного разделителя. Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”. Выполняя задание, не используйте функцию split().

let splitStr = str => {
	let newstr = '';
	for (let i = 0; i < str.length; i++) {
		newstr += str[i].replace('/', ', ');
	}
	console.log(newstr);
}
console.log('Задание №9');
splitStr('10/08/2020');

// 10. Написать функцию вывода текста по заданному шаблону.
// Функция принимает первым параметром шаблон, в тексте которого может использоваться %, после символа % указывается индекс входного параметра. При выводе вместо  %индекс необходимо вывести значение соответствующего входного параметра.
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10, 8, 2020) должна вывести “Today is Monday 10.8.2020”.

let print = function (str, ...value) {
	//нет даже идеи
	console.log(str, value);
}
console.log('Задание №10');
print('Today is %1 %2.%3.%4', 'Monday', 10, 8, 2020);