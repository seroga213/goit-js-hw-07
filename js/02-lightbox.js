import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createGalleryCardEl = ({ preview, original, description }) =>
  `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a></li>`;

const addCardGalleryEl = galleryItems.map(createGalleryCardEl).join('');

galleryContainer.insertAdjacentHTML('beforeend', addCardGalleryEl);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});