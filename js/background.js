// const path = window.location.pathname;
// const cwd = path.substring(0, path.lastIndexOf("/"));
// console.log(path); // /Users/psyoung/Documents/momentum-re-clone/index.html
// console.log(cwd); // /Users/psyoung/Documents/momentum-re-clone

const imageLength = 7;

let arr = [];
for (let i = 0; i < imageLength; i++) {
  const file = `img/${i}.jpeg`;
  arr.push(file);
}

const body = document.querySelector("body");
const randomFilePath = arr[Math.floor(Math.random() * imageLength)];

const bgImage = document.createElement("img");
body.appendChild(bgImage);

bgImage.src = randomFilePath;
