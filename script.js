document.addEventListener("DOMContentLoaded", () => {
    const downloadButton = document.getElementById("download-button");
    const isAndroid = /Android/i.test(navigator.userAgent);
  
    if (isAndroid) {
      downloadButton.style.display = "inline-block";
      downloadButton.href = "https://TU-ENLACE-DE-DESCARGA-APK";
    } else {
      downloadButton.textContent = "Abre esta página en tu dispositivo Android para descargar la app.";
      downloadButton.style.background = "#555";
      downloadButton.style.cursor = "default";
      downloadButton.href = "#";
    }
  });
  