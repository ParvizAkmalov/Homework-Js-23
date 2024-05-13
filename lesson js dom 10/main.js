const btnCreate = document.querySelector(".btnCreate");
const content = document.querySelector(".content");

let images = [
  "https://t3.ftcdn.net/jpg/05/92/45/74/360_F_592457481_U9HwJCzC5zvYApnE0UMpzroqqVsUjocF.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgjURn26p8kYJPVEunAJHXcZsz-wGLyl3HSTY47iio5g&s",
  "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg",
];
// let colors = [
//   "red",
//   "green",
//   "blue",
//   "yellow",
//   "black",
//   "gray",
//   "aqua",
//   "brown",
//   "pink",
//   "orange",
//   "tomato",
//   "chocolate",
// ];

btnCreate.addEventListener("click", () => {
//     let box = document.createElement("div");
    
//     let rnd = Math.floor(Math.random() * colors.length)

//     console.log(colors[rnd]);
 
//     console.log(rnd);

// //   box.innerHTML = "salom";
//   box.setAttribute("class", "salom");
//   box.style.backgroundColor = colors[rnd]

//   // content.prepend(box)
//   content.append(box);
//   console.log(box);


// img
let rnd = Math.floor(Math.random() * images.length)
let box = document.createElement("div");
box.setAttribute("class", "salom");

box.style.backgroundImage = `url(${images[rnd]})`

content.append(box)





});
