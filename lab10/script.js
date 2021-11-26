const arr = [{
    name: "Alan Scott",
    img: "./img/alanScott.jpg",
    ctr: "Green Lantern",
    gender: "Male",
    universe: "Earth-Two · New Earth",
    movie: "Justice League: The New Frontier",
    id: 1,
}, {
    name: "Arthur Curry",
    img: "./img/aquaman.jpg",
    ctr: "Aquaman",
    gender: "Male",
    universe: "Prime Earth",
    movie: "Aquaman (2018), Justice League",
    id: 2,
},
{
    name: "Bane",
    img: "./img/bane.jpg",
    ctr: "Bane",
    gender: "Male",
    universe: "Prime Earth",
    movie: "The Dark Knight Rise",
    id: 3,
},
{
    name: "Kate Kane",
    img: "./img/batwoman.jpg",
    ctr: "Batwoman",
    gender: "Female",
    universe: "Prime Earth",
    movie: "TV Series Batwoman",
    id: 4,
},
{
    name: "Bizarro",
    img: "./img/bizarro.jpg",
    ctr: "Bizarro",
    gender: "Male",
    universe: "Prime Earth",
    movie: "Animated Bizarro Classic",
    id: 5,
},
{
    name: "Teth-Adam",
    img: "./img/black-adam.jpg",
    ctr: "Black Adam",
    gender: "Male",
    universe: "Prime Earth",
    movie: "Black Adam 2021, Injustice, Superman/Shazam!: The Return of Black Adam",
    id: 6,
},
{
    name: "Jefferson Pierce",
    img: "./img/black-lightning.jpg",
    ctr: "Black Lightning",
    gender: "Male",
    universe: "Prime Earth",
    movie: "TV Series Black Lightning",
    id: 7,
},
{
    name: "Robert DuBois",
    img: "./img/bloodsport.jpg",
    ctr: "Bloodsport",
    gender: "Male",
    universe: "New Earth",
    movie: "Supergirl, The Suicide Squad 2021",
    id: 8,
},
{
    name: "Leonard Snart",
    img: "./img/captain-cold.jpg",
    ctr: "Captain Cold",
    gender: "Male",
    universe: "Prime Earth",
    movie: "TV Series The legends of tomorrow",
    id: 9,
},
{
    name: "Floyd Lawton",
    img: "./img/deadshot.jpg",
    ctr: "Deadshot",
    gender: "Male",
    universe: "Prime Earth",
    movie: "Suicide Squad (2016), TV Series Arrow",
    id: 10,
},
{
    name: "Dr. Harleen Frances Quinzel",
    img: "./img/harley-quinn.jpg",
    ctr: "Harley Quinn",
    gender: "Female",
    universe: "Prime Earth",
    movie: "Suicide Squad (2016), Birds of grey, The Suicide Squad",
    id: 11,
},
{
    name: "Bruce Wayne",
    img: "./img/batman.jpg",
    ctr: "Batman",
    gender: "Male",
    universe: "Prime Earth",
    movie: "Suicide Squad (2016), Batman vs Superman: Dawn of Justice, Justice League",
    id: 12,
},
{
    name: "Ronnie Raymond & Martin Stein",
    img: "./img/firestorm.jpg",
    ctr: "Firestorm",
    gender: "Male",
    universe: "Earth-One · New Earthh",
    movie: "TV Series The legends of tomorrow, The Suicide Squad Animated",
    id: 13,
},
{
    name: "Oliver Queen",
    img: "./img/green-arrow.jpg",
    ctr: "Green Arrow",
    gender: "Male",
    universe: "Prime Earth",
    movie: "TV Series Arrow",
    id: 14,
},
{
    name: "Hank Hall & Dawn Granger",
    img: "./img/hawk-dove.jpg",
    ctr: "Hawk and Dove",
    gender: "Male/Female",
    universe: "Prime Earth",
    movie: "TV Series Titan",
    id: 15,
},
{
    name: "John Constantine",
    img: "./img/john-constantine.jpg",
    ctr: "Constantine",
    gender: "Male",
    universe: "Prime Earth",
    movie: "TV Series Constantine, TV Series The legends of tomorrow, Constantine",
    id: 16,
},
{
    name: "Brian Durlin",
    img: "./img/savant.jpg",
    ctr: "Savant",
    gender: "Male",
    universe: "Prime Earth",
    movie: "The Suicide Squad",
    id: 17,
},
{
    name: "Alexander Joseph Lex Luthor",
    img: "./img/lex-luthor.jpg",
    ctr: "Luthor",
    gender: "Male",
    universe: "Prime Earth",
    movie: "Superman Returns, Batman vs Superman: Dawn of Justice",
    id: 18,
},
{
    name: "Otis Flannegan",
    img: "./img/ratCatcher.jpg",
    ctr: "RatCatcher",
    gender: "Male",
    universe: "Prime Earth",
    movie: "The Suicide Squad",
    id: 19,
},
{
    name: "Billy Batson",
    img: "./img/shazam.jpg",
    ctr: "Shazam",
    gender: "Male",
    universe: "Prime Earth",
    movie: "Shazam, Shazam: Fury of the Gods, Superman/Shazam: The return of black adam",
    id: 20,
},
{
    name: "Richard Rogers Flag",
    img: "./img/RickFlag.jpg",
    ctr: "Rick Flag",
    gender: "Male",
    universe: "Prime Earth",
    movie: "Suicide Squad, The Suicide Squad",
    id: 21,
},
{
    name: "Eobard Thawne",
    img: "./img/reverse-flash.jpg",
    ctr: "Reverse Flash",
    gender: "Male",
    universe: "Prime Earth",
    movie: "TV Series The Flash, The Legends of Tomorow, The Flash",
    id: 22,
},
{
    name: "Clark Kent",
    img: "./img/superman.jpg",
    ctr: "Superman",
    gender: "Male",
    universe: "Prime Earth",
    movie: "TV Series Supergirl, Superman and Lois, Man of steel, Superman vs batman: Dawn of Justice, Justice League",
    id: 23,
},
{
    name: "Victor Stone",
    img: "./img/cyborg.jpg",
    ctr: "Cyborg",
    gender: "Male",
    universe: "Prime Earth",
    movie: "Superman vs batman: Dawn of Justice, Justice League",
    id: 24,
},
]

const sortedContainer = document.querySelector(".post-items");
const render = (arr, sortedContainer)=>{
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const divContainer = document.createElement("div");
        divContainer.classList.add("p-contentCol")
        sortedContainer.appendChild(divContainer);
        divContainer.innerHTML = `
            <div class="info">
                <h2><a class="link" href="detail.html?${element.id}">${element.name}</a></h2>
                <p class="ctr">${element.ctr}</p>
            </div> 
            <div class="imagefloat">
                <img src="${element.img}" alt="">
            </div>  
        `;
    }
};
//In dữ liệu//
render(arr,sortedContainer);

//Bắt class trong html//
const btnFind = document.querySelector(".input-search");
btnFind.addEventListener("input",(event)=>{
    //Xóa dữ liệu khi có sự kiện//
    let last = sortedContainer.lastElementChild;
    while(last){
        sortedContainer.removeChild(last);
        last=sortedContainer.lastElementChild;
    };
    //Bắt ký tự trong sự kiện chuyển đổi thành giá trị
    const value=event.target.value;
    // So sánh sự kiện với mảng dữ liệu
    const ex=[...arr].filter((arr)=>
        arr.ctr.includes(value)   
    );
    // In ra màn hình
    render(ex,sortedContainer);
});


const details = document.querySelector(".details");
let query = window.location.search.substring(1);
let itemFind = [];
for (i = 0; i < arr.length; i++) {
    if (arr[i].id==query){
    itemFind=arr[i];
    }
}
const detailsHtml = document.createElement("div");
detailsHtml.classList.add("p-contentCol")
details.appendChild(detailsHtml);
detailsHtml.innerHTML = `
        <div class="info">
            <h2>Real name: ${itemFind.name}</a></h2>
            <p class="ctr"><strong>Nick name: </strong>${itemFind.ctr}</p>
            <p class="ctr"><strong>Gender:</strong>${itemFind.gender}</p>
            <p class="ctr"><strong>Universe release:</strong>${itemFind.universe}</p>
            <p class="ctr"><strong>Movie release: </strong>${itemFind.movie}</p>
        </div> 
        <div class="imagefloat">
            <img src="${itemFind.img}" alt="">
        </div>  
    `;