function proceed() {
    let enname = document.getElementById("input").value;
    let name = localStorage.setItem("name", enname);
    if (!(enname == "")) {
      window.location = "./main.html";
    } else {
      document.getElementById("h1").innerHTML = "Name Please!!";
    }
  }