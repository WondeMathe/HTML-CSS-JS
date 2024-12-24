const button = document.getElementById("check-btn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const content = document.getElementById("text-input");
  const smallCase = content.value.toLowerCase();
  const filteredContent = smallCase.replace(/[^a-z0-9]/g, "");
  const reverse = filteredContent.split("").reverse().join("");

  if (content.value === "") {
    alert("Please input a value");
  } else if (filteredContent === reverse) {
    result.textContent = `${content.value} is a palindrome`;
  } else {
    result.textContent = `${content.value} is not a palindrome`;
  }
});
