const batu = document.querySelectorAll('.batu');
const lion = document.querySelectorAll('.lion');
const papanSkor = document.querySelector('.papan-skor');


let batuSebelumnya;
let selesai;
let skor;

function randomBatu(batu) {
  const t = Math.floor(Math.random() * batu.length);
  const tRandom = batu[t];
  if (tRandom == batuSebelumnya) {
    randomBatu(batu);
  }
  batuSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanLion() {
  const tRandom = randomBatu(batu);
  const wRandom = randomWaktu(500, 2000);
  tRandom.classList.add('muncul');

  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if (!selesai) {
      munculkanLion();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanLion();
  setTimeout(() => {
    selesai = true;
    Swal.fire('Game Sudah berakhir')
    document.getElementById("slideshow").style.display = "none";
    document.getElementById("center").style.display="none";
    document.getElementById("fname").style.display="none";
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display ="";
    document.getElementById("fname").style.display="none";            
    document.getElementById("center").style.display="none";
    document.getElementById("activepng").style.display ="";
    document.getElementById("boost").style.display ="";
    document.getElementById("boost1").style.display ="";
    document.getElementById("bonus").style.display="none";
  }, 10000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove('muncul');
  pop.play();
  papanSkor.textContent = skor;
}

lion.forEach(t => {
  t.addEventListener('click', pukul);
});