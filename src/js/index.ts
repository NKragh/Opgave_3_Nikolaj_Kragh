class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person): string {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user: Person = { firstName: "Johan", lastName: "Deere" };

document.getElementById("content").innerHTML = greeter(user);

/*
Above this point: My teachers code.
Below this point: My own code.
*/

let inputelement: HTMLInputElement = <HTMLInputElement>(document.getElementById("inputcontent"));
let selectElemet: HTMLSelectElement = <HTMLSelectElement>(document.getElementById("selector"));
let btnElement: HTMLButtonElement = <HTMLButtonElement>(document.getElementById("StartButton"));

let inputstring: string;
let outputstring: string;

// selectElemet.addEventListener("change", SwitchFunction)
btnElement.addEventListener("click", SwitchFunction)
inputelement.addEventListener("change", RefreshInput)

function RefreshInput() {
    inputstring = inputelement.value;
    console.log(inputstring);
}

function SwitchFunction() {
    switch(selectElemet.value){
    case "Volvo":
      outputstring = LoudFunction(inputstring);
      break;
    case "v70":
      outputstring = QuietFunction(inputstring);
      break;
    case "for":
      outputstring = ReverseFunction(inputstring);
      break;
    case "Life":
      outputstring = CountFunction(inputstring);
      break;
    default:
      outputstring = "Please choose an option.";
      break;
  }
  document.getElementById("outputdiv").innerHTML = outputstring;
}

function LoudFunction(input: any) {
    let str: string = input.toUpperCase();
    
    return str;
}

function QuietFunction(input: string): string {
  return input.toLowerCase();
}

function ReverseFunction(input: string) {
  let temp: string[];
  for (let i = input.length; i >= 0; i--) {
    temp.push(input[i]);
  }
  return temp.toString();
}

function CountFunction(input: string) {
  return "";
}
