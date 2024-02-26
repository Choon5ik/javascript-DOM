// 1. element.innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = '<em>Anto</em>';

const sectionA = document.querySelector('section#a');
sectionA.innerHTML = '<div><p>paragraf1</p></div>';

// 2. element.style.<propertiCSS>
const judul = document.querySelector('#judul');
judul.style.color = 'lightblue';
judul.style.backgroundColor = 'salmon';

// 3. setAttribute
const judul = document.getElementsByTagName('h1')[0];
const a= document.querySelector('section#a a');

// a.setAttribute('id', 'link'); /*akan menimpa element yang lama*/
// a.getAttribute('href');
// a.removeAttribute('id');

// 4. classList
const p2 = document.querySelector('p2');
p2.classList.add('label'); /*menambahkan element tanpa menimpa*/
p2.classList.remove('label'); /*akan menghapus element jika tidak ada pun tidak masalah*/
p2.classList.toggle('label'); /*jika belum ada akan menambahkan element baru jika sudah ada maka akan menghapus*/
p2.classList.item(2); /*akan menampilkan kelas yang ada di document*/
p2.classList.contains('dua'); /*menanyakan apakah ada nama kelas di document */
p2.classList.replace('tiga', 'empat'); /*mengganti nama kelas di document */
