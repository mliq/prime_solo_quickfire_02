var i = 0;

function createArray(number){
  var multiDimArray = [];

  for(i; i < number; i++){
    var newArray = [1,2,3,4,5,6,7,8];
    multiDimArray.push(newArray);
  }

  return multiDimArray;
}

var multiDimArrayOf6 = createArray(6);

console.log(multiDimArrayOf6);