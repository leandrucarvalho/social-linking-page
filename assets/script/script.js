function ToggleModeTheme() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/images/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/images/avatar.png")
  }
}
