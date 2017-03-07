window.onload = function() {
    "use strict";
    var title = document.getElementById("title");
    var button = document.getElementById("search");
    title.addEventListener("change", getBook);

    function getBook(e) {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://www.googleapis.com/books/v1/volumes?q=" + this.value, true);
        xhr.send();

        //set up listener for the response
        xhr.addEventListener("readystatechange", function() {
            if (this.readyState == 4 && this.status == 200) {
                var o = JSON.parse(this.response);
                var t = JSON.parse(this.response).items[0].volumeInfo.title;
                var a = JSON.parse(this.response).items[0].volumeInfo.authors;
                var d = JSON.parse(this.response).items[0].volumeInfo.description;
                var titlereturn = ("Title: " + t);
                document.getElementById('titlereturn').innerHTML = titlereturn;
                var authorreturn = ("Author(s): " + a);
                document.getElementById('authorreturn').innerHTML = authorreturn;
                var descriptionreturn = ("Description: " + d);
                document.getElementById('descriptionreturn').innerHTML = descriptionreturn;
            }
        })

    }
}


// ****** Set up radio button ********

//retrieve elements from the HTML form
var theForm = document.forms["bookForm"];
var readIt = document.getElementById("readIt");
var wantToRead = document.getElementById("wantToRead");

//use the change function so the user can switch between choices 
theForm.addEventListener("change", function(evt) {

    //create a conditional so the correct text populates/hides based on choice
    if (evt.target.value == "read") {
        readIt.style.display = "block";
        wantToRead.style.display = "none";
    } else if (evt.target.value == "wanttoread") {
        wantToRead.style.display = "block";
        readIt.style.display = "none";
    }

})

// ******** End Radio Button Section **********

// ***** Drop Down Select Code **********

var theForm = document.forms["bookForm"];
//create items for dropdown one
var genre = ["Fiction", "Non Fiction"];
//create items for dropdown two
var subGenre = [
    ["drama", "comic", "crime/detective", "fantasy", "historical fiction", "mystery", "mythology", "suspense"],
    ["biograpy/autobiography", "memoir", "textbook", "essay"],
]

//retrieve elements from the HTML file
var selects = document.getElementById("selects");
var firstSelect = document.getElementById("firstSelect");
var secondSelect = document.getElementById("secondSelect");
var len = genre.length;

//loop through the FIRST list of items, assign it to an HTML element, send array to that element
for (var i = 0; i < len; i++) {
    var opt = document.createElement("option");
    var textNode = document.createTextNode(genre[i]);
    opt.value = i;
    opt.appendChild(textNode);
    firstSelect.appendChild(opt);
}

//add the change listener so that the menu clears when the user chooses a different option
firstSelect.addEventListener('change', function() {
    var list = this.value;


    //create a conditional so that if the list is not NULL, populate from corresponding 
    //section of SECOND array
    if (list != '') {
        for (var i = secondSelect.options.length - 1; i >= 0; i--) {
            secondSelect.remove(i);
        }
    }

    var len = subGenre[list].length;
    for (var i = 0; i < len; i++) {
        var opt = document.createElement("option");
        var textNode = document.createTextNode(subGenre[list][i]);
        opt.appendChild(textNode);
        secondSelect.appendChild(opt);
    }



})

// ******** LOCAL STORAGE CODE ***********

//empty array to store Book Data
var bookArray = [];
var firstObject = {
    'firstObjectKey': bookArray,
}

theForm.addEventListener("submit", function() {
        var titleSave = document.getElementById("titleSave").value;
        var rating = document.getElementById("rating").value;
        var completed = document.getElementById("completed").value;
        var why = document.getElementById("why").value;
        //var selects = document.getElementById("selects").value;

        // var rating = document.getElementById("rating").value;


        function ratingEntry(titleSave, rating, completed, why) {
            this.titleSave = titleSave;
            this.rating = rating;
            this.completed = completed;
            this.why = why;
            //this.selects = selects;

        }
        var infoObject = new ratingEntry(titleSave, rating, completed, why);


        bookArray.push(infoObject);

        //send to local storage, and convert the object to a string
        window.localStorage.setItem("results", JSON.stringify(infoObject));
    })
    //get data from local storage; parse data
var localStorageResults = JSON.parse(window.localStorage.getItem("results"));



function writeRowToPage(dataObject, element) {
    var s = "<div class=\"info\">";

    s += '<div class="titleSaveDiv">';
    if (dataObject.titleSave !== 'undefined') {
        s += ("Title:  ") + dataObject.titleSave;
    }
    s += '<div class="ratingDiv">';
    if (dataObject.rating !== 'undefined') {
        s += ("Rating:  ") + dataObject.rating;
    }
    s += '</div><div class="completedDiv">';
    if (dataObject.completed !== 'undefined') {
        s += ("Date I completed the book:  ") + dataObject.completed;
    }
    s += '</div><div class="whyDiv">';
    if (dataObject.why !== 'undefined') {
        s += ("What I liked about it:  ") + dataObject.why;
    }
    s += '</div></div>';

    element.innerHTML += s;
}


//write data to the page

writeRowToPage(localStorageResults, document.getElementById("output"));

var submitGoal = document.getElementById("submitGoal")
var goalArray = [];
var secondObject = {
    'secondObjectKey': goalArray,
}

submitGoal.addEventListener("click", function() {

        var titleGoal = document.getElementById("titleGoal").value;
        var goal = document.getElementById("goal").value;



        function goalEntry(titleGoal, goal) {
            this.titleGoal = titleGoal;
            this.goal = goal;

        }
        var goalObject = new goalEntry(titleGoal, goal);


        goalArray.push(goalObject);

        //send to local storage, and convert the object to a string
        window.localStorage.setItem("goals", JSON.stringify(goalObject));
    })
    //get data from local storage; parse data
var goalResults = JSON.parse(window.localStorage.getItem("goals"));



function writeGoalToPage(dataObject, element) {
    var x = "<div class=\"goalinfo\">";

    x += '<div class="titleGoalDiv">';
    if (dataObject.titleGoal !== 'undefined') {
        x += ("Title:  ") + dataObject.titleGoal;
    }
    x += '<div class="goalDiv">';
    if (dataObject.goal !== 'undefined') {
        x += ("Date to start reading by:  ") + dataObject.goal;
    }

    x += '</div></div>';

    element.innerHTML += x;
}


//write data to the page

writeGoalToPage(goalResults, document.getElementById("goaloutput"));