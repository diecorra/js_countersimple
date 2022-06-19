const div = createNewElement("div", null, "div");
const titlediv = createNewElement("div", "JS Counter", "titlediv");
const numberdiv = createNewElement("div", "0", "numberdiv");
const buttondiv = createNewElement("div", null, "buttondiv");
const add_button = createNewElement("button", "Add", null);
const less_button = createNewElement("button", "Less", null);
const reset_button = createNewElement("button", "Reset", null);

const append_elements = (parent_node, array_elements) => {
  array_elements.map((element) => parent_node.append(element));
};

document.body.append(div);
append_elements(div, [titlediv, numberdiv, buttondiv]);
append_elements(buttondiv, [add_button, less_button, reset_button]);

function createNewElement(element, text, className) {
  const new_element = document.createElement(element);
  text && (new_element.textContent = text);
  className && new_element.classList.add(className);
  return new_element;
}

add_button.addEventListener("click", function () {
  numberdiv.textContent = parseInt(numberdiv.textContent) + 1;
});

less_button.addEventListener("click", function () {
  numberdiv.textContent = parseInt(numberdiv.textContent) - 1;
});

reset_button.addEventListener("click", function () {
  numberdiv.textContent = "0";
});
