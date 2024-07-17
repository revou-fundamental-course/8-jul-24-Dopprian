document
  .getElementById("hitung-bmi-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let beratBadan = parseFloat(
      document.getElementById("input-berat-badan").value
    );
    let tinggiBadan = parseFloat(
      document.getElementById("input-tinggi-badan").value
    );

    if (beratBadan && tinggiBadan) {
      tinggiBadan = tinggiBadan / 100; // Convert cm to meters
      let bmi = beratBadan / (tinggiBadan * tinggiBadan);
      document.querySelector(".bmi-value").textContent = bmi.toFixed(1);

      let resultText = "";
      let programText = "";
      if (bmi < 18.5) {
        resultText = "Kekurangan berat badan";
        programText =
          "Program menaikan berat badan: Konsumsi makanan bergizi tinggi dan berkalori, hindari melewatkan waktu makan, dan lakukan olahraga ringan untuk meningkatkan massa otot.";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText = "Normal (ideal)";
        programText =
          "Anda memiliki berat badan yang ideal. Pertahankan pola makan sehat dan rutin berolahraga untuk menjaga kesehatan tubuh Anda.";
      } else if (bmi >= 25 && bmi <= 29.9) {
        resultText = "Kelebihan berat badan";
        programText =
          "Program menurunkan berat badan: Batasi asupan kalori, konsumsi makanan rendah lemak dan tinggi serat, serta lakukan olahraga secara rutin seperti jogging, bersepeda, atau berenang.";
      } else {
        resultText = "Kegemukan (Obesitas)";
        programText =
          "Program menurunkan berat badan: Konsultasikan dengan ahli gizi untuk mendapatkan rencana diet yang sesuai, lakukan olahraga yang sesuai dengan kondisi tubuh, dan monitor kesehatan secara berkala.";
      }
      document.querySelector(".bmi-status").textContent = resultText;
      document.querySelector(".bmi-program").textContent = programText;
    } else {
      alert("Mohon masukkan berat badan dan tinggi badan!");
    }
  });
document
  .getElementById("hitung-bmi-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let beratBadan = parseFloat(
      document.getElementById("input-berat-badan").value
    );
    let tinggiBadan = parseFloat(
      document.getElementById("input-tinggi-badan").value
    );

    if (beratBadan && tinggiBadan) {
      tinggiBadan = tinggiBadan / 100; // Convert cm to meters
      let bmi = beratBadan / (tinggiBadan * tinggiBadan);
      document.querySelector(".bmi-value").textContent = bmi.toFixed(1);

      let resultText = "";
      let programText = "";
      let consultMessage = "";

      if (bmi < 18.5) {
        resultText = "Kekurangan berat badan";
        programText =
          "Program menaikan berat badan: Konsumsi makanan bergizi tinggi dan berkalori, hindari melewatkan waktu makan, dan lakukan olahraga ringan untuk meningkatkan massa otot.";
        consultMessage =
          "Anda berada dalam kategori kekurangan berat badan. Konsultasikan dengan ahli gizi untuk mendapatkan saran mengenai pola makan yang lebih baik.";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText = "Normal (ideal)";
        programText =
          "Anda memiliki berat badan yang ideal. Pertahankan pola makan sehat dan rutin berolahraga untuk menjaga kesehatan tubuh Anda.";
        consultMessage =
          "Anda memiliki berat badan yang ideal. Teruskan pola hidup sehat Anda!";
      } else if (bmi >= 25 && bmi <= 29.9) {
        resultText = "Kelebihan berat badan";
        programText =
          "Program menurunkan berat badan: Batasi asupan kalori, konsumsi makanan rendah lemak dan tinggi serat, serta lakukan olahraga secara rutin seperti jogging, bersepeda, atau berenang.";
        consultMessage =
          "Anda berada dalam kategori kelebihan berat badan. Konsultasikan dengan ahli gizi untuk mendapatkan rencana diet yang sesuai.";
      } else {
        resultText = "Kegemukan (Obesitas)";
        programText =
          "Program menurunkan berat badan: Konsultasikan dengan ahli gizi untuk mendapatkan rencana diet yang sesuai, lakukan olahraga yang sesuai dengan kondisi tubuh, dan monitor kesehatan secara berkala.";
        consultMessage =
          "Anda berada dalam kategori kegemukan (obesitas). Sangat disarankan untuk konsultasi dengan ahli gizi dan mengikuti program penurunan berat badan yang tepat.";
      }

      document.querySelector(".bmi-status").textContent = resultText;
      document.querySelector(".bmi-program").textContent = programText;
      document.querySelector(".consult-message").textContent = consultMessage;
    } else {
      alert("Mohon masukkan berat badan dan tinggi badan!");
    }
  });
