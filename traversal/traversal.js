// Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// DOM Traversal
// const close = document.querySelectorAll(".close");

// for (i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(event) {
//         // close[i].parentelement.style.display = 'none';
//         event.target.parentElement.style.display = 'none';
//     });
// }

// close.forEach(function (el) {
//     el.addEventListener("click", function (event) {
//     event.target.parentElement.style.display = "none";
// event.preventDefault(); /*menghentikan aksi default*/
// event.stopPropagation(); /*untuk menghentikan event bubbling*/
//     });
// });

// event bubbling = ketika kita punya sebuah event di html dan dijalankan parent nya pun akan dijalankan dan akan mengecek keatas terus
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('ok');
//     });
// });

// const nama = document.querySelector('.nama');
// nama.parentNode;
// parentNode = Node;
// parentElement = element;
// nextSibling = node;
// nextElementSibling = element;
// previousSibling = node;
// previousElementSibling = element;

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});
