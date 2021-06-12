// Import stylesheets
import './style.css';

// Write Javascript code!
function changeMember(x) {
  x.member = "bar";
  console.log("in changeMember: " + x.member);
}

function changeObject(x) {
  x = { member: "bar" };
  console.log("in changeObject: " + x.member);
}



var x = { member: "foo" };

console.log("before changeObject: " + x.member);
changeObject(x);
console.log("after changeObject: " + x.member); /* change did not persist */

console.log("before changeMember: " + x.member);
changeMember(x);
console.log("after changeMember: " + x.member); /* change persists */

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
