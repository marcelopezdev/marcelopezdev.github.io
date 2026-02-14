function start() {
  document.getElementById("content").classList.remove("hidden");
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}

function showInvite() {
  document.getElementById("invite").classList.remove("hidden");
}
