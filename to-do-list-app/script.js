//select all elements

const form = document.querySelector("#new-item-form");
const input = document.querySelector("#item-input");
const list = document.querySelector("#list");

//when i sumbit the form add new element
function handleSubmit(e) {
  e.preventDefault();
  const listItem = document.createElement("div");
  listItem.classList.add("list-item");
  listItem.textContent = input.value;
  list.appendChild(listItem);
  input.value = "";
  listItem.addEventListener("click", () => {
    listItem.remove();
  });
}

form.addEventListener("submit", handleSubmit);
