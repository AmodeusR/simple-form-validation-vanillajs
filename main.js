const form = document.querySelector(".simple-form");

form.addEventListener("submit", e => {
  e.preventDefault();
  
});

form.addEventListener("focusin", e => {
  const element = e.target;
  
  if (element.tagName !== "INPUT") return;
  
  
  const elementLabel = element.previousElementSibling;
  elementLabel.style.color = "royalblue";
});

form.addEventListener("focusout", e => {
  const element = e.target;
  
  if (element.tagName !== "INPUT") return;

  const elementLabel = element.previousElementSibling;
  elementLabel.style.color = "#343434";
});