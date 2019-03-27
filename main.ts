const args = Deno.args

function reverseString(input) {
   var splitString = input.split("")
   var reverseArray = splitString.reverse();
   var JoinArray = reverseArray.join("")
   return JoinArray;
}

const args2 = [...args]
var test = args2.reverse();
test.pop()
console.log(test.map(reverseString).join(" "))



