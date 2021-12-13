import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

let insertHTML = '';
for (const image of galleryItems) {
  insertHTML += `<div class="gallery__item">
			<a href="${image.original}" class="gallery__link">
				<image class="gallery__image" src="${image.preview}" alt="${image.description}">
			</a>
		</div>`;
}

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
