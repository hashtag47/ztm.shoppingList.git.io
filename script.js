var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lists = document.querySelectorAll("li");

function deleteList(btn) {
  btn.addEventListener("click", function () {
    btn.parentElement.style.listStyle = "none";
    btn.parentElement.innerHTML = "";
  });
}

function createDeleteButton(item) {
  var btnDelete = document.createElement("button");
  btnDelete.appendChild(document.createTextNode("Delete"));
  item.appendChild(btnDelete);
  return btnDelete;
}

function toggleList(item) {
  item.addEventListener("click", () => lineThroughList(item));
}

function lineThroughList(item) {
  item.classList.toggle("done");
}

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  var btnDelete = createDeleteButton(li);
  deleteList(btnDelete);
  ul.appendChild(li);
  input.value = "";
  return li;
}

function addListAfterClick() {
  if (inputLength() > 0) {
    var li = createListElement();
    toggleList(li);
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    var li = createListElement();
    toggleList(li);
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

lists.forEach((item) => {
  toggleList(item);
  var btnDelete = createDeleteButton(item);
  deleteList(btnDelete);
});
