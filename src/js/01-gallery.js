// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line


const markUp = galleryItems.map(item =>
    `<a class="gallery__item" href="${item.original}">
   <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
 </a>`).join('');

const list = document.querySelector('.gallery');
list.insertAdjacentHTML('beforeend', markUp);

let gallery = new SimpleLightbox('.gallery a');
gallery.options.captionsData = 'alt';
gallery.options.captionDelay = 250;





