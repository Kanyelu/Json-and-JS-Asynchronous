var student ={
    name: "Jason",
    class: "Grade 9",
    hobby: "Art"
}

var myJson = JSON.stringify(student)//sending to server

var myObject = JSON.parse(myJson)//receiving from server

console.log(myJson)
console.log(myObject)

async function sum(a,b) {
    result = await a+b;
    console.log(result)
}
sum(3,5)

function greet(name,callback){
    console.log("Hello"+name);
    callback();

}
function sayBye(){
    console.log("Goodbye!")
}
 greet(" Jordan",sayBye)