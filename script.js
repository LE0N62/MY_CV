
console.log("CV cargado correctamente");
document.getElementById("downloadBtn").addEventListener("click", () => {
  const cv = document.getElementById("cv");

  const opt = {
    margin: 0,
    filename: "CV_Luis_David_Camarillo_Leon.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] }
  };

  html2pdf().set(opt).from(cv).save();
});
