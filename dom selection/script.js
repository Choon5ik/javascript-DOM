// DOM Selection 
// // 1. document.getElementById(); --> mereturn element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Anto';

// // 2. document.getElementsByTagName(); --> mereturn HTMLCollections berbentuk array
// // let p = document.getElementsByTagName('p');
// // for(let i = 0; i < p.length; i++){
// //     p[i].style.backgroundColor = 'lightblue';
// // };

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // 3. document.getElementsByClassName(); --> mereturn HTMLCollections
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Ini diubah dari javascript';

// // 4. document.querySelector(); --> mereturn element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // const p = document.querySelector('p');
// // p.innerHTML = 'ini diubah dari javascript';

// // 5. document.querySelectorAll(); --> mereturn nodelist
// const p = document.querySelectorAll('p');
// for( let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

// Mengganti node root
// const sectionB = document.queryselector('section#b');
const sectionB = document.getElementById('b');
// const p4 = sectionB.getElementsByTagName('p')[0];
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';