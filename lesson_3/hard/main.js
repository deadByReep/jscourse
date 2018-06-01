var str = "урок-3-был слишком легким";
    newStr = str[0].toUpperCase() + str.slice(1).replace(/-/g, " "),
    newStrTwo = newStr.replace(/легким/g, ""),
    newStrThree = newStrTwo.replace(/слишком/g, "слишкоо"),
    arr = [20, 33, 1, "Человек", 2, 3]
console.log(newStrThree);//Вывел ответ
var cubeSum = arr[0] ** 3 + arr[1] ** 3 + arr[2] ** 3 + arr[4] ** 3 + arr[5] ** 3;

console.log(Math.sqrt(cubeSum));//Корень сумм кубов кубов 

var input = prompt("Строку введите");
function getInfo (text) {
	
	if (typeof(text) != "string") {
		alert("Вы вывели не строку!")
	} else {

	}

	function cutter (str, numOfChars, tail) {
  return str.substring(0, numOfChars)+tail;
}

console.log(cutter(text, 50, '...').trim());
}

getInfo(input);