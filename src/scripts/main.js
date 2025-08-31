'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const thumbnailsContainer = document.querySelector('.gallery-thumbnails');
  const mainImage = document.querySelector('.gallery-main-image');

  if (!thumbnailsContainer || !mainImage) {
    return;
  }

  thumbnailsContainer.addEventListener('click', function (e) {
    const target = e.target;

    if (target.tagName === 'IMG') {
      mainImage.src = target.dataset.full || target.src;
      mainImage.alt = target.alt || '';
    } else if (target.tagName === 'A' && target.querySelector('img')) {
      const img = target.querySelector('img');

      if (img) {
        mainImage.src = img.dataset.full || img.src;
        mainImage.alt = img.alt || '';
      }
    }
    e.preventDefault();
  });
});
