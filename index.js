const form = document.getElementById("form");
const btnCopy = document.getElementById("btn-copy");

form.addEventListener("submit", handleSubmit);
btnCopy.addEventListener("click", copyCode);

function updateCode() {
  const code = document.getElementById("code");
  const border = document.getElementById("border");
  const inputValues = document.getElementsByClassName("input");

  let borderStyleStr = "";
  for (let inputValue of inputValues) {
    if (inputValue.value > 100) return alert("max value is 100");
    borderStyleStr += " " + (+inputValue.value || 0) + "%";
  }
  code.innerText = "border-radius:" + borderStyleStr;
  border.style.borderRadius = borderStyleStr.trim();
}

function handleSubmit(e) {
  e.preventDefault();
  updateCode();
}

function copyCode() {
  const code = btnCopy.previousElementSibling;
  const popUp = document.getElementById("popUpMes");

  if (code.innerText) {
    window.navigator.clipboard.writeText(code.innerText);
    popUp.innerHTML = `text "${code.innerText}" is copied`;
    popUp.style.display = "block";
    setTimeout(() => {
      popUp.innerHTML = "";
      popUp.style.display = "none";
    }, 1000);
  }
}
