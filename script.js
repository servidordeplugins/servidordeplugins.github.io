function copyText(text) {
  navigator.clipboard.writeText(text);
  showToast();
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

function setPreview(src) {
  document.getElementById("preview").src = src;
}

/* Estado del servidor (simulado) */
const online = true;
const players = 5;
const maxPlayers = 20;

const statusText = document.getElementById("statusText");
const statusDot = document.getElementById("statusDot");

if (online) {
  statusText.textContent = `Online — ${players}/${maxPlayers} jugadores`;
  statusDot.style.background = "#22c55e";
  statusDot.style.boxShadow = "0 0 8px rgba(34,197,94,.8)";
} else {
  statusText.textContent = "Offline";
  statusDot.style.background = "#ef4444";
}
