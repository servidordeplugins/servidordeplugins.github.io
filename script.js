const SERVER_IP = "plugins.my.pebble.host";

function setPreview(src) {
  document.getElementById("preview").src = src;
}

function copyText(text) {
  navigator.clipboard.writeText(text);
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

async function updateServerStatus() {
  try {
    const res = await fetch(`https://api.mcsrvstat.us/2/${SERVER_IP}`);
    const data = await res.json();

    const dot = document.getElementById("statusDot");
    const text = document.getElementById("statusText");

    if (data.online) {
      dot.className = "dot online";
      text.textContent = `Online — ${data.players.online}/${data.players.max} jugadores`;
    } else {
      dot.className = "dot offline";
      text.textContent = "Offline";
    }
  } catch {
    document.getElementById("statusDot").className = "dot offline";
    document.getElementById("statusText").textContent = "Offline";
  }
}

updateServerStatus();
setInterval(updateServerStatus, 30000);
