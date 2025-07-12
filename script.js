document.getElementById("calcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fxInput = document.getElementById("fungsi").value;
  const x = parseFloat(document.getElementById("x").value);
  const h = parseFloat(document.getElementById("h").value);
  const metode = document.getElementById("metode").value;

  let hasil;
  try {
    const f = new Function("x", `return ${fxInput}`);

    if (metode === "mundur") {
      hasil = (f(x) - f(x - h)) / h;
    } else if (metode === "pusat") {
      hasil = (f(x + h) - f(x - h)) / (2 * h);
    }

    document.getElementById("hasil").textContent = `Hasil turunan numerik (${metode}):\\n${hasil}`;
  } catch (error) {
    document.getElementById("hasil").textContent = "Terjadi kesalahan dalam evaluasi fungsi. Pastikan format fungsi benar.";
  }
});
