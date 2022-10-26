//     import { galleryItems } from './gallery-items.js';
// // Change code below this line

// //1 Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// const galleryList = document.querySelector(".gallery");
// const galleryImage = document.querySelectorAll(".gallery__image");
// const galleryMarkup = createGallerySmallPictureCard(galleryItems);
// let instance;

// galleryList.innerHTML = galleryMarkup;


// //2 Реалізація делегування на div.gallery і отримання url великого зображення.
// galleryList.addEventListener("click", onGalleryImageClick);

// // Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>,
// // і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// function createGallerySmallPictureCard(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//         <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//         />
//         </a>
//         </div>`;
//     })
//     .join("");
// }

// function onGalleryImageClick(e) {
//     //     e.preventDefault();
//     //     galleryImage.src = e.target.dataset.source;
//     //     instance = basicLightbox.create(`<img src="${galleryImage.src}">`);
//     onModalImageOpen(instance);
// }

// function onModalImageOpen(e) {
//     // window.addEventListener("keydown", onEscKeyPress);
//     document.addEventListener("keydown", onEscKeyPress);
//     e.show();
// }

// function onModalImageClose(e) {
//     // window.removeEventListener("keydown", onEscKeyPress);
//     document.removeEventListener("keydown", onEscKeyPress);
//     e.close();
// }

// function onEscKeyPress(e) {
//     if (e.code === "Escape") {
//       onModalImageClose(instance);
//     }
// }

// // console.log(galleryItems);


  import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGalleryRef = document.querySelector(".gallery");
const galleryItemsRef = createGalleryItems(galleryItems);
listGalleryRef.innerHTML = galleryItemsRef;
let instance;

listGalleryRef.addEventListener("click", onListGalleryClick);

function createGalleryItems(items) {
  return items
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
    </div>`;
    })
    .join("");
}

function onListGalleryClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const originalSrc = event.target.dataset.source;

  instance = basicLightbox.create(`<img src="${originalSrc}">`, {
    closable: true,
  });
  getModalImageOpen(instance);
}

function getModalImageOpen(event) {
  window.addEventListener("keydown", onPressEscape);
  event.show();
}

function getModalImageClose(event) {
  window.removeEventListener("keydown", onPressEscape);
  event.close();
}

function onPressEscape(event) {
  if (event.code === "Escape") {
    getModalImageClose(instance);
  }
}
