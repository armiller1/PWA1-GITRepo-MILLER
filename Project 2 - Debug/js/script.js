/*
 Aubriana Miller
 PWA1 Section 01
 Assignment: Debug
 1-11-2015
 */

// Create privatized scope using a self-executing function
(function(){ //Beginning of function

    // Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
    var resultsDIV = document.getElementById("results"), //Results variable
        searchInput = document.forms[0].search, //Search input array
        currentSearch = '' //Where the user input would register
        ; //Ending semi-colon

    // Validates search query
    var validqte == function(query){ //Validation variable referring to function

        // Trim whitespace from start and end of search query
        while(query.charAt(0) = " "){ //While statement referring to a string
            query = query.substring(1, query.length); //Search query string
        }; //Ending curly bracket of while statement (illegal semi-colon)
        while(query.charAt(query.length-1) === ""){ //While statement referring to string
            query = query.substring(0, query.length-1); //Search query string
            ; //Illegal semi-colon

            // Check search length, must have 3 characters
            if(query.length < 3){ //If statement checking if there are less than 3 characters inputted by the user
                alert("Your search query is too small, try again."); //Alerting the user that they must have at least 3 characters

                // (DO NOT FIX THE LINE DIRECTLY BELOW)
                searchInput.focus(); //Reference to a function
                return; //Return results to user
            }; //Ending curly bracket for If statement above (illegal semi-colon)

            search(query); //Search what the user has inputted
        }; //Ending curly bracket of above While statement (illegal semi-colon)

        // Finds search matches
        var search = function(query); //Search variable referring to a function

        // split the user's search query string into an array
        var queryArray = query.join(" "); //queryArray variable showing as user input

        // array to store matched results from database.js
        var results = []; //Results array variable

        // loop through each index of db array
        for(var i=0, j=db.length; i<j; i++){ //For loop of database array

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|'); //Title variable making every title ending in a pipe
            var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); //Database item variable making a lowercase

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for(var ii=0, jj=queryArray.length; ii<jj; ii++){ //For loop variable and array checking users query inputs
                var qitem = queryArray[ii].tolowercase(); //Variable checking array for key words

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem); //Variable comparing user's input with database
                if(compare !== -1){ //If the result is valid
                    results.push(db[i]); //Show results that match key words
                }; //Ending curly bracket for above For loop
                ; //Does not belong
                ; //Does not belong

                results.sort(); //Sort through database matches

                // Check that matches were found, and run output functions
                if(results.length = 0){ //If loop stating results have no key words inputted
                    noMatch(); //No matches found in database to display
                }else{ //Beginning of else statement
                    showMatches(results); //If there are matches, reveal them
                }; //Ending curly bracket for else statement
            }; //Ending curly bracket for above for-loop

            // Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
            var noMatch = function(){ //No matches variable referring to a function
                var html = ''+ //html variable
                        '<p>No Results found.</p>'+ //Displaying "no results found"
                        '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' //Suggesting that the user search for something javascript related
                    ; //Semi-colon should be at the end of the above line
                resultsDIV.innerHTML = html; //Content contains html
            }; //Ending curly bracket of above function variable

            // Put matches into page as paragraphs with anchors
            var showMatches = function(results){ //Function variable to show results

                // THE NEXT 4 LINES ARE CORRECT.
                var html = '<p>Results</p>', //html displaying results
                    title, //Title of results
                    url //Url of results
                    ; //Semi-colon

                // loop through all the results search() function
                for(var i=0, j=results.length; i<j; i++){ // every result should be a certain length

                    // title of video ends with pipe
                    // pull the title's string using index numbers
                    titleEnd = results[i].indexOf('|'); //Results displaying a video index
                    title = results[i].subString(0, titleEnd); //Reveals the titles in strings

                    // pull the video url after the title
                    url = results[i].substring(results[i].indexOf('|')+1, results[i].length); //Displaying video url within results

                    // make the video link - THE NEXT LINE IS CORRECT.
                    html += '<p><a href=' + url + '>' + title + '</a></p>'; //Displaying the url and title of results
                }; //Ending curly bracket for the above for-loop (illegal semi-colon)
                resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
            }; //Ending curly bracket for above function variable

            // The onsubmit event will be reviewed in upcoming Course Material.
            // THE LINE DIRECTLY BELOW IS CORRECT
            document.forms[0].onsubmit = function(){ //String referring to a function
                var query = searchInput.value; //Variable referring to input value
                validqte(query); //To validate the user query

                // return false is needed for most events - this will be reviewed in upcoming course material
                // THE LINE DIRECTLY BELOW IS CORRECT
                return false;
                ; //Unnecessary semi-colon

            })(); //Ending curly bracket of above function and unnecessary elements

