

$(document).ready(function() {
    $('.button').click(function(){
   var nama = $('#fname').val();
   console.log(nama);
    });
  
    const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let slideIndex = 0;
  
  function showSlide(index) {
    if (index < 0) {
      slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
      slideIndex = 0;
    }
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
  }
  
  function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
  }
  
  function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }
  
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  
  showSlide(slideIndex);
  
  // function makan
  let count = 100; 
    
  let intervalId = setInterval(function() {
    count = count - 10; 
  
    let barElement = document.getElementById("myBar");
  barElement.style.width = count + "%";
    if (count < 0) {
      clearInterval(intervalId); 
      window.alert("PET KAMU MATI");
    }
  }, 10000);
  var i = 0;
      function buttonClick() {
          if (count <= 100){
          document.getElementById('inc').value = count =count +10;
      }
  }
  // function tidur
  let count1 = 100; 
      
      let intervalId1 = setInterval(function() {
        count1= count1 - 5; 
      
        let barElement = document.getElementById("myBar1");
      barElement.style.width = count1 + "%";
        if (count1 < 0) {
          clearInterval(intervalId1); 
          window.alert("PET KAMU MATI");
        }
      }, 10000);
      var i1= 0;
          function buttonClick() {
              if (count1 <= 100){
              document.getElementById('inc').value = count1 =count1 +10;
          }
      }
      // function game
  let count2 = 100; 
      
      let intervalId2 = setInterval(function() {
        count2= count2 - 4; 
      
        let barElement = document.getElementById("myBar2");
      barElement.style.width = count2 + "%";
        if (count2 < 0) {
          clearInterval(intervalId1); 
          window.alert("PET KAMU MATI");
        }
      }, 10000);
      var i2= 0;
          function buttonClick() {
              if (count2 <= 100){
              document.getElementById('inc').value = count2 =count2 +10;
          }
      }
      // function obat
  let count3 = 100; 
      
      let intervalId3 = setInterval(function() {
        count3= count3 - 8; 
      
        let barElement = document.getElementById("myBar3");
      barElement.style.width = count3 + "%";
        if (count3 < 0) {
          clearInterval(intervalId2); 
          window.alert("PET KAMU MATI");
        }
      }, 1000);
      var i3= 0;
          function buttonClick() {
              if (count3 <= 100){
              document.getElementById('inc').value = count3 =count3 +10;
          }
      }
  
  });
  
  