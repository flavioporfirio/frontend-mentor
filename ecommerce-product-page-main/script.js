"Strict mode";

const btnIncrease = document.querySelector(".btn-increase");
const btnDecrease = document.querySelector(".btn-decrease");

const inputAmount = document.querySelector("#input-amount");

const basketContainer = document.querySelector(".basket-container");
const basketItemContainer = document.querySelector(".basket-items-container");
const profileImg = document.querySelector(".profile--info");

const thumbnailContainer = document.querySelector(".thumbnail-container");
const mainImg = document.querySelector(".top-img");

const sectionList = document.querySelector(".sections--list");
const focusedHidden = document.querySelector(".focused-hidden");

const btnAddCart = document.querySelector(".btn-add-cart");

const productName = document.querySelector(".product--name");
const productPrice = document.querySelector(".product-price");
const cartSvg = document.querySelector(".cart-svg");
const numItemsCart = document.querySelector(".num-items-cart");
const line = document.querySelector(".line");

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const imgThumbnailModal = document.querySelectorAll(".thumb-img-modal");
const thumbnailContainerModal = document.querySelector(
  ".thumbnail-container-modal"
);
const thumbnailContainerImg = document.querySelectorAll(".thumb-img");
const mainImgModal = document.querySelector(".top-img-modal");
const closeModalIcon = document.querySelector(".close-modal-icon");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

const topImgModal = document.querySelector(".top-img-modal");

const overlayMobile = document.querySelector(".overlay-mobile");
const btnLeftMobile = document.querySelector(".btn-left-mobile");
const btnRightMobile = document.querySelector(".btn-right-mobile");
const menuSVG = document.querySelector(".menu-svg");
const menuEl = document.querySelector(".menu-el");
const closeMenu = document.querySelector(".close-menu");

let isActive = false;
let removeItem, cartItemContainer;

btnIncrease.addEventListener("click", function () {
  inputAmount.value++;
});

btnDecrease.addEventListener("click", function () {
  if (inputAmount.value <= 0 || inputAmount.value === "") return;

  inputAmount.value--;
});

thumbnailContainer.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("thumb-img")) return;

  e.target.style.opacity = "0.5";
});

thumbnailContainer.addEventListener("mouseout", function (e) {
  if (!e.target.classList.contains("thumb-img")) return;

  e.target.style.opacity = "1";
});

thumbnailContainer.addEventListener("click", function (e) {
  const { img } = e.target.dataset;

  if (!e.target.classList.contains("thumb-img")) return;

  mainImg.setAttribute("src", `./images/image-product-${img}.jpg`);
  mainImgModal.setAttribute("src", `./images/image-product-${img}.jpg`);
});

// Focused link
sectionList.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("section-link")) return;

  const coords = e.target.getBoundingClientRect();

  focusedHidden.style.display = "inline-block";

  focusedHidden.style.left = `${coords.left.toFixed(2)}px`;
  focusedHidden.style.width = `${coords.width.toFixed(2)}px`;
});

sectionList.addEventListener("mouseout", function (e) {
  if (!e.target.classList.contains("section-link")) return;

  focusedHidden.style.display = "none";
});

// Basket container - só falta isso
if (basketItemContainer.children.length === 0) {
  basketItemContainer.innerHTML = "Your cart is empty.";
}

// Encontrar uma forma de abrir o basket
const showBasket = function (e, remove = false) {
  if (!e.target.classList.contains("profile-item")) return;

  remove === false
    ? basketContainer.classList.remove("hidden")
    : basketContainer.classList.add("hidden");
};

profileImg.addEventListener("click", function (e) {
  if (isActive) {
    showBasket(e, true);
    isActive = !isActive;
    return;
  }
  showBasket(e);
  isActive = !isActive;
  return;
});

btnAddCart.addEventListener("click", function () {
  basketItemContainer.innerHTML = "";

  if (inputAmount.value == 0 || inputAmount.value === "") {
    basketItemContainer.innerHTML = "Your cart is empty.";
    numItemsCart.style.opacity = 0;
    return;
  }

  numItemsCart.innerHTML = `${inputAmount.value}`;
  numItemsCart.style.opacity = 1;

  let mainImgSrc = mainImg.getAttribute("src").slice(-5, -4);

  let total = productPrice.innerHTML.slice(1) * inputAmount.value;

  basketItemContainer.insertAdjacentHTML(
    "beforeend",
    `
    <li>
      <div class="cart-item-container">
        <img src="${`./images/image-product-${mainImgSrc}-thumbnail.jpg`}" alt="" />
        <div class="item-info">
          <p>${productName.innerHTML}</p>
          <p>${productPrice.innerHTML} x${inputAmount.value
    } <span>$${total}</span></p>
        </div>
        <div class="remove-item"><ion-icon name="trash-outline"></ion-icon></div>
      </div>
      <button class="btn-checkout">Checkout</button>
    </li>
    `
  );

  removeItem = document.querySelector(".remove-item");

  cartItemContainer = document.querySelector(".cart-item-container");

  removeItem.addEventListener("click", function () {
    cartItemContainer.parentElement.remove();

    basketItemContainer.innerHTML = "Your cart is empty.";
    numItemsCart.style.opacity = 0;
  });
});

// Modal - overlay
let currSlide = 1;
let maxSlide = imgThumbnailModal.length;
let firstTime = 0;
let currImg = 1;

const openModal = function () {
  modal.classList.remove("hidden-ov");
  overlay.classList.remove("hidden-ov");
};

const closeModal = function () {
  modal.classList.add("hidden-ov");
  overlay.classList.add("hidden-ov");
};

const setFocusedImg = function (htmlEl) {
  htmlEl.style.opacity = "0.6";
  htmlEl.style.border = "3px solid var(--orange)";
};

const unsetFocusedImg = function (htmlEl) {
  htmlEl.style.opacity = "1";
  htmlEl.style.border = "none";
};

mainImg.addEventListener("click", function () {
  openModal();

  imgThumbnailModal.forEach(thumbImg => {
    unsetFocusedImg(thumbImg);
  });

  setFocusedImg(imgThumbnailModal[currImg - 1]);
  currSlide = currImg;
});

thumbnailContainer.addEventListener("click", function (e) {
  const { img } = e.target.dataset;
  currImg = Number(img);

  if (!e.target.classList.contains("thumb-img")) return;
});

// Modal
const focusedImg = function (modal = true) {
  const imgType = modal ? topImgModal : mainImg;
  const thumbnailType = modal ? imgThumbnailModal : thumbnailContainerImg;

  imgType.setAttribute("src", `./images/image-product-${currSlide}.jpg`);

  thumbnailType.forEach(imgs => {
    const { img } = imgs.dataset;
    if (Number(img) === currSlide) {
      setFocusedImg(imgs);
    } else {
      unsetFocusedImg(imgs);
    }
  });
};

const attNextCurrSlide = function () {
  if (currSlide === maxSlide) {
    currSlide = 1;
  } else {
    currSlide++;
  }
};

const attPrevCurrSlide = function () {
  if (currSlide === 1) {
    currSlide = maxSlide;
  } else {
    currSlide--;
  }
};

const nextSlide = function () {
  attNextCurrSlide();
  focusedImg();
};

const prevSlide = function () {
  attPrevCurrSlide();
  focusedImg();
};

const nextSlideMobile = function () {
  attNextCurrSlide();
  focusedImg(false);
};

const prevSlideMobile = function () {
  attPrevCurrSlide();
  focusedImg(false);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
btnRightMobile.addEventListener("click", nextSlideMobile);
btnLeftMobile.addEventListener("click", prevSlideMobile);

thumbnailContainerModal.addEventListener("click", function (e) {
  const { img } = e.target.dataset;

  if (!e.target.classList.contains("thumb-img-modal")) return;

  mainImgModal.setAttribute("src", `./images/image-product-${img}.jpg`);

  imgThumbnailModal.forEach(thumbImg => {
    unsetFocusedImg(thumbImg);
  });

  setFocusedImg(e.target);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    prevSlide();
  }
});

overlay.addEventListener("click", function () {
  closeModal();
});

closeModalIcon.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Mobile
const toggleMobileMenu = function (open = true) {
  open === true
    ? overlayMobile.classList.remove("hidden-mobile")
    : overlayMobile.classList.add("hidden-mobile");

  menuSVG.classList.toggle("clicked");
  menuEl.classList.toggle("hidden-close");
  closeMenu.classList.toggle("hidden-close");
};

menuEl.addEventListener("click", function () {
  toggleMobileMenu();
});

closeMenu.addEventListener("click", function () {
  toggleMobileMenu(false);
});

overlayMobile.addEventListener("click", function () {
  toggleMobileMenu(false);
});

/*
  O que falta:
    - Refatoração (praticamente acabei - falta basket)
    - Arrumar o click para abrir a basket no svg do carrinho
*/
