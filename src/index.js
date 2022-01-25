console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()
   loadImages();
   loadBreeds();
})

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res => res.json())
    .then(images => {
        images.message.forEach(img => addImg(img))
    })
}

function addImg(dogPic) {
    const imgContainer = document.getElementById('dog-image-container')
    const createImg = document.createElement('img')
    createImg.src = dogPic
    imgContainer.append(createImg)
}

function loadBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        Object.keys(breeds.message).forEach(breed => addBreed(breed))
    })
}

function addBreed(dogBreed) {
    console.log(dogBreed)
    const breedList = document.getElementById('dog-breeds')
    const list = document.createElement('li')
    list.addEventListener('click', () => list.style.color = 'blue')
    list.innerText = dogBreed
    breedList.append(list)
}

