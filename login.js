const submitDetails = () => {
  localStorage.clear();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  if (name && email) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    window.location.href = "home.html";
  } else {
    alert("Please fill all the details");
  }
};
