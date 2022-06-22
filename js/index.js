const div = createNewElement("div", null, "div");
const titlediv = createNewElement("div", "JS Counter", "titlediv");
const numberdiv = createNewElement("div", "0", "numberdiv");
const buttondiv = createNewElement("div", null, "buttondiv");
const add_button = createNewElement("button", "+", "buttonwidth");
const less_button = createNewElement("button", "-", "buttonwidth");
const reset_button = createNewElement("button", "Reset", null);

document.body.append(div);
div.append(...[titlediv, numberdiv, buttondiv])
buttondiv.append(...[add_button, less_button, reset_button])

function createNewElement(element, text = '', className = '') {
  const new_element = document.createElement(element);
  new_element.textContent = text;
  new_element.classList.add(className);
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
