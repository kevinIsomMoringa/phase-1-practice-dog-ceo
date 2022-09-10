//console.log('%c HI', 'color: firebrick')


const imgContainer = document.getElementById('dog-image-container');
const dogBreed_ul= document.getElementById('dog-breeds')

document.addEventListener("DOMContentLoaded",{
    //fetchRequest
})

// async function fetchRequest() {
//     await fetch("https://dog.ceo/api/breeds/image/random/4")
//     .then(resp => resp.json())
//     .then(resp => {
//         renderImage(resp.message)
//     })
//     .catch(err => {console.error(err)});
// }

const imgURL = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

async function fetchRequest(URL2fetch, func) {
    await fetch(URL2fetch)
    .then(resp => resp.json())
    .then(res => func(res))
    .catch(err => {console.error(err)});
}


function renderImage(data) {
    let dogImg = data.message
    dogImg.map(x => render(x))
}

function putDogBreedsInList(dt) {
    
    let info = dt.message
    console.log(info)
    info.entity(x => {
        // let li = createElement('li').textContent = x;
        // dogBreed_ul.appendChild(li);
        console.log(x)
    } )
}


function render(data) {
    // let pic = document.createElement('img');
    // pic?.setAttribute('src', data);

    let pic = createElement('img', 'src', data)
    imgContainer.appendChild(pic); 
}

function createElement(elementType, elementAtr=null, elementAtrValue=null) {
    let element = document.createElement(elementType);
    // use the optional chaining (?.) operator when invoking the setAttribute() 
    // method to avoid getting an error.
    if (elementAtr!==null) {element?.setAttribute(elementAtr, elementAtrValue)}
    return element 
}



fetchRequest(imgURL, renderImage)
fetchRequest(breedUrl, putDogBreedsInList)
