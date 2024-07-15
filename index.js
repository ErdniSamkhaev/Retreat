const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const openModalButton = document.getElementById("openModal");
  const modal = document.getElementById("modal");
  const yandexFormContainer = document.getElementById("yandexFormContainer");

  openModalButton.addEventListener("click", function () {
    modal.style.display = "block";

    // Проверяем, загружена ли уже форма
    if (!yandexFormContainer.querySelector("iframe")) {
      // Создаем элемент iframe и добавляем форму Яндекс внутрь него
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://forms.yandex.ru/cloud/66942e2c90fa7b02bed222ed/?iframe=1";
      iframe.frameBorder = "0";
      iframe.name = "ya-form-66942e2c90fa7b02bed222ed";
      iframe.width = "650";
      yandexFormContainer.appendChild(iframe);
    }
  });

  const closeModalButton = document.getElementById("closeModal");
  closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
