
let queryString = location.search;

if (location.search.includes("%2F")) {
  queryString = queryString.replace("%2F", "/");
  history.pushState('', '', queryString);
}

const rgx = /([a-zA-Z\-0-9\/]+)/g;
const match = queryString.match(rgx);
// console.log(match);

if (match === null) {
  // for testing
  const slides = document.querySelector(".slides");
  slides.innerHTML = `
  <section data-markdown="test.md"
    data-separator="^==="
    data-separator-vertical="^---"
    data-separator-notes="^Note:"
    data-charset="utf-8">
  </section>
  `;
  // end testing
  delayed_init();  // run default presentation from index.html
} else {
  const url = `https://raw.githubusercontent.com/TECH3015/lectures/master/${match[0]}.md`;

  fetch(url)
    .then(function(response) {
      return response.text();
    })
    .then(function(text) {
      text.startsWith("# Contents") ? loadMultiple(text) : loadSingle();
      delayed_init();
    })
    .catch(function(err) {
      console.log("Fetch Error: ", err);
    });
}

function loadSingle() {
  const url = `https://raw.githubusercontent.com/TECH3015/lectures/master/${match[0]}.md`;
  const slides = document.querySelector(".slides");
  slides.innerHTML = `
    <section data-markdown="${url}"
            data-separator="^==="
            data-separator-vertical="^---"
            data-separator-notes="^Note:"
            data-charset="utf-8">
    </section>
  `;
  const title = document.querySelector("title");
  title.innerHTML = `${match[0]} TECH3015`;
}


function loadMultiple(text) {
  let lines = text.trim().split("\n").splice(2); 
  const slides = document.querySelector(".slides");
  slides.innerHTML = "";  // remove default presentation
  lines.forEach(line => {
    let cleanedLine = line.trim();
    let details = cleanedLine.split(" ");
    const url = `https://raw.githubusercontent.com/TECH3015/lectures/master/${details[0]}.md`;
    slides.innerHTML += `
      <section data-markdown="${url}"
              data-separator="^==="
              data-separator-vertical="^---"
              data-separator-notes="^Note:"
              data-charset="utf-8">
      </section>
    `;
  });
  const title = document.querySelector("title");
  title.innerHTML = `TECH3015`;
}


// function handleImagePaths() {
//   const images = document.querySelectorAll(".slides img");
//   images.forEach(image => {
//     const name = image.attributes.src.value;
//     image.src = `https://raw.githubusercontent.com/front-end-materials/images/master/${name}`;
//   });
// }