
let queryString = location.search;
// console.log(queryString);
// console.log(location);

if (location.search.includes("%2F")) {
  queryString = queryString.replace("%2F", "/");
  // console.log(queryString);
  history.pushState('', '', queryString);
}

const rgx = /([a-zA-Z\-0-9\/]+)/g;
// const regex = /(?<user>[\w]+)_(?<repo>[\S]+)_(?<file>[\S]+)/g;
// const match = regex.exec(queryString);
const match = queryString.match(rgx);
// console.log(match);

const slides = document.querySelector(".slides");

if(match) {

  const url = `https://raw.githubusercontent.com/${match[0]}/${match[1]}/master/${match[2]}.md`;
  // console.log(url);

  slides.innerHTML = `
  <section data-markdown="${url}"
           data-separator-vertical="^\n\n"
           data-separator-notes="^Note:"
           data-charset="utf-8">
  </section>
  `;

  const title = document.querySelector("title");
  title.innerHTML = `${match[1]} ${match[2]}`;
}




// LOCAL FILE TESTING
// https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications

// DRAG AND DROP FILES TO UPLOAD

let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);

function dragenter(e) { e.stopPropagation(); e.preventDefault(); 
  console.log("drag entered");
}
function dragover(e) { e.stopPropagation(); e.preventDefault(); 
  console.log("dragging over");
} 
function drop(e) { e.stopPropagation(); e.preventDefault();
  console.log("you dropped something");
  handleFiles(e.dataTransfer.files);
}

function handleFiles(files) {
  const file = files[0];
  // console.log(file);
  if (file.type.startsWith('image/')) { 

    console.log("image");
    const img = document.createElement("img");
    img.file = file;
    localPlaceholder.appendChild(img);
    
    const reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);

  } else if (file.name.endsWith('.md')) { 
    console.log("markdown");
    console.log(file);


    const reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { 
      aImg.src = e.target.result; 
      console.log("test");
      const localSlides = document.createElement("section");
      let newURL = window.URL.createObjectURL(file);
      localSlides.setAttribute("data-markdown", newURL);
      localSlides.setAttribute("data-separator-vertical", "^\n\n");
      localSlides.setAttribute("data-separator-notes", "^Note:");
      localSlides.setAttribute("data-charset", "utf-8");
      // file:///D:/Documents/GitHub/presents/demo.md
      // localSlides.setAttribute("data-markdown", "file:///D:/Documents/GitHub/presents/demo.md");
      console.log(localSlides);
      // localSlides.onload = function() {
      //   window.URL.revokeObjectURL(newURL);
      // }

      slides.appendChild(localSlides);

    }; })(file);
    reader.readAsDataURL(file);




    let localurl = window.URL.createObjectURL(file);
    console.log(localurl);

    // localPlaceholder.innerHTML = `
    //   <section data-markdown="${localurl}"
    //           data-separator-vertical="^\n\n"
    //           data-separator-notes="^Note:"
    //           data-charset="utf-8">
    //   </section>
    //   `;


    // const reader = new FileReader();
    // reader.onload = event => {
    //   let contents = event.target.result;
    //   console.log(contents);
    //   localPlaceholder.innerHTML = `
    //     <section data-markdown="${contents}"
    //             data-separator-vertical="^\n\n"
    //             data-separator-notes="^Note:"
    //             data-charset="utf-8">
    //     </section>
    //     `;
    // }
    // reader.onerror = error => reject(error);
    // reader.readAsText(file); // you could also read images and other binaries
    // // reader.readAsDataURL(file);

    





  } else {
    console.log("incompatible file type");
  }

}



// document.getElementById('input-file')
//   .addEventListener('change', getFile)

// function getFile(event) {
// 	const input = event.target
//   if ('files' in input && input.files.length > 0) {
// 	  placeFileContent(
//       document.getElementById('content-target'),
//       input.files[0])
//   }
// }

// function placeFileContent(target, file) {
// 	readFileContent(file).then(content => {
//   	target.value = content
//   }).catch(error => console.log(error))
// }

// function readFileContent(file) {
// 	const reader = new FileReader()
//   return new Promise((resolve, reject) => {
//     reader.onload = event => resolve(event.target.result)
//     reader.onerror = error => reject(error)
//     reader.readAsText(file)
//   })
// }







// const fileForm = document.querySelector("#localFile");
// const fileInput = document.querySelector("#myFile");

// fileForm.addEventListener("submit", () => {

//   console.log(fileInput);
//   console.log(fileInput.files);
//   let localurl = window.URL.createObjectURL(fileInput.files[0]);
//   console.log(localurl);

//   slides.innerHTML = `
//   <section data-markdown="${localurl}"
//            data-separator-vertical="^\n\n"
//            data-separator-notes="^Note:"
//            data-charset="utf-8">
//   </section>
//   `;

// });

// https://stackoverflow.com/questions/31746837/reading-uploaded-text-file-contents-in-html

// <div>
//  <label for="input-file">Specify a file:</label><br>
//  <input type="file" id="input-file">
// </div>

// <textarea id="content-target"></textarea>

// document.getElementById('input-file')
//   .addEventListener('change', getFile)

// function getFile(event) {
// 	const input = event.target
//   if ('files' in input && input.files.length > 0) {
// 	  placeFileContent(
//       document.getElementById('content-target'),
//       input.files[0])
//   }
// }

// function placeFileContent(target, file) {
// 	readFileContent(file).then(content => {
//   	target.value = content
//   }).catch(error => console.log(error))
// }

// function readFileContent(file) {
// 	const reader = new FileReader()
//   return new Promise((resolve, reject) => {
//     reader.onload = event => resolve(event.target.result)
//     reader.onerror = error => reject(error)
//     reader.readAsText(file)
//   })
// }









// for testing
// const slides = document.querySelector(".slides");
// slides.innerHTML = `
// <section data-markdown="demo.md"
//          data-separator-vertical="^\n\n"
//          data-separator-notes="^Note:"
//          data-charset="utf-8">
// </section>
// `;
