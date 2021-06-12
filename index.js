// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function Passbyvalue(a, b) {
    let tmp;
    tmp = b;
    b = a;
    a = tmp;
    console.log(`Inside Pass by value 
        function -> a = ${a} b = ${b}`);
}
  
let a = 1;
let b = 2;
console.log(`Before calling Pass by value 
        Function -> a = ${a} b = ${b}`);
  
Passbyvalue(a, b);
  
console.log(`After calling Pass by value 
       Function -> a =${a} b = ${b}`);