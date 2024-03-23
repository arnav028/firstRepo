console.log("Inside modules");
function sum(a,b) {
    return a +b;
}

function subtract(a,b){
    return a -b ;
}

modules.exports = {
    sum,
    subtract
}