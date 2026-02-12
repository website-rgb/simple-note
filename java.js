const textarea = document.getElementById("auto");
textarea.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});

function ersetzen() {
  const input = document.getElementById("auto").value;
  const output = document.getElementById("ausgabe");
  output.innerText = input;
  localStorage.setItem("key", input);
}

window.onload = function () {
  const wert = localStorage.getItem("key");
  if (wert) {
    this.document.getElementById("ausgabe").innerText = wert;
  }
};

function kopieren() {
  const text = document.getElementById("ausgabe").innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById("btn2");
    btn.innerText = "Kopiert";
    setTimeout(() => {
      btn.innerHTML = "Kopieren";
    }, 2000);
  });
}

function del() {
  localStorage.removeItem("key");
  const btn = document.getElementById("delete");
  btn.innerHTML = "Gelöscht";
  setTimeout(() => {
    btn.innerText = "Löschen";
  }, 2000);

  const output = document.getElementById("ausgabe").innerText;
  ausgabe.innerText = "Hier steht dein Text!";
}
