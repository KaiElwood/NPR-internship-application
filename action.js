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
    changeContent((page6.firstElementChild.firstElementChild), "So why am I qualified, and how would I contribute? Specifically, I believe that my experience with Scrollmagic and D3 will be helpful in developing interactive stories. My experience with web development will be helpful in designing layout and making sure stories are friendly to all browsers and screen sizes. My journalistic background (I was the business manager for my high school newspaper) will help me understand the newsroom workflow and important tasks. My experience working with APIs (in JavaScript and Python) with help with data analysis and data cleaning. ")
    changeContent((page6.firstElementChild.childNodes[3]), "I hold no false pretenses that I am the best coder, or the best with D3, etc. However, I think that more important to this position is my passion for creating and improving the things I’m involved in. I’m a quick language learner, whether it be a new Javascript library or Chinese (I’m fluent!). ")
    changeContent((page6.firstElementChild.childNodes[5]), "Growing up, listening to NPR was a daily family activity, and whenever Kai Ryssdale came on-air, my family would shout “it’s Kai!” – I suppose in some way I’m applying to this internship in part in the hopes of being able to tell my family that I’m working at the same company as the (arguably more famous) Kai. Needless to say, working at NPR has always been a dream for me.")
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
        debugger
        changeContent((page6.firstElementChild.firstElementChild), "To whom it may concern,")
        changeContent((page6.firstElementChild.childNodes[3]), "My name is Calli Higgins and I’m a software engineer at the New York Times. I am also an adjunct professor in NYU’s Interactive Media Arts program and had the pleasure of teaching Kai Elwood-Dieu this past semester. I understand Kai is applying for an internship with NPR and wanted to take a moment to encourage you to move forward with his application.")
        changeContent((page6.firstElementChild.childNodes[5]), "Kai stood out in our Front End Development classroom for many reasons. Despite not having much experience with front end technologies, he was a hungry learner and quickly emerged as a top student both by writing excellent code and by implementing thoughtful design. His final project executed a unique and delightful idea, and he pushed himself to complete it entirely with great attention to detail.")
    } else {
        changeContent((page6.firstElementChild.lastElementChild.lastElementChild), "Flip right to see a letter of recommendation")
        changeContent((page6.firstElementChild.firstElementChild), "So why am I qualified, and how would I contribute? Specifically, I believe that my experience with Scrollmagic and D3 will be helpful in developing interactive stories. My experience with web development will be helpful in designing layout and making sure stories are friendly to all browsers and screen sizes. My journalistic background (I was the business manager for my high school newspaper) will help me understand the newsroom workflow and important tasks. My experience working with APIs (in JavaScript and Python) with help with data analysis and data cleaning. ")
        changeContent((page6.firstElementChild.childNodes[3]), "I hold no false pretenses that I am the best coder, or the best with D3, etc. However, I think that more important to this position is my passion for creating and improving the things I’m involved in. I’m a quick language learner, whether it be a new Javascript library or Chinese (I’m fluent!). ")
        changeContent((page6.firstElementChild.childNodes[5]), "Growing up, listening to NPR was a daily family activity, and whenever Kai Ryssdale came on-air, my family would shout “it’s Kai!” – I suppose in some way I’m applying to this internship in part in the hopes of being able to tell my family that I’m working at the same company as the (arguably more famous) Kai. Needless to say, working at NPR has always been a dream for me.")
    }
}

function flipText(item) {
    item.classList.toggle("page1")
}

function changeContent(element, newContent){
    element.textContent = newContent
}