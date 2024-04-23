function getRandomInt() {
    return Math.floor(Math.random() * 11);
}
function getMaxIndexOfArray(numArray) {
    return numArray.indexOf(Math.max.apply(null, numArray));
}
function bubbleSort(numArray){
 let temp = numArray[0];
 for(var i = 0; i < 10; i++){
    for(var j = 0; j+1 < 10-i; j++){
       if(numArray[j]>numArray[j+1]){
        temp=numArray[j];
        numArray[j]=numArray[j+1];
        numArray[j+1]=temp;
       }
    }
 }
}
let arrayA = [];
let arrayB = [];
let arrayC = [];
for(var i = 0; i<10;i++){
    arrayA[i] = getRandomInt();
    arrayB[i] = getRandomInt();
    if(arrayA[i]==arrayB[i]){
       arrayC[i] = 1;
    }
    else{
       arrayC[i] = 1/(arrayA[i]-arrayB[i])
    }
}
console.log("Array A");
console.log(arrayA);
console.log("Array B");
console.log(arrayB);
console.log("Array C");
console.log(arrayC);
const indexOfMaxElement = getMaxIndexOfArray(arrayC), temp = arrayC[0];
arrayC[0]=arrayC[indexOfMaxElement];
arrayC[indexOfMaxElement] = temp;
console.log("New array C before bubble sorting")
console.log(arrayC);
bubbleSort(arrayC);
console.log("New array C after bubble sorting")
console.log(arrayC);