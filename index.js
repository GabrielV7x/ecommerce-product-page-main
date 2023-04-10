// menu hover
const lis =[...document.querySelectorAll("li")] ;

const menuAnimation = (li) => {

  li.addEventListener("mouseenter", function() {
    li.classList.add("show_li");
  });

  li.addEventListener("mouseleave", function() {
    li.classList.remove("show_li");
  });
};

lis.forEach(menuAnimation);

// Cart popup animation
const cart = document.querySelector(".cart");
const cartPopup = document.querySelector(".cart_popup");

const cartPopupShow = (cart, cartPopup) => {
  cart.addEventListener("click", function() {
    console.log("test1");
    if (cartPopup.style.display === "block") {
      console.log("test2");
      cartPopup.style.display = "none"
    }
    else {
      console.log("test3");
      cartPopup.style.display = "block"
    }
  });

};

cartPopupShow(cart,cartPopup);
