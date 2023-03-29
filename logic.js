const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});

const products = [
    {
      id: 1,
      title: "iPhone",
      price: 1119,
      colors: [
        {
          code: "black",
          img: "./img/iphone1.jpg",
        },
        {
          code: "darkblue",
          img: "./img/iphone2.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "iPad",
      price: 999,
      colors: [
        {
          code: "lightgray",
          img: "./img/ipad 1a.jpg",
        },
        {
          code: "green",
          img: "./img/ipad 2.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "Watch",
      price: 399,
      colors: [
        {
          code: "White",
          img: "./img/watch1.jpg",
        },
        {
          code: "Black",
          img: "./img/watch2.jpg",
        },
      ],
    },
    {
      id: 4,
      title: "AirPod",
      price: 299,
      colors: [
        {
          code: "black",
          img: "./img/Black-Apple-Airpods.webp",
        },
        {
          code: "White",
          img: "./img/airpod Home.jpg",
        },
      ],
    },
    {
      id: 5,
      title: "MacBook",
      price: 1499,
      colors: [
        {
          code: "gray",
          img: "./img/macbook1.jpg",
        },
        {
          code: "white",
          img: "./img/macbook2.webp",
        },
      ],
    },
  ];
  
  let choosenProduct = products[0];
  
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
  
      //change the choosen product
      choosenProduct = products[index];
  
      //change texts of currentProduct
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "$" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;
  
      //assing new colors
      currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });
    });
  });
  
  currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });
  
  currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
  
  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");
  
  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });
  
  close.addEventListener("click", () => {
    payment.style.display = "none";
  });