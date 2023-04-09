const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();
months = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31]; 

const showDay = document.getElementById("show-days");
const showMonth = document.getElementById("show-months");
const showYear = document.getElementById("show-years");



const inputDate = document.getElementById("days");
const inputMonth = document.getElementById("months");
const inputYear = document.getElementById("years");

const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");


const ageForm = document.querySelector(".age-calc-form");
const errorMsg = document.querySelectorAll(".error-msg");



ageForm.addEventListener("submit", (e)=>{
    const dateTrue = document.getElementById("days").value;
    const monthTrue = document.getElementById("months").value;
    const yearTrue = document.getElementById("years").value;
    const momentObject = moment(`${dateTrue}/${monthTrue}/${yearTrue}`, 'DD/MM/YYYY', true);
    let yearValue = inputYear.value;
    let currentYear = new Date().getFullYear();

    if(inputDate.value < 1 || inputDate.value > 31){
        if(inputDate.value === ""){
            errorMsg[0].textContent = "This field is required";
            inputs[0].style.borderColor = "hsl(0, 100%, 67%)";
            labels[0].style.color = "hsl(0, 100%, 67%)";
            e.preventDefault();
        }else{
        errorMsg[0].textContent = "Must be a valid date";
        inputs[0].style.borderColor = "hsl(0, 100%, 67%)";
        labels[0].style.color = "hsl(0, 100%, 67%)";
        e.preventDefault();
        }
    }
    if(inputMonth.value < 1 || inputMonth.value > 12){
        if(inputMonth.value === ""){
            errorMsg[1].textContent = "This field is required";
            inputs[1].style.borderColor = "hsl(0, 100%, 67%)";
            labels[1].style.color = "hsl(0, 100%, 67%)";
            e.preventDefault();
        }else{
        errorMsg[1].textContent = "Must be a valid month";
        inputs[1].style.borderColor = "hsl(0, 100%, 67%)";
        labels[1].style.color = "hsl(0, 100%, 67%)";
        e.preventDefault();
        }
    }
    if(yearValue > currentYear){
        if(inputYear.value === ""){
            errorMsg[2].textContent = "This field is required";
            inputs[2].style.borderColor = "hsl(0, 100%, 67%)";
            labels[2].style.color = "hsl(0, 100%, 67%)";
            e.preventDefault();
        }else{
        errorMsg[2].textContent = "Must be in the past";
        inputs[2].style.borderColor = "hsl(0, 100%, 67%)";
        labels[2].style.color = "hsl(0, 100%, 67%)";
        e.preventDefault();
        }
    }


    if(inputDate.value === ""){
        errorMsg[0].textContent = "This field is required";
        inputs[0].style.borderColor = "hsl(0, 100%, 67%)";
        labels[0].style.color = "hsl(0, 100%, 67%)";
        e.preventDefault();
    }
    if(inputMonth.value === ""){
        errorMsg[1].textContent = "This field is required";
        inputs[1].style.borderColor = "hsl(0, 100%, 67%)";
        labels[1].style.color = "hsl(0, 100%, 67%)";
        e.preventDefault()
    }
    if(inputYear.value === ""){
        errorMsg[2].textContent = "This field is required";
        inputs[2].style.borderColor = "hsl(0, 100%, 67%)";
        labels[2].style.color = "hsl(0, 100%, 67%)";
        e.preventDefault()
    }

    if(isNaN(inputDate.value)){
        errorMsg[0].textContent = "Please enter a number";
        inputs[0].style.borderColor = "hsl(0, 100%, 67%)";
        labels[0].style.color = "hsl(0, 100%, 67%)";
        e.preventDefault();
    }
    if(isNaN(inputMonth.value)){
        errorMsg[1].textContent = "Please enter a number";
        inputs[1].style.borderColor = "hsl(0, 100%, 67%)";
        labels[1].style.color = "hsl(0, 100%, 67%)";
        e.preventDefault();
    }if(isNaN(inputYear.value)){
        errorMsg[2].textContent = "Please enter a number";
        inputs[2].style.borderColor = "hsl(0, 100%, 67%)";
        labels[2].style.color = "hsl(0, 100%, 67%)";
        e.preventDefault();
    }

    if(momentObject._isValid === false){
        if(inputDate.value === ""){
            errorMsg[0].textContent = "This field is required";
            inputs[0].style.borderColor = "hsl(0, 100%, 67%)";
            labels[0].style.color = "hsl(0, 100%, 67%)";
            e.preventDefault();
            return false;
        }else{
            errorMsg[0].textContent = "Must be a valid date";
            inputs[0].style.borderColor = "hsl(0, 100%, 67%)";
            labels[0].style.color = "hsl(0, 100%, 67%)";
            inputs.forEach(element =>{
                element.style.borderColor = "hsl(0, 100%, 67%)";
            })
            labels.forEach(element =>{
                element.style.color = "hsl(0, 100%, 67%)";
            })
            e.preventDefault();
            return false;
        }
    }
    if(inputDate.value > day){
        day = day + months[month - 1];
        month = month -1;
    }
    if(inputMonth.value > month){
        month = month + 12;
        year = year - 1;

    }
    const d = day - inputDate.value;
    const m = month - inputMonth.value;
    const y = year - inputYear.value;

    showDay.innerHTML = d;
    showMonth.innerHTML = m;
    showYear.innerHTML = y;

    e.preventDefault();

})

Array.from(inputs).forEach(element=>{
    element.addEventListener("input", (e)=>{
        errorMsg.forEach(element =>{
            element.textContent = "";
        })
        inputs.forEach(element =>{
            element.style.borderColor = "hsl(259, 100%, 65%)";
        })
        labels.forEach(element =>{
            element.style.color = "hsl(0, 1%, 44%)";
        })
        e.preventDefault();
    })
})