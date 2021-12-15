function handleColorTheme() {
  const colorTheme = window.localStorage.getItem("colorTheme") || "light";

  if (colorTheme === "light") {
    window.localStorage.setItem("colorTheme", "dark");
    document.documentElement.classList.add("dark");
    document.getElementById("light").classList.remove("hidden");
    document.getElementById("dark").classList.add("hidden");
  } else {
    window.localStorage.setItem("colorTheme", "light");
    document.documentElement.classList.remove("dark");
    document.getElementById("dark").classList.remove("hidden");
    document.getElementById("light").classList.add("hidden");
  }
}

function renderDefaultSwith() {
  const colorTheme = window.localStorage.getItem("colorTheme") || "light";

  if (colorTheme === "light") {
    document.getElementById("dark").classList.remove("hidden");
  } else {
    document.documentElement.classList.add("dark");
    document.getElementById("light").classList.remove("hidden");
  }
}

renderDefaultSwith();
