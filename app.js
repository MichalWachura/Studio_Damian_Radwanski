


//  ============ CURSOR ============
let innerCursor = document.querySelector(".inner-cursor");

document.addEventListener('mousemove',moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;
    // console.log(x,y);
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
}

//  ============ FILTER BY YEAR ============
let allBtn = document.querySelector('#all-btn');

let year2012Btn = document.getElementById("2012-btn");
let year2019Btn = document.getElementById("2019-btn");
let year2021Btn = document.getElementById("2021-btn");
let year2022Btn = document.getElementById("2022-btn");

let year2012 = document.querySelectorAll(".year2012");
let year2019 = document.querySelectorAll(".year2019");
let year2021 = document.querySelectorAll(".year2021");
let year2022 = document.querySelectorAll(".year2022");



allBtn.addEventListener("click",()=>{

    year2012.forEach(year => year.classList.remove("hide"));
    year2019.forEach(year => year.classList.remove("hide"));
    year2021.forEach(year => year.classList.remove("hide"));
    year2022.forEach(year => year.classList.remove("hide"));
});

year2012Btn.addEventListener("click",()=>{
    year2012.forEach(year => year.classList.remove("hide"));
    year2019.forEach(year => year.classList.add("hide"));
    year2021.forEach(year => year.classList.add("hide"));
    year2022.forEach(year => year.classList.add("hide"));
});

year2019Btn.addEventListener("click",()=>{
    year2019.forEach(year => year.classList.remove("hide"));
    year2012.forEach(year => year.classList.add("hide"));
    year2021.forEach(year => year.classList.add("hide"));
    year2022.forEach(year => year.classList.add("hide"));
});

year2021Btn.addEventListener("click",()=>{
    year2021.forEach(year => year.classList.remove("hide"));
    year2012.forEach(year => year.classList.add("hide"));
    year2019.forEach(year => year.classList.add("hide"));
    year2022.forEach(year => year.classList.add("hide"));
});

year2022Btn.addEventListener("click",()=>{
    year2022.forEach(year => year.classList.remove("hide"));
    year2012.forEach(year => year.classList.add("hide"));
    year2019.forEach(year => year.classList.add("hide"));
    year2021.forEach(year => year.classList.add("hide"));
    
});

//  ============ SORTING NAMES ALPHABETICAL ============

const alphaBtn = document.getElementById("alphabetic");
let names = document.querySelectorAll(".name-surname");
let namesValues = names.textContent;

alphaBtn.addEventListener("click",()=>{
    console.log("test");
    let namesValues = [];
    names.forEach((name) =>{
        namesValues.push(name.textContent);
    });
    namesValues.sort()
    console.log(namesValues);
});


//  ============ DARK MODE ============

let darkModeStorage = localStorage.getItem('darkMode');
const darkThemeButton = document.querySelector(".day-night-background");




const body = document.body;
const navbar = document.querySelector('.navbar');
const innerCursorDarkTheme = document.querySelector('.inner-cursor');
const studentList = document.querySelector('.student-list');

const footer = document.querySelector(".footer");


const enableDarkMode = () =>{

    body.classList.add("dark");
    navbar.classList.add("dark");
    innerCursorDarkTheme.classList.add("dark");
    studentList.classList.add("dark");
    // studentContainer.classList.add("dark");
    localStorage.setItem("darkMode","enabled");

};


const disableDarkMode = () =>{ 

    body.classList.remove("dark");
    navbar.classList.remove("dark");
    innerCursorDarkTheme.classList.remove("dark");
    studentList.classList.remove("dark");
    // studentContainer.classList.remove("dark");
    localStorage.setItem("darkMode","disabled");

};

if (darkModeStorage === "enabled"){
    enableDarkMode();
}else{
    
    disableDarkMode();
};

darkThemeButton.addEventListener("click",()=>{
    
    darkModeStorage=localStorage.getItem('darkMode');

    if(darkModeStorage !=="enabled"){
    enableDarkMode();
    console.log(darkModeStorage);
    }else{
        disableDarkMode();
        console.log(darkModeStorage);
    }
});