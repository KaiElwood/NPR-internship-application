const book = document.getElementById("book");
const findOut = document.getElementById("element");
const goBack = document.getElementById("goBack");
const rButton = document.getElementById("rButton");
const page6 = document.getElementById("page6");
var p6ItemArray = [...page6.firstElementChild.children];

findOut.addEventListener("click", function(){
    book.classList.toggle("poems")
    book.classList.toggle("moveRight")
    p6ItemArray.forEach(element => {
        element.classList.remove("page1")
    });
    changeContent((page6.firstElementChild.lastElementChild.lastElementChild), "Flip right to see a letter of recommendation")
})

goBack.addEventListener("click", function () {
    book.classList.toggle("poems")
    book.classList.toggle("moveRight")
    book.classList.remove("poemsFlip")
})

rButton.addEventListener("click", function(){
    flipPage2();
})

function flipPage2(){
    book.classList.toggle("poemsFlip");
    // page6.firstElementChild.lastElementChild.classList.toggle("notVisible")
    p6ItemArray.forEach(flipText);
    if (p6ItemArray[1].classList.contains("page1")) {
        changeContent((page6.firstElementChild.lastElementChild.lastElementChild), "Flip left to see my cover letter")
    } else {
        changeContent((page6.firstElementChild.lastElementChild.lastElementChild), "Flip right to see a letter of recommendation")
    }
}

function flipText(item) {
    item.classList.toggle("page1")
}

function changeContent(element, newContent){
    element.textContent = newContent
}