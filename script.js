const teksAwal = [" Web Developer", "Graphic Designer", "UI/UX Designer", "photographer"];
let index = 0;

function gantiTeks() {
  const elemenTeks = document.getElementById("teks");
  elemenTeks.textContent = teksAwal[index];
  index++;

  // Jika index sudah mencapai akhir array, reset ke awal
  if (index === teksAwal.length) {
    index = 0;
  }
}

// Jalankan fungsi gantiTeks setiap 2 detik (sesuaikan waktunya)
setInterval(gantiTeks, 3500);

window.addEventListener('scroll', function() {
    const button = document.querySelector('.whatsapp-button');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 400) { // Sesuaikan nilai ini dengan posisi scroll yang diinginkan
      button.style.opacity = 1;
    } else {
      button.style.opacity = 0;
    }
  });

  // fix up button

  const myButton = document.getElementById('myButton');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // User scrolled down
        myButton.classList.remove('show');
    } else {
        // User scrolled up
        myButton.classList.add('show');
    }

    lastScrollTop = scrollTop;
});
