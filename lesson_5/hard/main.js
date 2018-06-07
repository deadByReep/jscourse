function formatDate(date) {
	var ss = date.getSeconds();

	var mm = date.getMinutes();

	var HH = date.getHours();

	var DD = date.getDate();

	var MM = date.getMonth() + 1;

	var YY = date.getFullYear() % 100;

		function getZero(){
			if(ss < 10) ss = '0' + ss;
			if(mm < 10) mm = '0' + mm;
			if(HH < 10) HH = '0' + HH;
			if(DD < 10) DD = '0' + DD;
			if(MM < 10) MM = '0' + MM;
			if(YY < 10) YY = '0' + YY;
		}
		getZero();
	return "'" + ss + ':' + mm + ':' + HH + ' ' + DD + '.' + MM + '.' + YY + "'"; 
}

var d = new Date;
console.log(formatDate(d));

function getToday(date) {
	var day = date.getDay();
	if(day === 0) day = 'Воскресенье';
	if(day === 1) day = 'Понедельник';
	if(day === 2) day = 'Вторник';
	if(day === 3) day = 'Среда';
	if(day === 4) day = 'Четверг';
	if(day === 5) day = 'Пятница';
	if(day === 6) day = 'Суббота';
	return day;
}

var day = new Date;
console.log(getToday(day));

var inputDateOne = document.createElement('input'),
 	inputDateTwo = document.createElement('input'),
	inputDateResult = document.createElement('input'),
	button = document.getElementsByTagName('button');

inputDateOne.type = 'data';
inputDateOne.value = '';

document.body.appendChild(inputDateOne);

inputDateTwo.type = 'data';
inputDateTwo.value = '';
document.body.appendChild(inputDateTwo);

inputDateResult.type = 'data';

document.body.appendChild(inputDateResult);


function getMinusDate() {
	var start = inputDateOne.value.split('/');
	var end = inputDateTwo.value.split('/');

	var date1 = new Date(start[2], start[0], start[1]);
	var date2 = new Date(end[2], end[0], end[1]);

	if (date1.getTime() > date2.getTime()) {
    var timeDiff = Math.abs(date1.getTime() - date2.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    inputDateResult.value = diffDays;
  }  else {
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    inputDateResult.value = diffDays; 
  }
 
}



