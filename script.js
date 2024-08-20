const jokecontainer = document.querySelector("#joke");
const btn = document.querySelector("#btnjoke");
const joke_url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const ipcontainer = document.querySelector("#ip");
const ip_url = "https://api.ipify.org?format=json";
const btnip = document.querySelector("#btnip");

const universitycontainer = document.querySelector("#university");
const university_url = `http://universities.hipolabs.com/search?country=India`;
const btnuniversity = document.querySelector("#btnuniversity");

// get joke

let getjoke = () => {
    fetch(joke_url)
        .then(data => data.json())
        .then(item => {
            jokecontainer.textContent = `${item.joke}`;
        });
}
btn.addEventListener("click", getjoke);

// get ip

let generateip = () => {
    fetch(ip_url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.ip);
            ipcontainer.textContent = `Your Current Internet Protocol Address  ${data.ip}`;

        });
}

btnip.addEventListener("click", generateip);

// get collages

let i = 0;
let getcollages = () => {
    fetch(university_url)
        .then((response) => response.json())
        .then((data) => {
            for (; i < 200; i++) {
                let div = document.createElement("div");
                div.innerHTML = `${data[i].name}`;
                universitycontainer.appendChild(div);
            }
        });
};

btnuniversity.addEventListener("click", getcollages);
