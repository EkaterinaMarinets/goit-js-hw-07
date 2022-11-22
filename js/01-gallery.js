import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(createImgCardsMarkup(galleryItems));

const imgGalleryObject = document.querySelector('.gallery');
const markupGallery = createImgCardsMarkup(galleryItems);
imgGalleryObject.insertAdjacentHTML("beforeend", markupGallery);
// imgGalleryObject.addEventListener('click', onClickImg);

function createImgCardsMarkup(galleryItems) {
   return galleryItems
      .map(({ preview, original, description }) => {
         return `<div class ="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" 
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>`;
      }).join("");
}