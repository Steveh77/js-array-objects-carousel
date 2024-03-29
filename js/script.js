// ## Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.

// ## Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// ## Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.


// ## Milestone 1:


// variabili

const imageContainer = document.getElementById('images-container');
// bonus thumbnails
const thumbnailsContainer = document.getElementById('thumbnails-container')

const imagesArray = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
];

// stampare le immagini nell'html
let pic = ""
for (let i = 0; i < imagesArray.length; i++) {
    const element = imagesArray[i];
    
    pic += `<div class="image">
            <img src="${element["url"]}" alt="" class="img">       
            <div class="photo-description">
                <h3>${element["title"]}</h3>
                <p>${element["description"]}</p>
            </div>
           </div>`
}

imageContainer.innerHTML = pic

// stampare le thumbnails nell'html
let thumb = ""
for (let i = 0; i < imagesArray.length; i++) {
    const element = imagesArray[i];
    console.log(element)
    thumb += `<img class="thumbnails-img " src="${element["url"]}" alt="">`
}

thumbnailsContainer.innerHTML = thumb




// creare next e prev
let images = document.querySelectorAll('.image')
let thumbnails = document.querySelectorAll('.thumbnails-img')
const next = document.getElementById('next')
const prev = document.getElementById('previous')
// variabile active a 0
let active = 0;
images[active].classList.add('d-active');
thumbnails[active].classList.add('thumbnails-d-active');



// next btn
next.addEventListener('click', function () {
    // prima rimuovo l'immagine active
    images[active].classList.remove('d-active');
    thumbnails[active].classList.remove('thumbnails-d-active');
    // poi aggiungo quella che diventerà active
    active++;
    if (active === images.length ) {
        active = 0;
    }
    images[active].classList.add('d-active');
    thumbnails[active].classList.add('thumbnails-d-active');
})



// prev btn
prev.addEventListener('click', function () {
    // prima rimuovo l'immagine  active
    images[active].classList.remove('d-active');
    thumbnails[active].classList.remove('thumbnails-d-active');
    // poi aggiungo quella che diventerà active
    active--;
    if (active === -1) {
        active = images.length - 1;
        console.log(images)
        console.log(images.length)
        console.log(active)
    }
    console.log(active)

    images[active].classList.add('d-active');
    thumbnails[active].classList.add('thumbnails-d-active');
})










