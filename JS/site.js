function getValues(){
    let loanBalance = (document.getElementById("loanBalance").value);
    let loanTerm = (document.getElementById("loanTerm").value);

    let loanInterest = (document.getElementById("loanInterest").value);
        
    const rowObject= {};
    let totalInterest=0;

    rowObject.Balance = loanBalance;
    let templateRows ="";
    for(i = 1; i<=loanTerm; i++){
        rowObject.Payment = totalMonthly(loanBalance, loanInterest, loanTerm);
        rowObject.Interest = interestPayment(loanBalance, loanInterest);
        totalInterest+=rowObject.Interest;
        loanBalance = loanBalance - rowObject.Payment;
        rowObject.Principal = principalPayment(rowObject.Payment, rowObject.Interest);


        templateRows+=`<tr><th scope="row">${i}</th><td>${rowObject.Payment}</td><td>${rowObject.Principal}</td><td>${rowObject.Interest}</td><td>${totalInterest}</td><td>${loanBalance}</td></tr>`
    }
    document.getElementById("tableResults").innerHTML = templateRows;

    document.getElementById("monthlyPayment").innerHTML = rowObject.Payment;
    document.getElementById("totalPrincipal").innerHTML = loanBalance;
    document.getElementById("totalCost").innerHTML = totalInterest + loanBalance;
}

function principalPayment(Payment, Interest){
    let returnValue = Payment - Interest;
    return (returnValue)
}
function interestPayment(Balance, loanInterest){
    let returnValue = Balance * (loanInterest/1200);
    return (returnValue)
}
function remainingBalance(loanBalance, Payment){
    let returnValue = loanBalance - Payment;
    return (returnValue)
}
function totalMonthly(loanBalance, loanInterest, loanTerm){
    let monthlyInterest = loanInterest/1200;
    return loanBalance * monthlyInterest * (Math.pow(1 + monthlyInterest, loanTerm)) / (Math.pow(1 + monthlyInterest, loanTerm) - 1);
}
function remainingBalance(Balance, Principal){
    let returnValue = Balance - Principal;
    return (returnValue)
}