import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imgContainer = document.querySelector(".gallery");
let galleryMarkup = createMarkup(galleryItems);

imgContainer.innerHTML = galleryMarkup;

function createMarkup(galleryData) {
  return galleryData
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}"
      alt="${description}"/>
      </a>
      `;
    })
    .join("");
}

const modal = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
