var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
const arr=[{
    name: "Đây là tiêu đề bài 1",
    img: "./img/p-1.png",
    ctr: "Tourism",
    author: "Rickie Baroch",
    date: "June 6, 2019",
},{
    name: "Sóng bắt đầu từ gió",
    img: "./img/p-2.png",
    ctr: "Poem",
    author: "Xuân Diệu",
    date: "June 6, 2021",
},
{
    name: "Khi Anh Qua Thung Lũng",
    img: "./img/p-3.png",
    ctr: "Travel",
    author: "Phan Mạnh Quỳnh",
    date: "August 2, 2019",
},
{
    name: "Hoa Nở không màu",
    img: "./img/p-4.png",
    ctr: "Tourism",
    author: "Hoài Lâm",
    date: "Sept 20, 2020",
},
{
    name: "Easy On Me",
    img: "./img/p-5.png",
    ctr: "Music",
    author: "Adele",
    date: "Dec 20, 2021",
},
{
    name: "Shiver",
    img: "./img/p-6.png",
    ctr: "Mucican",
    author: "Ed Sherman",
    date: "Sept 9, 2021",
},
{
    name: "Sometimes you gotta make a door",
    img: "./img/p-8.png",
    ctr: "Game",
    author: "VI",
    date: "Jan 30, 2014",
},
{
    name: "Hey, where'd that bomb go?",
    img: "./img/p-9.png",
    ctr: "Tourism",
    author: "Zigg",
    date: "Feb 12, 2015",
},
{
    name: "My heart and sword, always for Damecia!!",
    img: "./img/p-10.png",
    ctr: "Tourism",
    author: "Garen LOL",
    date: "Oct 10, 2020",
},
{
    name: "No one fights alone in the Mist.",
    img: "./img/p-11.png",
    ctr: "Tourism",
    author: "Senna",
    date: "Mar 3, 2019",
},]

const sortedContainer = document.querySelector(".post-items");
const render = (arr, sortedContainer)=>{
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const divContainer = document.createElement("div");
        divContainer.classList.add("p-contentCol")
        sortedContainer.appendChild(divContainer);
        divContainer.innerHTML = `
                <img src="${element.img}" alt="">
                <div class="info">
                    <p class="ctr">${element.ctr}</p>
                    <h2>${element.name}</h2>
                    <div class="date"><p>${element.date}  </p>  <p>By <strong>${element.author}</strong></p></div>
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
        arr.name.includes(value)   
    );
    // In ra màn hình
    render(ex, sortedContainer);
});