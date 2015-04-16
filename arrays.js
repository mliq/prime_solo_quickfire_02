var i = 0;
var j = 0;
var subArray = [];

function createArray(number){
  var multiDimArray = [];

  for(i; i < number; i++){
    var newArray = [1,2,3,4,5,6,7,8];
    multiDimArray.push(newArray);
  }

  return multiDimArray;
}

var multiDimArrayOf6 = createArray(6);

// console.log(multiDimArrayOf6);

function add1(x){
  x+=1;
  return x;
}

function times2(x){
  x*=2;
  return x;
}

function augmentArray(array){
  for(i = 0; i < array.length; i++){
    
    subArray = array[i];

    for(j = 0; j < subArray.length; j++){
      // subArray[j]+=1;
      // subArray[j]*=2;
      subArray[j] = add1(subArray[j]);
      subArray[j] = times2(subArray[j]);
    }

    console.log(subArray);
  }
  return array;
}

multiDimArrayOf6 = augmentArray(multiDimArrayOf6);

// console.log(multiDimArrayOf6);
