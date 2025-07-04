document.addEventListener("DOMContentLoaded", () => {
    const downloadButton = document.getElementById("download-button");
    const qrSection = document.getElementById("qr-section");
    const isAndroid = /Android/i.test(navigator.userAgent);
  
    if (isAndroid) {
      downloadButton.style.display = "inline-block";
      downloadButton.href = "https://drive.google.com/uc?id=17Da5n1RMcPMRipTJdV12BNthH3zi44An";
    } else {
      downloadButton.style.display = "none";
      qrSection.style.display = "block";
    }
  });
  