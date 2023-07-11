


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
    studentContainer.classList.add("dark");
    localStorage.setItem("darkMode","enabled");

};


const disableDarkMode = () =>{ 

    body.classList.remove("dark");
    navbar.classList.remove("dark");
    innerCursorDarkTheme.classList.remove("dark");
    studentList.classList.remove("dark");
    studentContainer.classList.remove("dark");
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