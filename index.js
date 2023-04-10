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
