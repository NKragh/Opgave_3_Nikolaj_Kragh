//Declaration of elements from HTML
let inputelement: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("inputcontent")
);
let selectElemet: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById("selector")
);
let btnElement: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("StartButton")
);

//Declaration of variables
let inputstring: string;
let outputstring: string;
var list = document.createElement("ul");
let words: string[] = [];

//Adding eventlisteners
// selectElemet.addEventListener("change", SwitchFunction)
btnElement.addEventListener("click", SwitchFunction);
inputelement.addEventListener("change", RefreshInput);

//Force refresh on input
function RefreshInput() {
  inputstring = inputelement.value;
}

//Switch to se what function the user wants
function SwitchFunction() {
  switch (selectElemet.value) {
    case "Loud":
      outputstring = LoudFunction(inputstring);
      break;
    case "Quiet":
      outputstring = QuietFunction(inputstring);
      break;
    case "Reverse":
      outputstring = ReverseFunction(inputstring);
      break;
    case "Count":
      outputstring = CountFunction(inputstring);
      break;
    case "Add":
      AddListFunction(inputstring);
      outputstring = inputstring;
      break;
    case "Delete":
      DeleteListFunction(inputstring);
      break;
    default:
      outputstring = "Please choose an option.";
      break;
  }
  document.getElementById("outputdiv").innerHTML = outputstring;
}

//To upper case
function LoudFunction(input: any) {
  let str: string = input.toUpperCase();
  return str;
}

//To lower case
function QuietFunction(input: string): string {
  return input.toLowerCase();
}

//Reverse string
function ReverseFunction(input: string) {
  let tempstr: string = "";
  for (var i = input.length - 1; i >= 0; i--) {
    tempstr += input[i];
  }
  return tempstr;
}

//Count characters
function CountFunction(input: string) {
  return input.length.toString();
}

//Add to list of words
function AddListFunction(input: string) {
  words.push(input);
  console.log(words);
  let item = document.createElement("li");
  item.innerHTML = input;
  DisplayList(item);
}

//Remove from list of words
function DeleteListFunction(input: string) {
  let x: number = words.indexOf(input);
  words.splice(x, 1);
  console.log(words);
  //list.removechild() -- Fordi liste elementet ikke er gemt uden for metoden kan den ikke findes.
}

//Display list in HTML
function DisplayList(item: HTMLLIElement) {
//   item.appendChild(document.createTextNode(words[words.length - 1]));
  list.appendChild(item);
  document.getElementById("listdiv").appendChild(list);
}
