// Función para cargar el estado del servidor
async function loadServerStatus() {
    try {
        const res = await fetch('https://api.mcsrvstat.us/2/plugins.my.pebble.host');
        const data = await res.json();
        const el = document.getElementById('server-status');

        if (data.online) {
            el.classList.add('online');
            el.classList.remove('offline');
            el.innerHTML = `🟢 Online — ${data.players.online}/${data.players.max} jugadores`;
        } else {
            el.classList.add('offline');
            el.classList.remove('online');
            el.innerHTML = '🔴 Offline';
        }
    } catch (error) {
        document.getElementById('server-status').innerHTML = 'Estado no disponible';
    }
}
loadServerStatus();

// Función para copiar texto y mostrar notificación
function copyText(text) {
    navigator.clipboard.writeText(text);
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000); // La notificación desaparecerá después de 2 segundos
}
