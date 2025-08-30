var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.getElementById("add-popup-button")
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelpopup=document.getElementById("cancelbook")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".Container")
var addbutton=document.querySelector(".add-button")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var aboutthebook=document.getElementById("book-description")
var popupAddBtn=document.getElementById("addbook")

popupAddBtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2><br>
            <h5>${bookauthor.value}</h5><br>
            <p>${aboutthebook.value}</p><br>
            <button onclick="deletebook(event)"><b>Delete</b></button>`
            container.append(div)
            popupoverlay.style.display="none"
            popupbox.style.display="none"
})

function deletebook(event){
    event.target.closest(".book-container").remove()
}