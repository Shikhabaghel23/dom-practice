// function sayHii(){
//         console.log("Hii");
//     }
    
//     const sayBye = ()=> "Bye";
    
//     const result = sayHii(sayBye);
//     console.log(result);

//     function sayHii(callback){
//     const data = callback();
//     return "Hii" + data;
// }

// const sayBye = ()=> "Bye";

// const result = sayHii(sayBye);
// console.log(result)


///////////////////////////////////////////////////////////


// function visitingHotel(){
//     console.log("Enter Hotel")
// }
// visitingHotel();

// function preparedFood(foodDelivered){
//     setTimeout(()=>{
//         console.log("Food is being prepared");
//         console.log("Food is ready");
//         foodDelivered(eatingFood);
//     }, 10000);

// }

// function deliveredFood(eatingFood){
//     setTimeout(()=>{
//         console.log("Food is delivered to your table");
//         eatingFood(payment);
//     }, 5000)

// }

// function eatingFood(payment){
//     setTimeout(()=>{
//         console.log("Eating Food");
//         payment(leaveHotel);
//     }, 2000)
// }

// function payment(leaveHotel){
//     setTimeout(()=>{
//         console.log("Payment");
//         leaveHotel();
//     }, 1000)
// }
// function leaveHotel(rating){
//     setTimeout(()=>{
//        console.log("Leave the Hotel");
//     rating(); 
//     }, 1000)
    
// }

// function rating(){
//     setTimeout(()=>{
//        console.log("Rate the Hotel");  
//     }, 1000)
   
// }


// function visitingHotel(){
//     console.log("Entering the Hotel");
//     console.log("Order Food - Biryani ");
//     preparedFood(deliveredFood);
//     // rating();
//     // eatingFood(payment);
// }





///////////////////////////////////////////////////////////



function insert(processing){
    setTimeOut(()=>{
        console.log("Insert Card");
        processing();
    }, 1000)
}
visitingATM();


function processing(){
    setTimeOut(()=>{
        console.log("Processing");
    }, 5000)
}

function enterPin(){
    setTimeOut(()=>{
        console.log("Enter Pin");
    }, 2000)
}

function withdrawMoney(){
    setTimeOut(()=>{
        console.log("Withdraw Money");
    }, 5000)
}

function collectCash(){
    setTimeOut(()=>{
        console.log("Collect Cash");
    }, 1000)
}

function leave(){
    setTimeOut(()=>{
        console.log("Leave ATM");
    }, 2000)
}

function visitingATM(){
    console.log("Visiting ATM");
    console.log("Enter ATM ");
    console.log("processing");
}