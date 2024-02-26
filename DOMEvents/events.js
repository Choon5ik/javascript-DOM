// // event handling
// const p3 = document.querySelector('.p3');

// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// <-------------------------------------------------------------------->

// // addEventListener();
// // tangkap paragraf yang akan diambil
// const p4= document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     // ambil parent
//     const ul = document.querySelector('section#b ul');
//     // bikin element baru
//     const liBaru = document.createElement('li');
//     const textLiBaru = document.createTextNode('item baru!');
//     // tambahkan ke dalam ul
//     liBaru.appendChild(textLiBaru);
//     ul.appendChild(liBaru);
// });

// <-------------------------------------------------------------------->
// sifat event handler menimpa
// const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function() {
//     p3.style.color = 'red';
// }

// <----------------------------------------------------------------------->
// sifat event listener tidak menimpa melainkan menambahkan maka 2 event di bawah ini akan dijalankan semua
p3.addEventListener("click", function () {
    p3.style.backgroundColor = "lightblue";
});
p3.addEventListener("click", function () {
    p3.style.color = "red";
});
