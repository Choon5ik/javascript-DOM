// 1. Mengubah warna
// tangkap elementnya
const tUbahWarna = document.getElementById("tUbahWarna");
// tambahkan onclick
tUbahWarna.addEventListener("click", function () {
  // document.body.style.backgroundColor = 'red';
  // document.body.setAttribute('class', 'biru-muda');
  document.body.classList.toggle("biru-muda");
});

// <------------------------------------------------------------------------------>

// 2. Memunculkan warna random
// bikin tombol
const tAcakWarna = document.createElement("button");
const textTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(textTombol);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);

// add event
tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor =  `rgb(${r}, ${g}, ${b})`;
});

// <------------------------------------------------------------------------------>

// 3. Menambahkan slider
// tangkap slider
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

// tambahkan event
sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

// <-------------------------------------------------------------------------------->

// 4. Cursor Bergerak
document.body.addEventListener('mousemove', function(event) {
    // cari posisi mouse x dan y
    // console.log(event.clientX);
    // console.log(event.clientY);
    // ukuran browser
    // console.log(window.innerWidth);

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';
});