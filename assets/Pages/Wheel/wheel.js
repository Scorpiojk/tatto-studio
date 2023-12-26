const btn = document.querySelector("#btn");
const img = document.querySelector("#img");

let imgArr = [
  { src: "../../imgs/framework.jpg", id: 1 },
  { src: "../../imgs/framework2.jpg", id: 1 },
  { src: "../../imgs/attention.jpg", id: 1 },
  { src: "../../imgs/ink.jpg", id: 1 },
  { src: "../../imgs/measeruments.jpg", id: 1 },
  { src: "../../imgs/paper.jpg", id: 1 },
  { src: "../../imgs/skull.jpg", id: 1 },
  { src: "../../imgs/tattoo8.jpg", id: 1 },
  { src: "../../imgs/studio.jpg", id: 1 },
  { src: "../../imgs/ariel.jpg", id: 1 },
  { src: "../../imgs/framework3.jpg", id: 1 },
  { src: "../../imgs/Nico-draw.jpg", id: 1 },
];

const randomIndex = () => Math.floor(Math.random() * imgArr.length);

const loopArr = (callback) => {
  let numLoop = randomIndex();
  let counter = 0;

  const loopIteration = () => {
    if (counter < numLoop) {
      img.src = imgArr[counter].src;
      counter++;
      setTimeout(loopIteration, 250); // Adjust the delay time (in milliseconds) as needed
    } else {
      callback(); // Call the callback function when the loop is complete
    }
  };

  loopIteration();
};

const changeImage = () => {
  const randomIdx = randomIndex();
  img.src = imgArr[randomIdx].src;
};

btn.addEventListener("click", () => {
  loopArr(changeImage);
});
