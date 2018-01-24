/**
 * Created by si8822fb on 1/23/2018.
 */


var arr = ['Java', 'Javascript', 'C#'];
arr[0] = "Python";

arr[10] = "HTML";


var cats = 4;

var className = "Web client and server programming";
var name = "Qaalib";
var spaces = 0;
for(var x = 0; x < className.length; x++){
    if(className[x] == " "){
        spaces = spaces + 1;
    }
}
console.log("There are " + spaces + " number of spaces in the string '" + className + "'.");


exampleList = ["Zebra", "Squid", "Cat"];
console.log(containsOwl(exampleList, "Zebra"));
console.log(containsOwl(exampleList, "Squid"));

function containsOwl(birdList, birdName){
    for(var x = 0; x < birdList.length; x++){
        if(birdList[x].toLowerCase() == birdName.toLowerCase()){
            return true;
        }
    }
    return false;
}

console.log('a' + '')