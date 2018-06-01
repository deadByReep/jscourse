var str = "урок-3-был слишком легким",
    newStr = str[0].toUpperCase() + str.slice(1).replace(/-/g, " ");
    console.log(newStr);
var newStrTwo = newStr.replace(/легким/g, ""),
    newStrThree = newStrTwo.replace(/слишком/g, "слишкоо"),
    arr = [20, 33, 1, "Человек", 2, 3],
    newArr = [];
console.log(newStrThree);//Вывел ответ

	for (var i = 0;i < arr.length; i++) {
if (typeof(arr[i]) === "number") {
	var arrUpCube = arr[i] * arr[i] * arr[i];
	newArr.push(arrUpCube);
	}
}	for (var j = 0, cubeSum = 0; j < newArr.length; j++) {
	  cubeSum += newArr[j];
}
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