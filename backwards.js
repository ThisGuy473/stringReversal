
var newString = []

function reversal (string) {

  for (var i=string.length - 1; i >= 0; i--) {
    arr = string.split("");
    arr = arr[i];
    newString.push(arr);
  }
}


reversal("Hello World")
console.log(newString.join(''))
