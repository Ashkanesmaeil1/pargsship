let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.body.className = `lang-${lang}`;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-lang]').forEach(el => {
        el.classList.toggle('active', el.dataset.lang === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
});

// === MODAL FUNCTIONS ===
function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = src;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // جلوگیری از اسکرول
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 400);
}

// بستن با ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// انتخاب تصویر اصلی و تمام تصاویر گالری
// const mainImage = document.querySelector('.product-main-image img');
// const galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));

// let currentIndex = 0;
// const intervalTime = 5000; // ۳ ثانیه

// function changeImage() {
//   // اضافه کردن افکت fade-out
//   mainImage.classList.add('fade-out');

//   setTimeout(() => {
//     // تغییر عکس بعد از محو شدن
//     mainImage.src = galleryImages[currentIndex].src;
//     mainImage.alt = galleryImages[currentIndex].alt;

//     // حذف fade-out تا دوباره ظاهر شود
//     mainImage.classList.remove('fade-out');

//     // رفتن به عکس بعدی
//     currentIndex = (currentIndex + 1) % galleryImages.length;
//   }, 1000); // باید با زمان transition در CSS یکی باشد (۱ ثانیه)
// }

// // شروع اتوماتیک چرخش تصاویر
// setInterval(changeImage, intervalTime);

const mainImage = document.querySelector('.product-main-image img');
  const galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
  const bgWrapper = document.querySelector('.bg-wrapper');

  let currentIndex = 0;
  const intervalTime = 5000;

  function changeImage() {
    mainImage.classList.add('fade-out');

    setTimeout(() => {
      const newSrc = galleryImages[currentIndex].src;

      mainImage.src = newSrc;
      mainImage.alt = galleryImages[currentIndex].alt;

      bgWrapper.style.backgroundImage = `url('${newSrc}')`;

      mainImage.classList.remove('fade-out');
      currentIndex = (currentIndex + 1) % galleryImages.length;
    }, 1000);
  }

  setInterval(changeImage, intervalTime);