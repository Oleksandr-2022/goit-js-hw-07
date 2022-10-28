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
    onShow: () => {
      console.log("Додав ESC");
      document.addEventListener("keydown", onPressEscape);
    },
    onClose: () => {
      console.log("Прибрав ESC");
      document.removeEventListener("keydown", onPressEscape);
    },
  }
);
instance.show();
}
function onPressEscape(event) {
  if (event.key === "Escape") {
    instance.close(() => {
      console.log("Закрив, як нажав ESC");
    });
  }
}

// function getModalImageOpen(event) {
//   document.addEventListener("keydown", onPressEscape);
//   event.show();
// }

// function getModalImageClose(event) {
//   document.removeEventListener("keydown", onPressEscape);
//   event.close();
// }

// function onPressEscape(event) {
//   if (event.code === "Escape") {
//     getModalImageClose(instance);
//   }
// }


// Доброго дня, Олександр) 
// У вас слухач знімається тільки при натисканні клавіші esc. Перечитайте  мої коментарі та подивіться уважно, як зняти слухач за допомогою методу onClose бібліотеки basicLightbox.


// Доброго вечора, Олександр)
// По першому завданню подивіться тут https://github.com/electerious/basicLightbox як можна реалізувати зняття слухача повністю при закритті модалки. Враховуйте, що слухач потрібно знімати і при закритті модалки по кліку.
// Подивіться, будь ласка, методи onShow та onClose бібліотеки basicLightbox.
// Також зверніть увагу, що слухач клавіатури додається на document, а не на window. 