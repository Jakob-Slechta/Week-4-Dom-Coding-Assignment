


document.getElementById("Submit-Button").addEventListener("click", () => {
    var parent = document.getElementById("User-Submissions");
    var userRow = document.createElement("tr");
    var userInput = document.createElement("td");
    var userGame = document.createElement("td");
    var userMovie = document.createElement("td");
    var userSong = document.createElement("td");
    userRow.innerHTML = document.getElementById("");
    userInput.innerHTML = document.getElementById("Username").value;
    userGame.innerHTML = document.getElementById("Fav-Game").value;
    userMovie.innerHTML = document.getElementById("Fav-Movie").value;
    userSong.innerHTML = document.getElementById("Fav-Song").value;
    parent.appendChild(userInput);
    parent.appendChild(userGame);
    parent.appendChild(userMovie);
    parent.appendChild(userSong);
    var deletables = document.getElementById("Button-Table-Row");
    deletables.remove();

})
