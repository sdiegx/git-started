const handleSubmit = (e) => {
  let name = document.querySelector("#name").value;
  let surname = document.querySelector("#surname").value;
  let email = document.querySelector("#email").value;
  let birthday = document.querySelector("#birthday").value;
  let selector = document.querySelector("#selector").value;

  if (!name || !surname || !email || !birthday || !selector) {
    alert("Please, fill al the data!");
    return;
  }

  alert("Created successfully!");
};
