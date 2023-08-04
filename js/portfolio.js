var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// ----My project card----
const card = document.querySelector('.card_inner');

card.addEventListener('click', function(){
    card.classList.toggle('is-flipped');
})

const cards = document.querySelector('.card_inner-2');

cards.addEventListener('click', function(){
    cards.classList.toggle('is-flipped');
})

const card_3 = document.querySelector('.card_inner-3');

card_3.addEventListener('click', function(){
    card_3.classList.toggle('is-flipped');
})
// ----HTMLAllCollection,javscript-----
// let arr = ["Mobiles","Laptop","Tablets","SSD"]

// const text = document.querySelector('.sub-text');

// function changeText(val){
//     console.log("Hello",arr[val],val)
//     text.textContent = arr[val]
// }
// let i=1
// setInterval(()=>{
//     console.log(i)
//     if(i<arr.length){
//         changeText(i);
//     }
//     else{
//         i=0;
//         changeText(i);
//     }
//     i++;
// },2000)
