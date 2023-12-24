const btn = document.querySelector("#btn");
const img = document.querySelector("#img");

let imgArr = [
  { src: "../../imgs/framework.jpg", id: 1 },
  { src: "../../imgs/framework2.jpg", id: 1 },
  { src: "../../imgs/framework3.jpg", id: 1 },
  { src: "../../imgs/Nico-draw.jpg", id: 1 },
];

const randomIndex = () => Math.floor(Math.random() * imgArr.length);

btn.addEventListener("click", () => {
  let id = randomIndex();
  img.src = imgArr[id].src;
});
