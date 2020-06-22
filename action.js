const book = document.getElementById("book")
const findOut = document.getElementById("element")

findOut.addEventListener("click", function(){
    book.classList.toggle("poems")
    book.classList.toggle("moveRight")
})