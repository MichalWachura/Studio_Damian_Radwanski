const students = [
    {
        name: "Tomasz Berezowski",
        year: 2012,
        title:"Żelosko - Dom Rzemiosła nad placem targowwym Rudzie Śląskiej"
    },


    {
        name: "Marcin Szafrański",
        year: 2019,
        title:"Panorama Pamięci - Muzeum gen. Tadeusza Kościuszki w Racławicach"
    },


    {
        name: "Marcin Woźnica",
        year: 2021,
        title:"Projekt koncepcyjny Lokalnego Centrum Kultury w Piekarach Śląskich"
    },


    {
        name: "Piotr Szenkowski",
        year: 2021,
        title:"Dom Rzemiosł Różnych XXI w. Projekt koncepcyjny zabudowy mieszkaniowo-usługowej w Bytomiu."
    },


    {
        name: "Michał Wachura",
        year: 2022,
        title:"Veloraum-projekt zagospodarowania strefy węzła drogowego na przykładzie Ronda Sybiraków w Zabrzu"
    },


    {
        name: "Kamil Wróbel",
        year: 2022,
        title:"Baildon XXI w.-Szkoła Rzemiosł w Katowicach"
    }
];

console.log(students);

const oldest = students.filter((student)=>{
    return student.year<2021;
});

const newest = students.filter((student)=>{
    return student.year>2021;
});

console.log(oldest);
console.log(newest);

const foundStudent = students.find((student)=>{
    return student.name ==="Kamil Wróbel"
});

console.log(foundStudent);


const numbers = [1,2,3,4,5,6];

// numbers.fill("numer", 0 ,3);

console.log(numbers);

students.forEach((student)=>{
    console.log(student.name + " This is student")
});


const findName = numbers.includes(1);

console.log(findName);

const showNames = students.map((student)=>{
    return student.year;
});

console.log(showNames)

