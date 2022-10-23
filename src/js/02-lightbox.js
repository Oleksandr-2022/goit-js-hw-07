import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryImage = document.querySelectorAll(".gallery__image");
const galleryMarkup = createGallerySmallPictureCard(galleryItems);

galleryList.innerHTML = galleryMarkup;

function createGallerySmallPictureCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

// 2) Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.
// Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
//done

let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  // 3) Ініціалізація бібліотеки після створення і додання елементів галереї
  // у div.gallery. Для цього ознайомся з документацією SimpleLightbox -
  // насамперед секції «Usage» і «Markup».
  
  // 4) Подивися в документації секцію «Options» і додай відображення
  // підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється
  //  через 250 мілісекунд після відкриття зображення.


// console.log(galleryItems);
