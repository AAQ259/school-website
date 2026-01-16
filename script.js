function toggleMenu(){
  const list = document.getElementById("navList");
  list.classList.toggle("is-open");
}

document.getElementById("year").textContent = new Date().getFullYear();