var num = mas(33721),
	num2;

function mas(n) {
  n = String(n).split('').map(Number);
  return n;
}
  num2 = (num[0] * num[1] * num[2] * num[3] * num[4]);
  console.log(num2);
  var over = mas2(num2 ** 3);
  
  function mas2(m) {
  m = String(m).split('').map(Number);
  return m;
}

 alert(over[0] + '' + over[1]);