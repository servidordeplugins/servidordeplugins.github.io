async function updateStatus() {
try {
const res = await fetch("https://api.mcsrvstat.us/2/plugins.my.pebble.host");
const data = await res.json();


document.getElementById("status").textContent = data.online
? `Online — ${data.players.online}/${data.players.max} jugadores`
: "Offline";
} catch {
document.getElementById("status").textContent = "Estado no disponible";
}
}


function copyText(text) {
navigator.clipboard.writeText(text);
const toast = document.getElementById("toast");
toast.style.display = "block";
setTimeout(() => toast.style.display = "none", 2000);
}


updateStatus();
