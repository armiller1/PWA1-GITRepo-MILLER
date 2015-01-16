/**
 * Duel Fight Game 2
 * Date: 1/15/15

 Aubriana Miller
 Assignment 1 part 2
 Part 2/3 of series
 */

// self-executing function
(function(){ //This is the beginning of the main function being executed

    console.log("FIGHT!!!"); //Code telling the console an alert

    //player name

    /*var playerOneName = "Spiderman"; //Fighter #1's name variable
     var playerTwoName = "Batman"; //Fighter #2's name variable*/

    //This is an array for player 1
    var playerOne = ["Spiderman", 20, 100];
    playerOneName = playerOne [0];
    playerOneDamage = playerOne [1];
    playerOneHealth = playerOne [2];
    //This is an array for player 2
    var playerTwo = ["Batman", 20, 100];
    playerTwoName = playerTwo [0];
    playerTwoDamage = playerTwo [1];
    playerTwoHealth = playerTwo [2];


    //player damage
    /*var player1Damage = 20; //Spiderman's damage variable
     var player2Damage = 20; //Batman's damage variable

     //player health
     var playerOneHealth = 100; //Spiderman's starting health variable
     var playerTwoHealth = 100; //Batman's starting health variable */

    //initiate round
    var round=0; //Round number variable before start

    function fight(){ //Beginning of function coding
        alert(playerOneName + ":"+ playerOneHealth+"  *START*  "+playerTwoName+":"+ playerTwoHealth); //Alerting the user of the starting health of each fighter at the start of the fight
        for (var i = 0; i < 10; i++) //For loop that gives alerts with the numbers 1 though 9
        { //Beginning curly bracket of code statement
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOneDamage * .5; //Damage variable for fighter #1, multiplying damage by .5
            var minDamage2 = playerTwoDamage * .5; //Damage variable for fighter #2, multiplying damage by .5
            var f1 = Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1); //Coded variable to randomly generate a damage result
            var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2); //Coded variable to randomly generate a damage result

            //inflict damage
            playerOneHealth-=f1; //Fighter #1 health is less or equal to result multiplied by .5
            playerTwoHealth-=f2; //Fighter #2 health is less or equal to result multiplied by .5

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); //Console displaying results of each fighter remaining health

            //check for victor
            var result = winnerCheck(); //result variable to display winner
            console.log(result); //Displaying the name of the winner
            if (result==="no winner") //Showing result as no winner
            { //beginning of else
                round++; //Round 2
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); //Changed the variable names

            } else{ //New else statement
                alert(result); //Alerting the player of the result
                break; //Break
            } //End of else statement

        } //Ending bracket of code statement
    } //Ending bracket of function

    function winnerCheck(){ //Function checking for winner
        var result="no winner"; //Result variable for no winner
        if (playerOneHealth<1 && playerTwoHealth<1) //If player one health is less than 1 and player 2 health is less than 1
        { //Beginning curly bracket for result
            result = "You Both Die"; //Result
        } else if(playerOneHealth<1){ //If player 1 health is less than 1
            result =playerTwoName+" WINS!!!"; //Result is player 2 wins
        } else if (playerTwoHealth<1) //If player 2 health is less than 1
        { //beginning curly bracket of result
            result = playerOneName+" WINS!!!"; //Result is player 1 wins
        } //Ending curly bracket of result
        return result; //Returning the result to the player
    } //Ending curly bracket of function

    /*******  The program gets started below *******/
    fight();

})();
