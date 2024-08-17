function createList() {
  const ul = document.createElement("ul");
  ul.id = "list";

  const items = ["Item 1", "Item 2", "Item 3"];

  items.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);

  return ul;
}

const myList = createList();
console.log(myList);
