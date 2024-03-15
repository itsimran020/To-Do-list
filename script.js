let input = document.querySelector("#input-box");
let list = document.querySelector("#list-container");
let btn = document.querySelector("#btn");
let btn2 = document.querySelector(".btn2");

btn.onclick = addTask;
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  if (input.value == "") {
    alert("You must need to write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", list.innerHTML);
};

const showTask = () => {
  list.innerHTML = localStorage.getItem("data");
};
showTask();

btn2.onclick = () => {
  if (list.innerHTML == "") {
    alert("Firstly add some task");
  } else {
    list.innerHTML = "";
    localStorage.clear();
  }
};
