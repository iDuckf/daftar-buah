const API_URL = "https://script.google.com/macros/s/AKfycbxNBPDU-KDSnh5p-JQHvYn1QBG6BQNo9QcQ7KdOnYOPy-Hfzf06iCss9TYrR2s-qLZh/exec";

fetch(API_URL)
  .then(response => response.json())
  .then(result => {
    const data = result.data;

    // Ambil header dari object pertama
    const headers = Object.keys(data[0]);

    // Tampilkan header tabel
    const headerRow = document.getElementById("header");
    headers.forEach(h => {
      const th = document.createElement("th");
      th.innerText = h;
      headerRow.appendChild(th);
    });

    // Tampilkan isi tabel
    const body = document.getElementById("body");
    data.forEach(item => {
      const tr = document.createElement("tr");

      headers.forEach(h => {
        const td = document.createElement("td");
        td.innerText = item[h];
        tr.appendChild(td);
      });

      body.appendChild(tr);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });