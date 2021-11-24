const arr=[{
    name: "Alan Scott",
    img: "./img/alanScott.jpg",
    ctr: "Green Lantern",
},{
    name: "Arthur Curry",
    img: "./img/aquaman.jpg",
    ctr: "Aquaman",
},
{
    name: "BANE",
    img: "./img/bane.jpg",
    ctr: "BANE",
},
{
    name: "Kate Kane",
    img: "./img/batwoman.jpg",
    ctr: "Batwoman",
},
{
    name: "Bizarro",
    img: "./img/bizarro.jpg",
    ctr: "Bizarro",
},
{
    name: "Teth-Adam",
    img: "./img/black-adam.jpg",
    ctr: "Black Adam",
},
{
    name: "Jefferson Pierce",
    img: "./img/black-lightning.jpg",
    ctr: "Black Lightning",
},
{
    name: "Robert DuBois",
    img: "./img/bloodsport.jpg",
    ctr: "Bloodsport",
},
{
    name: "Leonard Snart",
    img: "./img/captain-cold.jpg",
    ctr: "Captain Cold",
},
{
    name: "Floyd Lawton",
    img: "./img/deadshot.jpg",
    ctr: "Deadshot",
},
{
    name: "Dr. Harleen Frances Quinzel",
    img: "./img/harley-quinn.jpg",
    ctr: "Harley Quinn",
},
{
    name: "Bruce Wayne",
    img: "./img/batman.jpg",
    ctr: "Batman",
},
{
    name: "Ronnie Raymond & Martin Stein",
    img: "./img/firestorm.jpg",
    ctr: "Firestorm",
},
{
    name: "Oliver Queen",
    img: "./img/green-arrow.jpg",
    ctr: "Green Arrow",
},
{
    name: "Hank Hall & Dawn Granger",
    img: "./img/hawk-dove.jpg",
    ctr: "Hawk and Dove",
},
{
    name: "John Constantine",
    img: "./img/john-constantine.jpg",
    ctr: "Constantine",
},
{
    name: "Brian Durlin",
    img: "./img/savant.jpg",
    ctr: "Savant",
},
{
    name: "Alexander Joseph Lex Luthor",
    img: "./img/lex-luthor.jpg",
    ctr: "Luthor",
},
{
    name: "Otis Flannegan",
    img: "./img/ratCatcher.jpg",
    ctr: "RatCatcher",
},
{
    name: "Billy Batson",
    img: "./img/savant.jpg",
    ctr: "Shazam",
},
{
    name: "Richard Rogers Flag",
    img: "./img/RickFlag.jpg",
    ctr: "Rick Flag",
},
{
    name: "Eobard Thawne",
    img: "./img/reverse-flash.jpg",
    ctr: "Reverse Flash",
},
{
    name: "Clark Kent",
    img: "./img/superman.jpg",
    ctr: "Superman",
},
{
    name: "Victor Stone",
    img: "./img/cyborg.jpg",
    ctr: "Cyborg",
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
                <h2>${element.name}</h2>
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
    render(ex, sortedContainer);
});