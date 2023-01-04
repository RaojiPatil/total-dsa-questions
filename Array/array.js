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


//Q.2  Palindrome Number

var num = 129;
var out = '';
for(var i = num.length; i >= 0; i--) {
   out = out + num[i];
   console.log(out);
}


var x = 121;
var a =x.toString().split('').reverse().join("");

if(x == a) {
console.log("true");
} else {
  console.log("false");
}



//Q 3; Search Numbers

var arr = [10, 1, 10, 3, 4];
var q = [2, 9];
var count = 0; 


for (var i = 0; i < arr.length; i++) {
    if(arr[i] >= q[0] && arr[i] <= q[1]){
        count++;
    }
}
console.log(count);