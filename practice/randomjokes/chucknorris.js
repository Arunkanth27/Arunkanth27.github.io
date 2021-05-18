const container = document.getElementById("root");
const para = document.createElement("p");
container.appendChild(para);
const getJoke = () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((res) => {
      const joke = res.value;
      console.log(joke);
      para.innerText = joke;
    });
};

const button = document.getElementById("joke");
button.addEventListener("click", getJoke);
