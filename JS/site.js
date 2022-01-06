function getValues(){
    let loanBalance = Number(document.getElementById("loanBalance").value);
    let loanTerm = (document.getElementById("loanTerm").value);
    let loanInterest = (document.getElementById("loanInterest").value);

    const rowObject= {};
    rowObject.Payment = totalMonthly(loanBalance, loanInterest, loanTerm);
    document.getElementById("totalPrincipal").innerHTML = loanBalance.toFixed(2);

    let totalInterest=0;

    rowObject.Balance = loanBalance;
    let ogLoanBalance = Number(loanBalance);
    let templateRows ="";
    for(i = 1; i<=loanTerm; i++){
        rowObject.Interest = interestPayment(loanBalance, loanInterest);
        totalInterest+=rowObject.Interest;
        loanBalance = loanBalance - rowObject.Payment + rowObject.Interest;
        rowObject.Principal = principalPayment(rowObject.Payment, rowObject.Interest);


        templateRows+=`<tr><th scope="row">${i}</th><td>${rowObject.Payment.toFixed(2)}</td><td>${rowObject.Principal.toFixed(2)}</td><td>${rowObject.Interest.toFixed(2)}</td><td>${totalInterest.toFixed(2)}</td><td>${loanBalance.toFixed(2)}</td></tr>`
    }
    
    document.getElementById("tableResults").innerHTML = templateRows;
    document.getElementById("monthlyPayment").innerHTML = rowObject.Payment.toFixed(2);
    document.getElementById("totalInterest").innerHTML = totalInterest.toFixed(2);
    let totalCost = totalInterest + ogLoanBalance;
    document.getElementById("totalCost").innerHTML = (totalInterest+ogLoanBalance).toFixed(2);
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