    import { galleryItems } from './gallery-items.js';
// Change code below this line

//1 Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const galleryList = document.querySelector(".gallery");
const galleryImage = document.querySelectorAll(".gallery__image");
const galleryMarkup = createGallerySmallPictureCard(galleryItems);
let instance;

galleryList.innerHTML = galleryMarkup;


//2 Реалізація делегування на div.gallery і отримання url великого зображення.
galleryList.addEventListener("click", onGalleryImageClick);

// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>,
// і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

function createGallerySmallPictureCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
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

function onGalleryImageClick(e) {
    //6 Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку
    //  за замовчуванням користувач буде перенаправлений на іншу сторінку.
    // Заборони цю поведінку за замовчуванням.
    e.preventDefault();
  
    //5 Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
    // Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
    galleryImage.src = e.target.dataset.source;
  
    //4 Відкриття модального вікна по кліку на елементі галереї.
    // Для цього ознайомся з документацією і прикладами.
    instance = basicLightbox.create(`<img src="${galleryImage.src}">`);
    onModalImageOpen(instance);
}

function onModalImageOpen(e) {
    window.addEventListener("keydown", onEscKeyPress);
    e.show();
}

function onModalImageClose(e) {
    window.removeEventListener("keydown", onEscKeyPress);
    e.close();
}

function onEscKeyPress(e) {
    if (e.code === "Escape") {
      onModalImageClose(instance);
    }
}

// console.log(galleryItems);
