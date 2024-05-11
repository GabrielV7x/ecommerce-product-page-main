export default function product() {

  //  change the main img according to the thumbnials selected
  const mainImg = document.querySelector(".product_container .main_image img[src]");
  // const thumbContainers = [...document.querySelectorAll(".thumbnails div")];
  const thumbnails = [...document.querySelectorAll(".product_container .thumbnails img[src]")];

  function becomeMainImg(img) {
    img.addEventListener("click", function() {
      thumbnails.forEach(function(thumbnail) { // remove the mainImg class from all the thumbnails
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

  const objProduct = {
    img: "",
    name: "Product Name",
    price: 0,
    quantity: 0,
    total: 0
  };

  // Add the product to the cart
  const addToCartBtn = document.querySelector(".prodcut_details .add_to_cart_container .button_add_to_cart");

  function addToCart() {
    const img = document.querySelector(".product_container .main_image img[src]").getAttribute("src").replace(".jpg", "-thumbnail.jpg");
    objProduct.img = img;

    // console.log(addToCartBtn);
    const name = document.querySelector(".product_container .prodcut_details h1").innerHTML;
    objProduct.name = name;

    const numOfItem = document.querySelector(".prodcut_details .add_to_cart_container .zero");
    const numOfItemValue = Number(numOfItem.innerHTML);
    objProduct.quantity = numOfItemValue;

    const unitPirce = document.querySelector(".product_container .prodcut_details .price_container .price_dollar").innerHTML.replace("$", "");
    const unitPirceValue = Number(unitPirce);
    objProduct.price = unitPirceValue;

    const total = numOfItemValue * unitPirceValue;
    objProduct.total = total;

    updateCartContent(objProduct);
  }
  addToCartBtn.addEventListener("click", addToCart);

  const updateCartContent = (obj) => {
    // console.log(obj);
    let cardContent = document.querySelector(".cart_content");

    // creating nodes
    let productAdded = document.createElement("div");
    let productAddedImg = document.createElement("img");
    let productAddedText = document.createElement("div");
    let binIcon = document.createElement("img");

    // adding class to nodes
    productAdded.classList.add("cart-details");
    productAddedImg.classList.add("cart-details-img");
    productAddedText.classList.add("cart-details-text");
    binIcon.classList.add("cart-details-bin");

    //adding data to nodes
    console.log(productAddedImg);
    productAddedImg.setAttribute("src", `${obj.img}`);
    productAddedText.textContent = `${obj.name} ${obj.price} x ${obj.quantity} ${obj.total}`;
    binIcon.setAttribute("src", "./images/icon-delete.svg");

    // appending nodes to cart
    productAdded.append(productAddedImg, productAddedText, binIcon)
    cardContent.appendChild(productAdded)
  }
}
