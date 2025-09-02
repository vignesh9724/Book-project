var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popupbox");
var addpopupbutton = document.getElementById("add-popup-button");
var cancelpopup = document.getElementById("cancelbook");
var container = document.querySelector(".Container");
var booktitle = document.getElementById("book-title-input");
var bookauthor = document.getElementById("book-author-input");
var aboutthebook = document.getElementById("book-description");
var popupAddBtn = document.getElementById("addbook");

let currentEditBook = null; // Keeps track of the book being edited

// Open popup to add new book
addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
    popupAddBtn.textContent = "Add";
    booktitle.value = "";
    bookauthor.value = "";
    aboutthebook.value = "";
    currentEditBook = null; // Reset
});

// Cancel button
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Add or Update book
popupAddBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (currentEditBook) {
        // --- UPDATE mode ---
        currentEditBook.querySelector("h2").textContent = booktitle.value;
        currentEditBook.querySelector("h5").textContent = bookauthor.value;
        currentEditBook.querySelector("p").textContent = aboutthebook.value;
        currentEditBook = null;
    } else {
        // --- ADD mode ---
        var div = document.createElement("div");
        div.setAttribute("class", "book-container");
        div.innerHTML = `
            <h2>${booktitle.value}</h2><br>
            <h5>${bookauthor.value}</h5><br>
            <p>${aboutthebook.value}</p><br>
            <button onclick="deletebook(event)"><b>Delete</b></button>
            <button class="edit-button"><b>Edit</b></button>
        `;
        container.append(div);

        // Attach edit listener to new button
        let editBtn = div.querySelector(".edit-button");
        editBtn.addEventListener("click", editBook);
    }

    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Delete book function
function deletebook(event) {
    event.target.closest(".book-container").remove();
}

// Edit book function
function editBook(event) {
    let bookDiv = event.target.closest(".book-container");
    let title = bookDiv.querySelector("h2").textContent;
    let author = bookDiv.querySelector("h5").textContent;
    let description = bookDiv.querySelector("p").textContent;

    booktitle.value = title;
    bookauthor.value = author;
    aboutthebook.value = description;

    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
    popupAddBtn.textContent = "Update";

    currentEditBook = bookDiv;
}

// Attach edit event to existing edit buttons
document.querySelectorAll(".edit-button").forEach(function (btn) {
    btn.addEventListener("click", editBook);
});