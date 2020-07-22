// PlusClick Function;
function PlusClick(Id){
    let InputField = document.getElementById(Id).value;
    let InputFieldNumber = parseFloat(InputField);
    let totalCount = InputFieldNumber + 1;
    document.getElementById(Id).value = totalCount;
}
// MinusClick Function;
function MinusClick(Id){
    let InputField = document.getElementById(Id).value;
    let InputFieldNumber = parseFloat(InputField);
    let totalCount = InputFieldNumber - 1;
    document.getElementById(Id).value = totalCount;
}
// totalQuantityPlus Amount Function.
 function totalQuantityPlus(Id, price){
    let CurrentRate = document.getElementById(Id).innerText;
    let CurrentRateNumber = parseFloat(CurrentRate);
    let totall = CurrentRateNumber + price;
    document.getElementById(Id).innerText = totall;
 }
 // totalQuantityMinus Amount Function.
 function totalQuantityMinus(Id, price){
    let CurrentRate = document.getElementById(Id).innerText;
    let CurrentRateNumber = parseFloat(CurrentRate);
    let totall = CurrentRateNumber - price;
    document.getElementById(Id).innerText = totall;
 }
//  totalamountPlus Function.
function totalAmoutnPlus(price){
    let subtotal = document.getElementById("Subtotal").innerText;
   let subtotalToNumber = parseFloat(subtotal);
   document.getElementById("Subtotal").innerText = subtotalToNumber + price;
    let totalAmount = document.getElementById("totalAMount").innerText;
    let totalAmountNumber = parseFloat(totalAmount);
    document.getElementById("totalAMount").innerText = totalAmountNumber + price;
};
//  totalamountMinus Function.
function totalAmoutnMinus(price){
    let subtotal = document.getElementById("Subtotal").innerText;
   let subtotalToNumber = parseFloat(subtotal);
   document.getElementById("Subtotal").innerText = subtotalToNumber - price;
    let totalAmount = document.getElementById("totalAMount").innerText;
    let totalAmountNumber = parseFloat(totalAmount);
    document.getElementById("totalAMount").innerText = totalAmountNumber - price;
};
// PlusHandler1.
let PlusHandler = document.getElementById("PlusHandler1");
PlusHandler.addEventListener('click', function(){
    PlusClick("InputField1");
    totalQuantityPlus("CurrentRate", 1219);
    totalAmoutnPlus(1219)
    
 
});
// MinusHandler1.
let MinusHandler = document.getElementById("MinusHandler1");
MinusHandler.addEventListener('click', function(){
    MinusClick("InputField1");
    totalQuantityMinus("CurrentRate", 1219);
    totalAmoutnMinus(1219);
});
// PlusHandler2.
let PlusHandler2 = document.getElementById("PlusHandler2");
PlusHandler2.addEventListener('click', function(){
    PlusClick("InputField2");
    totalQuantityPlus("CurrentRate2", 59);
    let subtotal = document.getElementById("Subtotal").innerText;
    let subtotalNumber = parseFloat(subtotal);
    totalAmoutnPlus(59);
    
 
});
// MinusHandler2.
let MinusHandler2 = document.getElementById("MinusHandler2");
MinusHandler2.addEventListener('click', function(){
    MinusClick("InputField2");
    totalQuantityMinus("CurrentRate2", 59);
    totalAmoutnMinus(59);
});
