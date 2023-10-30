// Question1.For the given JSON iterate over all for loops(for,for in,for of,for each)
// JSON : Javascript Object Notation
const PersonDetails = [{

    
        "name" : "Ram",
        "age"  : "21",
        "city": "Madurai"
    },
    {
        "name" : "joe",
        "age"  : "23",
        "city": "chennai"
    },
    {
        "name" : "joel",
        "age"  : "22",
        "city": "coimbatore"
    }
]
//using for loops:
    console.log( PersonDetails);
    console.log("By using for loop");
    for(let i=0;i<PersonDetails.length;i=i+1){
        console.log(PersonDetails[i].name,PersonDetails[i].age,PersonDetails[i].city)
    }
    //By using for in loops:
    console.log("By using for in loop");
    for(let index in PersonDetails){
        console.log(PersonDetails[index].name,PersonDetails[index].age,PersonDetails[index].city)
    }
    //By using for of loops:
    console.log("By using for of loop");
    for(let object in PersonDetails){
        console.log(PersonDetails[object].name,PersonDetails[object].age,PersonDetails[object].city)
    }

    //Question2: create your own resume data in JSON format:

    const Resume = {
        "Name": "Ramprakash",
        "Age" : "21",
        "City" : "Madurai",
        "Education":{
            "10th Standard":{
                "School":"StJMHSSS",
                "Percentage":"90%"
            },
        "12th Standard":{
            "School":"StJMHSSS",
            "Percentage":"64%"
        },
        "Degree":{
            "Course":"B.E Computer Communication Engineering",
            "College":"Sri Eshwar",
            "CGPA":"7%"
        }

    },
    "Skills":["Java","SQL","Javascript"],
    "Interest":["Sports","Gym","Travel"],
    "Certifications":{
        "BootCamp": "Full Stack",
        "Platform": "Guvi"
    },
    "Certifications1":{
        "BootCamp": "java",
        "Platform": "sololearn"
    },
    "Projects":{
        "Projects1":{
            "pname": "PIR Sensor",
            "semester":"6th"
        }
        
    },
    "Projects2":{
        "pname":"Hyperspectral image",
        "Semester":"7th"
    },
    }
console.log(Resume);
