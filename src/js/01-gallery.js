import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryContainerEl = document.querySelector('.gallery');

const items = galleryItems.map(item => {

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = item.original;

    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery__image');
    galleryImg.src = item.preview;
    galleryImg.alt = item.description;
    galleryImg.title = item.description;
    
    galleryLink.append(galleryImg);
    return galleryLink;  
});

galleryContainerEl.append(...items);

const lightbox = new SimpleLightbox(
    '.gallery a',
    { captionDelay: 250, scrollZoom: false }
);

