import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const imgContainer = document.querySelector(".gallery");
let preview = {};

let galleryMarkup = createMarkup(galleryItems);
imgContainer.innerHTML = galleryMarkup;

imgContainer.addEventListener("click", onClickImg);

function createMarkup(galleryData) {
  return galleryData
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
              </a>
            </div>
            `;
    })
    .join("");
}

function onClickImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  createBasicLightbox(event.target);
  modalOpen(preview);
}

function createBasicLightbox(img) {
  preview = basicLightbox.create(`
      <img src="${img.getAttribute("data-source")}" width="800" height="600">
      `);
}

function modalOpen() {
  preview.show();
  window.addEventListener("keydown", closeOnEscPress);
}

function closeOnEscPress(event) {
  if (event.code !== "Escape") {
    return;
  }
  preview.close();
  window.removeEventListener("keydown", closeOnEscPress);
}
