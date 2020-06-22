const book = document.getElementById("book")
const findOut = document.getElementById("element")
const goBack = document.getElementById("goBack")

findOut.addEventListener("click", function(){
    book.classList.toggle("poems")
    book.classList.toggle("moveRight")
})

goBack.addEventListener("click", function () {
    book.classList.toggle("poems")
    book.classList.toggle("moveRight")
})