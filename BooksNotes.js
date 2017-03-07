var el = document.getElementById("book");

var xhr = new XMLHttpRequest();

xhr.open("GET", "API URL???");
xhr.send();

xhr.addEventListener("readystatechange", function() {
if(this.readyState == 4 && this.status == 200) {
	el.innerHTML = this.response;
}
})


https://www.googleapis.com/books/v1/volumes?q=harrypotter


var author = document.getElementById("author");

author.addEventListener("submit", getBook);

function getBook(e){
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://www.googleapis.com/books/v1/volumes?q="+this.value,true);
xhr.send();

//set up listener for the response
xhr.addEventListener("readystatechange", function() {
if(this.readyState == 4 && this.status == 200) {
	console.log(this.response);
}
})

}