// DOM Manipulation Node
// 1. appendChild
// buat elemen baru
const pBaru = document.createElement("p");
const textPBaru = document.createTextNode("Paragraf Baru");
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// simpan pBaru di akhir Section A
const sectionA = document.querySelector("section#a");
sectionA.appendChild(pBaru);

// <----------------------------------------------------------->

// 2. insertBefore
// buat li baru
const liBaru = document.createElement("li");
const textLibaru = document.createTextNode("Item Baru");
liBaru.appendChild("textLiBaru");

// tangkap parent dan tangkap element setelahnya
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

// <------------------------------------------------------------>

// 3. removeChild
// ambil parentnya dan ambil element yang ingin di hapus
const link = document.getElementsByTagName("a")[0];

// hapus element
sectionA.removeChild(link);

// <----------------------------------------------------------->

// 4. replaceChild

// ambil parentnya dan ambil element yang ingin di ganti
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

// bikin element baru
const h2Baru = document.createElement('h2');
const texth2Baru = document.createTextNode('Judul Baru!');
h2Baru.appendChild(texth2Baru);

// ganti element (node baru, node yang lama);
sectionB.replaceChild(h2Baru, p4);

// <------------------------------------------------------------->

// element baru yang dibuat dengan DOM
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';