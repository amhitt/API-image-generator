//acces key: LyZIBp1LyPKCK5ziOsuo14HzWnCpARYSLNhKvyoOce4

const button = document.querySelector('.button');
const input = document.querySelector('.search');
const album = document.querySelector('.photos');


button.onclick = () => {
    album.textContent = ""
    getImages(input.value)
    .then(input.value = " ")
    .then(postImages)
}


function getImages(whatphoto) {
  let promise = axios.get(`https://api.unsplash.com/search/photos/?query=${whatphoto}&per_page=9&client_id=LyZIBp1LyPKCK5ziOsuo14HzWnCpARYSLNhKvyoOce4`)
    .then(({ data }) => data.results)
  return promise
}


 function postImages(data) {
    data.forEach(element => {
        const img = document.createElement('img')
        img.src = element.urls.raw;
        img.classList.add('img')
        album.appendChild(img)
    })  
    }

// axios.get(`https://api.unsplash.com/search/photos/?query=cat&per_page=9&client_id=LyZIBp1LyPKCK5ziOsuo14HzWnCpARYSLNhKvyoOce4`)
// .then(function (response) {
//     console.log(response);
//   })