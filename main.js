const form = document.querySelector(".simple-form");

form.addEventListener("submit", e => {
  e.preventDefault();
});

const inputColor = "#343434"

form.addEventListener("focusin", e => {
  const element = e.target;
  
  if (element.tagName !== "INPUT") return;  
  
  const label = element.previousElementSibling;
  const labelColor = label.style.color;

  if (labelColor === "rgb(52, 52, 52)" || labelColor === "") {
    element.style.borderColor = "royalblue";
    label.style.color = "royalblue";
  }
});

form.addEventListener("focusout", e => {
  const element = e.target;

  if (element.tagName !== "INPUT") return;

  const errorIcon = element.nextElementSibling;
  const successIcon = errorIcon.nextElementSibling;
  const label = element.previousElementSibling;
  const errorMessage = successIcon.nextElementSibling;

  const elements = [errorIcon, successIcon, errorMessage];
  elements.forEach(element => element.classList.remove("show"));

  const inputLength = element.value.length;

  if (inputLength === 0) {
    element.style.borderColor = inputColor;
    label.style.color = inputColor;
    
  } else if (element.dataset.password === "password" && inputLength < 8) {
    const accent = getComputedStyle(errorIcon).getPropertyValue("color");
    
    if (element.dataset.password === "password") {
      errorIcon.classList.add("show");
      errorMessage.classList.add("show"); 
    }
    
    element.style.borderColor = accent;
    label.style.color = accent;
    
  } else if (element.dataset.username === "username" && inputLength < 5) {    
    const accent = getComputedStyle(errorIcon).getPropertyValue("color");
    
    errorIcon.classList.add("show");
    errorMessage.classList.add("show");
    
    element.style.borderColor = accent;
    label.style.color = accent;

  } else {
    const accent = getComputedStyle(successIcon).getPropertyValue("color");
    successIcon.classList.add("show");
    
    console.log(accent);
    element.style.borderColor = accent;
    label.style.color = accent;
  }

});