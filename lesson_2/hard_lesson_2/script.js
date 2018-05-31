var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	content = (week[0]  + '</br>' + week[1] + '</br>' + week[2] + '</br>' + week[3].italics() + '</br>' + week[4] + '</br>' + week[5].bold() + '</br>' + week[6].bold()),
	arr = ["4256", "322", "235125", "3552", "75674", "456", "733"];

document.write(content);//Выводит месяцы

for (var i = 0; i < arr.length; i++) {
	if (arr[i][0] == 3 || arr[i][0] == 7) {
		console.log(arr[i]);
	}
}//Выводит в консоль числа массива ничинающиеся с 3 и 7