
/*
Name: Md Johirul Islam Akash
Assignment: 4
Assignment topic : Basic JavaScript
*/


//Assignment Problem 1 - Crating a seerToMon function to convert seer to mon

function seerToMon(seer){
        //Assigning variables
    const seerToMonFormula = seer / 40;

        //Conditions for unwanted inputs
    if(seer < 0 || typeof seer == 'string'){
        return 'Input cannot be a negative number or a string';
    }
    return seerToMonFormula;
}

// Assigning all the possible inputs in variables && you can change the parameters to see the different result as well
const seerInputString = seerToMon('a');
const seerInputNegativeNum = seerToMon(-5);
const seerInputPositiveNum = seerToMon(40);

//Showing the results of the function
console.log('=========== Problem No: 1===========')
console.log('Seer input in string(Error Msg.):- ' + seerInputString);
console.log('Seer input in negative number(Error Msg.):- ' + seerInputNegativeNum);
console.log('Seer input in working way / positive input:- ' + seerInputPositiveNum);



//Assignment problem 2 - creating a totalSales funciton to get total sales of a shop

function  totalSales(shirts,pants,shoes){
        //Assinging essential variables
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;
    const shirtSales = shirts * shirtPrice;
    const pantSales = pants * pantPrice;
    const shoeSales = shoes * shoePrice;
    const total = shirtSales + pantSales + shoeSales;

        //Conditions for unwanted inputs
    if(typeof shirts == 'string' || shirts < 0 || typeof pants == 'string' || pants < 0 || typeof shoes == 'string' || shoes < 0){
        return 'Input cannot be negative number or a string';
    }

        //Returning the result
    return total;
}

//Assinging all the possible input in variables && you can change the parameters to see the different results as well
const stringSales = totalSales('1', '2', '3');
const negativeNumSales = totalSales(-1,-2,-3);
const positiveNumSales = totalSales(1,2,3);

//Showing the results of the function
console.log('=========== Problem No: 2===========');
console.log('Total sales in string(Error Msg.):- ' + stringSales);
console.log('Total sales in negatvie numbers(Error Msg.):- ' + negativeNumSales);
console.log('Total sales in working method/ positive input:- ' + positiveNumSales);



//Assignment problem 3 - creating a function to know the deliveryCost
function deliveryCost(quantity){
        //Assigning Essenial Variables
    const costTire1 = 100 * 100;
    const costTire2 = costTire1 + (quantity - 100) * 80;
    const costTire3 = costTire1 + 100 * 80 + (quantity - 200) * 50;

        //Conditions for unwanted input and the functions condition
    if(quantity < 0 || typeof quantity == 'string'){
        return 'Input cannot be negative number or a string';
    }
    else if(quantity <= 100){
        return quantity * 100;
    }
    else if(quantity > 100 && quantity <= 200){
        return costTire2;
    }
    else{
       return costTire3;
    }
}

//Assigning all the possible inputs in the variable && change the parameters to see different result as well
const cost = deliveryCost(96);
const cost1 = deliveryCost(100);
const cost2 = deliveryCost(101);
const cost3 = deliveryCost(199);
const cost4 = deliveryCost(201);
const cost5 = deliveryCost(299);
const cost6 = deliveryCost(500);
const costInput1 = deliveryCost(-33);
const costInput2 = deliveryCost('22');

//Showing the result in the function
console.log('=========== Problem No: 3 ===========');
console.log('Quantity under 100(on 96):- ' + cost);
console.log('Quantity under 100(on 100):- ' + cost1);
console.log('Quantity above 100(on 101):- ' + cost2);
console.log('Quantity under 200(on 199):- ' + cost3);
console.log('Quantity above 200(on 201):- ' + cost4);
console.log('Quantity under 300(on 299):- ' + cost5);
console.log('Quantity under 500(on 500):- ' + cost6);
console.log('Quantity under 0(Error Msg. on Negative value):- ' + costInput1);
console.log('Quantity on string(Erron Msg. on string input):- ' + costInput2);



//Assignment Problem 4 - return the friends name from an array which is only 5 character long
function perfectFriend(friends){
        //Assigning essential varables
    let bestFriend = '';

        //For loop to loop through all the friends name
    for(let i = 0; i < friends.length; i++){

            //condition to check unwanted input
        if(typeof friends[i] == 'number'){
            return 'Number type input is not allowed.';
        }
        else if(friends[i].length == 5){
            bestFriend = friends[i];
            break; //to stop the loop immediately when find the first 5 character lenght friends name
        }
        else{
            bestFriend = 'Sorry!! You dont have any perfect friends.'
        }
    }
    return bestFriend;
}

//Assigning all the possible variables change to see different results as well
const friendsSet1 = ['akas', 'azizul', 'rony', 'asif', 'fahad', 'akash'];
const friendsSet2 = ['akas', 5, 'rony', 'asif', 'fahad', 'akash'];
const friendsSet3 = ['akas', 'ali', 'rony', 'asif', 'faha', 'aka'];
const friendsNames = perfectFriend(friendsSet1);
const friendsNamesNumber = perfectFriend(friendsSet2);
const friendsNamesUnder = perfectFriend(friendsSet3);
//Showing the results
console.log('=========== Problem No: 3 ===========');
console.log('Friends with a number(For error msg):- ' + friendsNamesNumber);
console.log('Friends with under 5 length charter names:- ' + friendsNamesUnder);
console.log('Working mode / with 5 length names:- ' + friendsNames);
