// Q.1 find the target value

var arr = [1, 5, 2, 6, 8, 2, 0, 3];
var target = 8;
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
        if(arr[i] + arr[j] == target) {
            sum = [i, j];
        }
    }
}
console.log(sum.join(" "));