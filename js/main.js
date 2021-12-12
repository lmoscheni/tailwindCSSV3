function handleColorTheme() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    document.getElementById("light").innerText = "🌝";
    document.getElementById("dark").innerText = "";
  } else {
    document.documentElement.classList.add("dark");
    document.getElementById("dark").innerText = "🌚";
    document.getElementById("light").innerText = "";
  }
}

function renderDefaultSwith() {
  if (document.documentElement.classList.contains("dark")) {
    document.getElementById("light").innerText = "";
    document.getElementById("dark").innerText = "🌚";
  } else {
    document.getElementById("light").innerText = "🌝";
    document.getElementById("dark").innerText = "";
  }
}

renderDefaultSwith();
