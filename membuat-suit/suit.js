function getPilihanComp() {
    const comp = Math.random();   
    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return "orang";
    return "semut";
}

function getResult(comp, player) {
    // menentukan rules
    if( player == comp ) return 'SERI';
    if (player == 'gajah') return ( comp == 'orang') ? 'MENANG' : 'KALAH';
    if (player == 'orang') return ( comp == 'gajah') ? 'KALAH' : 'MENANG';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG';
}

function mix() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar =  ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuAwal = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - waktuAwal > 1000) {
            clearInterval;
            return;
        } 
        imgComputer.setAttribute('src', 'assets/' + gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    }, 100)
}

// add event

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComp = getPilihanComp();
        const pilihanPlayer = pil.className;
        const hasil = getResult(pilihanComp, pilihanPlayer);
        mix();

        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'assets/' + pilihanComp + '.png');
    
                const info = document.querySelector('.info');
                info.innerHTML = hasil;
        });
        }, 1000);
    // console.log('comp: ' + pilihanComp);
    // console.log('player: ' + pilihanPlayer);
    // console.log('hasil: ' + hasil);
});

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComp, pilihanPlayer);
//     // console.log('comp: ' + pilihanComp);
//     // console.log('player: ' + pilihanPlayer);
//     // console.log('hasil: ' + hasil);

//     // ganti gambar
//     const imgComputer= document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'assets/' + pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComp, pilihanPlayer);
//     // console.log('comp: ' + pilihanComp);
//     // console.log('player: ' + pilihanPlayer);
//     // console.log('hasil: ' + hasil);

//     // ganti gambar
//     const imgComputer= document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'assets/' + pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pilihanComp = getPilihanComp();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComp, pilihanPlayer);
//     // console.log('comp: ' + pilihanComp);
//     // console.log('player: ' + pilihanPlayer);
//     // console.log('hasil: ' + hasil);

//     // ganti gambar
//     const imgComputer= document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'assets/' + pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });