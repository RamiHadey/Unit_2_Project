"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Rami Hadey
   Date:  2/3/20
   
   Filename: tc_cart.js
	 
*/
//starts the value of the order as 0
var orderTotal = 0;
//content of shopping cart
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

for(var i = 0; i < item.length; i++){
   //puts an image on the item
   cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt=" + item[i] + " /></td> ";
   //adds a description to the item
   cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
   //FInds the cost of the items
   var itemCost = itemPrice[i] * itemQty[i];
   //Shows calculated cost
   cartHTML += "<td>$" + itemCost + "</td></tr>";
   //get everything
   orderTotal += itemCost;
}
cartHTML += "<tr><td colspan = '4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";

//Runs the code
document.getElementById("cart").innerHTML = cartHTML;
