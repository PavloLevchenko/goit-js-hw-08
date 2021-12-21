import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const insertHTML = galleryItems.reduce((divs, image) => {
  return (
    divs +
    `<div class="gallery__item">
			<a href="${image.original}" class="gallery__link">
				<image class="gallery__image" src="${image.preview}" alt="${image.description}" loading="lazy">
			</a>
      <div class="gallery__info">
        <p class="gallery__info-item">
          <b>Likes</b>
        </p>
        <p class="gallery__info-item">
          <b>Views</b>
        </p>
        <p class="gallery__info-item">
          <b>Comments</b>
        </p>
        <p class="gallery__info-item">
          <b>Downloads</b>
        </p>
      </div>
		</div>`
  );
}, '');

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', `${insertHTML}`);

const lightbox = new SimpleLightbox('.gallery .gallery__link', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  captionClass: 'gallery__caption',
});
