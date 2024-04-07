//! (1) Resume with JSON

let myResume={
    "basics": {
      "name": "RAGURAM R R ",
      "email": "raguramraja11@gmail.com",
      "phone": "987654321",
      "degree": "B.E",
      "location": {
        "address": "1B/1,TVS Street,Rasipuram",
        "postalCode": "637408",
        "city": "Namakkal",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles" : {
          "github":"https://github.com/RaguramRR"
        }
    },
    "education": [
      {
        "institution": "Mahendra Engineering college",
        "department": "Mechanical",
        "studyType": "fulltime",
        "batch start year": "2015",
        "batch end year": "2019",
        "gpa": "8.56",
      }
    ],
    "skills": [
      {
        "name": "javascript",
        "level": "beginer",
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish,malayalam",
      }
    ],
    "interests": [
      {
        "int": "books reading,football,youtuber,",
      }
    ]
  }
  console.log(myResume);
  
//! (2) iterate over all for loops
 
  var json = [{
    
    "id" : "Raguram", 
    "institution": "Mahendra Engineering college",
    "language": "Tamil,Enlish,malayalam",
    "mail": "raguramraja11@gmail.com"
},
{
    "id" : "Raguram", 
    "institution": "Mahendra Engineering college",
    "language": "Tamil,Enlish,malayalam",
    "mail": "raguramraja11@gmail.com"
}];

//! for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.institution);
    console.log(obj.language);
    console.log(obj.mail);

}

//! for Each

json.forEach(function(obj) { console.log(obj.language); });

//! for In

for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}

//! for Of

let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);
