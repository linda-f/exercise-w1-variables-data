/*
1) (This has a DEMO solution.)
Create a variable that stores the name of your cafe.
Print out a greeting such as "Welcome to Technigo Cafe! What would you like to order today?"
Where echnigo Cafe is replaced by the name of your cafe that is stored in the variable.
*/
const cafeName = "Cafe Mooncake";
console.log(`Welcome to ${cafeName}! What would you like to order today?`);

/*
2)
Create a variable that stores the price of a coffee.
Create a variable that stores how many coffees the customer wants.
Print out the total price such as "There you go, that'll be 10 euros"
Where 10 is replaced by the calculation of the total price.
*/

let coffeePrice = 6
let coffeeAmount = 4

let totalPrice = coffeePrice*coffeeAmount

console.log (`There you go, that'll be ${totalPrice} euros.`)

/*
3)
Create a variable that stores a boolean.
Print out "You said this coffee is the best, that was actually true"
Where true is replaced by your varible
*/

/*
Im thinking Boolean is true/false like let bestCoffee = true

You wanna just go ahead and try that?

Bit simple, but at the same time the others were quite simple.. :)))
haha ok wonder why.. I think the assignment is a little bit vague
yes lets! yes we can ask them how they understood nr 

True :) The only thing that is not how it should be according to the instructions is that is should be variable? no?  I mean right now we can't change bestCoffee.
Ah I see. It prints right in the consule so right now false. But it's purple again ;)
Yes it is.
Should we just push everything to Github make a small break and return to the others?
exactly!
*/

let bestCoffee = false
console.log(`You said this coffee is the best, that is actually `, bestCoffee)

/*
let highestRate = 10
let coffeeRate = 10
if (coffeeRate === highestRate) {
    console.log(`You said this coffee is the best, that was actually`, coffeeRate === highestRate)
}*/

/*
4)
Create a variable called cafeGuests, that shows us how many cafeGuests we have.
Assign it a value.
Print it out.
assign it a new value.
Print it out. => This should give you the new value.
*/

let cafeGuests = 12
cafeGuests = 10
console.log (cafeGuests)

/*
5)
Create a variable called maxGuests, that shows us how many guests are allowed in the cafe.
Assign it a value.
Print it out.
assign it a new value.
Print it out. => This should give you an error because it shouldn't be able to be changed.
*/

const maxGuests = 50
console.log(maxGuests)
/*maxGuests = 30 
console.log(maxGuests)*/

/*
6)
Create a variable that stores a string.
Print out that string in only UPPERCASE letters.
*/

let coffeeName = "Moonshine"
console.log(coffeeName.toUpperCase ())

/*
7)
Print out the same string in only lowercase letters.
*/

console.log(coffeeName.toLowerCase())

/*
8) **BONUS**
Print out the string "Today we have a special summer deal!". 
Then figure out a way to replace the word "summer" in the string with the word "winter"
Should give you => "Today we have a special winter deal!"
(check for a specific string method...)
*/

console.log("Today we have a special summer deal!")


let originalString = "Today we have a special summer deal!";
let newString = originalString.replace("summer", "winter");
console.log(newString);