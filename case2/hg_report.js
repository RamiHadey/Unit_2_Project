"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Rami Hadey
   Date:   2/4/20
   
   Filename: hg_report.js
	
*/

//information that will be displayed in web page 
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By:" + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt=" + itemID + "id='gameImg' /> <table> <tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>List Price</th><td>" + itemPrice + "</td></tr> <tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr> </table>" + itemSummary + "";

//display gamereport on article tag
document.getElementsByTagName("article")[0].innerHTML = gameReport;

//set initial value to 0
var ratingsSum = 0;

//counts amount of ratings
var ratingsCount = ratings.length; 

//Repeats the process for counting ratings 
for(var i = 0; i < ratings.length; i++){
   ratingsSum + ratings;
}

// finds the average of the ratings
var ratingAvg = ratingsSum / ratingsCount;

//writes Customer Review and tells how much stars the are 
var ratingReport = "<h1> Customer Review</h1> <h2>" + ratingAvg + " out of 5 stars (" + ratingsCount + " reviews) </h2>";

//loops the info for rating
for(var i = 0; i < 3; i++){
   ratingReport += "<div class='review'> <h1>" + ratingTitles[i] + "</h1> <table><tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr> <tr><th>Rating</th><td>";

   for(var j = 0; j < ratings[i]; j++){
      ratingReport += "<img src='hg_star.png' />";
   }

   //puts ratings in table
   ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

//displays the aside tag
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;
