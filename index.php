<!DOCTYPE html>
<html>
    <head>
        <title>Bookshelf</title>
        <link rel="stylesheet" type="text/css" href="css/bookshelf.css">
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet">
    </head>
    <body>
        <div class = "titlePage">
            <h1>My Bookshelf</h1>
        </div>
        <div class = "spacer"></div>
        <form autocomplete="off" action="" name="bookForm">
            <div class="return">
                <br/> Find a book:
                <input type="text" name="title" id="title">
                <button type="button" name="search" id = "search">Search</button>
                <br/>
                <br/>
                <br/>
                <div class="results">
                <div id = "titlereturn"></div>
                <div id = "authorreturn"></div>
                <div id = "descriptionreturn"></div>
                </div>
            </div>
            <!--READ OR WANT TO -->
            <div id="bookyesorno">
                <div class = "bookyesorno">
                    <br/> Have you read this book?
                    <br/>
                    <input type="radio" , name="books" , value="read" /> Read it!
                    <input type="radio" , name="books" , value="wanttoread" /> I want to read it!
                    <br/>
                    <br/>
                </div>
                <div id="readIt" class="hidden">
                    Title:
                    <input type="text" size="20" id= "titleSave"/>
                    <br/>Rate it (1 - 10):
                    <input type="text" size="20" id= "rating"/>
                    <br /> Completed date:
                    <input type="date" size="20" id= "completed"/>
                    <br /> Why did you like it?
                    <input type="text" size="20" id= "why"/>
                    <br />
                    <div id="selects">
                        <div id="select1Div" style="float:left;margin-right:15px;">
                            Select the Type of Book
                            <br>
                            <select name="firstSelect" id="firstSelect">
                                <option>----</option>
                            </select>
                        </div>
                        <br />
                        <br />
                        <div id="select2Div">
                            Select Genre
                            <br>
                            <select name="secondSelect" id="secondSelect">
                                <option>----</option>
                                &nbsp;
                            </select>
                        </div>
                    </div>
                    <br />
                    <input type= "submit" id = "submitRead">
                </div>
                <div id="wantToRead" class="hidden"> 
                    Title:
                    <input type="text" size="20" id= "titleGoal"/>
                    <br />Give yourself a goal! Start reading by:
                    <input type="date" size="20" id = "goal" />
                    <input type= "submit"id = "submitGoal">
                </div>
            </div>
            <!--end of additional code -->
            <div class = "spacer"></div>
            <div class = "titlePage">
                <h2>The Last Book I Read (and want to read!)...</h2>
            </div>
            <!--    <form autocomplete="off" action="" name="bookShelfForm"> -->
            <div id="output">
                <div class="info infoHead">
                    <div class = "bookList">Recent book:</div>
                    <br/>
                </div>
            </div>
            <div class = "spacer"></div>
            <div id="goaloutput">
                <div class="goalinfo infoHead">
                    <div class = "bookList">My goal to read:</div>
                    <br/>
                </div>
            </div>

        </form>
        <script type="text/javascript" src="js/bookshelf.js"></script>
    </body>
</html>