//acces key: LyZIBp1LyPKCK5ziOsuo14HzWnCpARYSLNhKvyoOce4

const button = document.querySelector('.button');
const input = document.querySelector('.search');
const album = document.querySelector('.photos');


button.onclick = () => {
    getImages(input.value)
    .then(postImages)
}


function getImages(whatphoto) {
  let promise = axios.get(`https://api.unsplash.com/search/photos/?query=${whatphoto}&per_page=9&client_id=LyZIBp1LyPKCK5ziOsuo14HzWnCpARYSLNhKvyoOce4`)
    .then(({ data }) => data.results)
        return promise
}


 function postImages(data) {
    console.log(data)
    data.forEach(element => {
        console.log(element.urls)
        const img = document.createElement('img')
        img.src = element.urls.raw;
        img.style.width='360px'
        img.style.height='214px'
        album.appendChild(img)
    })  
    }

