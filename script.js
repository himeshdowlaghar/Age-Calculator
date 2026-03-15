let currDate=new Date();
let result= document.getElementById("result");
result.innerText="Current Date: "+currDate.getDate()+"/"+(currDate.getMonth()+1)+"/"+currDate.getFullYear();
let btn = document.getElementById("btn");
btn.addEventListener("click",calculate);

let birthDate = document.getElementById("birthdate");
function calculate(){
    let birthDateValue = new Date(birthDate.value);
    if(isNaN(birthDateValue)){
        result.innerText="Please enter a valid date!";
        return;
    }
    let age=currDate.getFullYear()-birthDateValue.getFullYear();
    if(currDate.getMonth()<birthDateValue.getMonth() || currDate.getMonth() == birthDateValue.getMonth() && currDate.getDate()<birthDateValue.getDate()){
        age--;
    }
    let months= (currDate.getMonth() - birthDateValue.getMonth() + 12) % 12;
    result.innerText="Your Age is: "+age+" Years "+months+" Months";
}