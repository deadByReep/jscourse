function getFriendlyNumbers(start, end) {
	if (start > end || start < 0 || (typeof(start)) != 'number' || (typeof(end)) != 'number' || start % 1 != 0 || end % 1 != 0) {
		return false;
	}

	var dividers = [],
		obj = {
			num1:{
				num:[],
				sum:[]
			},
			num2:{
				num:[],
				sum:[]
			}
		};
		for(let i = start; i <= end; i++){
			obj.num1.num.push(i);
			sum = 0;
			for (let j = 1; j <= i; j++) {
				if( i % j == 0) {
					sum += j;
					obj.num1.sum.push(j);
				}
			}
		}return obj
		console.log(obj)

	function getNumbers() {
		if (obj.num1 == obj.sum2 && obj.num2 == obj.sum1) {
			dividers.push(num1,num2);
		}
	}
    return [dividers];
}
console.log(getFriendlyNumbers(100, 200));

/*module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}*/