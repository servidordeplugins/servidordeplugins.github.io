const SERVER_IP = "plugins.my.pebble.host";
const SERVER_PORT = "8152";

const statusText = document.getElementById("status-text");
const statusDot = document.getElementById("status-dot");

fetch(`https://api.mcsrvstat.us/2/${SERVER_IP}`)
  .then(res => res.json())
  .then(data => {
    if (!data.online) {
      statusDot.className = "dot offline";
      statusText.textContent = "Offline";
      return;
    }

    const online = data.players?.online ?? 0;
    const max = data.players?.max ?? "?";

    statusDot.className = "dot online";
    statusText.textContent = `Online — ${online}/${max} jugadores`;
  })
  .catch(() => {
    statusDot.className = "dot offline";
    statusText.textContent = "Offline";
  });

function copyIP() {
  navigator.clipboard.writeText(SERVER_IP);
  showToast();
}

function copyPort() {
  navigator.clipboard.writeText(SERVER_PORT);
  showToast();
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

function changeImage(src) {
  document.getElementById("preview").src = src;
}
