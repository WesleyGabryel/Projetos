function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag da imagem
  const img = document.querySelector("#profile img")

  // Substituir a imagem de acordo com o tema
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/wesley_ds.jpeg")
    img.setAttribute("alt", "Foto de perfil de Wesley Gabryel no modo claro")
  } else {
    img.setAttribute("src", "./assets/wesley-light.jpeg")
    img.setAttribute("alt", "Foto de perfil de Wesley Gabryel no modo escuro")
  }
}
