function getFriendlyNumbers(start,end){
	if((typeof(start)) != 'number' || (typeof(end)) != 'number' || start > end || end < 0 || start < 0 || start % 1 != 0 || end % 1 != 0) {
		return false
	}
  var pairs = {}, i, j, result = []
  for (i = start; i <= end; i++){
    var sum = 0
    for(j = 1; j < i; j++){
      if( i % j == 0){
        sum += j
      }
    }
    pairs[i] = sum
  }
  for(i in pairs){
    for(j in pairs){
      if( j == i) continue
      if( pairs[i] == j && i == pairs[j] && i > pairs[i]) {
        result.push([pairs[j],pairs[i]].sort())
      }
    }
  }
  return result
}

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}