export default function product() {

  //  change the main img according to the thumbnials selected
  const mainImg = document.querySelector(".main_image img[src]");
  // const thumbContainers = [...document.querySelectorAll(".thumbnails div")];
  const thumbnails = [...document.querySelectorAll(".thumbnails img[src]")];

  function becomeMainImg(img) {
    img.addEventListener("click", function() {
      thumbnails.forEach(function(thumbnail) { // remove the mainImg class from all the thumbnails
        console.log(thumbnail.parentNode);
        thumbnail.parentNode.classList.remove("mainImg");
        thumbnail.style.opacity = "1";
      })

      const imgAttrValue = img.getAttribute("src"); // get the src attribute value of the thumbnail
      const bigImgPath = imgAttrValue.replace("-thumbnail", "");
      const mainImgAttrValue = mainImg.setAttribute("src", bigImgPath)

      img.style.opacity = "0.3";
      img.parentNode.classList.add("mainImg"); // add the mainImg class to the thumbnail clicked
    })
  }

  thumbnails.forEach(becomeMainImg)



  // Increment/Decrement the quantity of the product
  const updateCart = () => {
    const minus = document.querySelector(".prodcut_details .add_to_cart_container .minus");
    const plus = document.querySelector(".prodcut_details .add_to_cart_container .plus");
    const numOfItem = document.querySelector(".prodcut_details .add_to_cart_container .zero");
    let sum = 0;

    minus.addEventListener("click", function() {
      sum = sum - 1;
      console.log(sum);
      numOfItem.innerHTML = sum;
    })

    plus.addEventListener("click", function() {
      sum = sum + 1;
      console.log(sum);
      numOfItem.innerHTML = sum;
    })
  }
  updateCart();

  // Add the product to the cart
  const addToCartBtn = document.querySelector(".prodcut_details .add_to_cart_container .button_add_to_cart");
  function addToCart() {
    const addToCartBtn = document.querySelector(".prodcut_details .add_to_cart_container .button_add_to_cart");
    console.log(addToCartBtn);
  }
  addToCartBtn.addEventListener("click", addToCart);
}
