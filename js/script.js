// Mostrar/ocultar botón de subir
window.addEventListener('scroll', function() {
  const scrollTop = document.getElementById('scrollTop');
  if (window.scrollY > 300) {
      scrollTop.classList.add('visible');
  } else {
      scrollTop.classList.remove('visible');
  }
});

// Scroll suave al hacer clic en el botón
document.getElementById('scrollTop').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

// Año actual en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Carga diferida de imágenes
// document.addEventListener('DOMContentLoaded', function() {
//   const lazyImages = [].slice.call(document.querySelectorAll('img[loading="lazy"]'));
  
//   if ('IntersectionObserver' in window) {
//       const lazyImageObserver = new IntersectionObserver(function(entries) {
//           entries.forEach(function(entry) {
//               if (entry.isIntersecting) {
//                   const lazyImage = entry.target;
//                   lazyImage.src = lazyImage.dataset.src;
//                   lazyImageObserver.unobserve(lazyImage);
//               }
//           });
//       });

//       lazyImages.forEach(function(lazyImage) {
//           lazyImageObserver.observe(lazyImage);
//       });
//   }
// });