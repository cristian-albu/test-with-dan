function elementBuilder(obj) {
  const element = document.createElement(obj.element);
  const entries = Object.entries(obj);

  for (let i = 0; i < entries.length; i++) {
    const currentKey = entries[i][0];
    const currentValue = entries[i][1];

    if (currentKey !== "target" && currentKey !== "element") {
      element[currentKey] = currentValue;
    }
  }

  obj.target.appendChild(element);

  return element;
}

const root = document.querySelector("#root");

const bluePrint = {
  target: null,
  element: "div",
  classList: "",
  textContent: "",
};

const container = elementBuilder({ ...bluePrint, target: root, textContent: "Something" });

const illustration = elementBuilder({
  target: container,
  element: "img",
  classList: "container",
  src: "/",
});
