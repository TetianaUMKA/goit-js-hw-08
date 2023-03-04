import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryContainerEl = document.querySelector('.gallery');

const items = galleryItems.map(item => {
  return `<a class='gallery__link' href ='${item.original}'><img class='gallery__image' src='${item.preview}' alt='${item.description}' title='${item.description}' /></a>`;
}).join('');

galleryContainerEl.innerHTML = items;

const lightbox = new SimpleLightbox(
    '.gallery a',
    { captionDelay: 250, scrollZoom: false }
);

