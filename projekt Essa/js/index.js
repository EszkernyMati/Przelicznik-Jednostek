let currentAIndex = 0;

window.onload = () => {
  createNavBar();
  createSelect();
  calculateUnit();
};

const handleActiveNavItem = () => {
  const navItems = document.querySelectorAll(".nav-item");
  const navItemValue = allA[currentAIndex][0].category;
  navItems.forEach(navItem => {
    if (navItem.textContent === navItemValue) {
      navItem.classList.add("nav-item-active");
    } else {
      navItem.classList.remove("nav-item-active");
    }
  });
};

const createNavBar = () => {
  const navbar = document.querySelector(".navbar");
  navbar.innerHTML = "";
  for (let i = 0; i < allA.length; i++) {
    const button = document.createElement("button");
    button.classList.add("nav-item");
    button.textContent = allA[i][0].category;
    button.onclick = () => {
      currentAIndex = i;
      handleActiveNavItem();
      createSelect();
      calculateUnit();
    };
    navbar.appendChild(button);
  }
  handleActiveNavItem();
};

const fromSelect = document.getElementById("from-select");
const toSelect = document.getElementById("to-select");

const createSelect = () => {
  fromSelect.innerHTML = "";
  toSelect.innerHTML = "";

  const units = allA[currentAIndex].slice(1); // pomijamy obiekt kategorii

  units.forEach((unit, index) => {
    const optionFrom = new Option(unit.name, index);
    const optionTo = new Option(unit.name, index);
    fromSelect.appendChild(optionFrom);
    toSelect.appendChild(optionTo);
  });

  fromSelect.options[0].selected = true;
  toSelect.options[1] ? (toSelect.options[1].selected = true) : null;
};

function calVal(index, iv) {
  const expression = allA[currentAIndex][index + 1].fromBase; // +1 bo pomijamy kategorię
  return eval(expression);
}

const calculateUnit = () => {
  const fromInput = document.getElementById("from");
  const toInput = document.getElementById("to");
  const result = document.querySelector(".result");
  const value = fromInput.value;

  const units = allA[currentAIndex].slice(1); // pomijamy kategorię

  if (value === "") {
    units.forEach((unit, i) => {
      toSelect.options[i].text = unit.name;
    });
    toInput.value = "";
    result.textContent = "";
    return;
  }

  const fromIndex = parseInt(fromSelect.value);
  const toIndex = parseInt(toSelect.value);

  const iv = parseFloat(value);
  const stdVal = eval(units[fromIndex].toBase.replace(/iv/g, iv));

  units.forEach((unit, i) => {
    const temp = eval(unit.fromBase.replace(/iv/g, stdVal));
    toSelect.options[i].text = `${unit.name} (${temp})`;
    if (i === toIndex) {
      toInput.value = temp;
    }
  });

  result.innerHTML = `<p><b>Result:</b> ${fromInput.value} ${units[fromIndex].name} = ${toInput.value} ${units[toIndex].name}</p>`;
};
