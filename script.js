//Object containing the job information

let jobs = [
  {
    id: 1,
    skill: "surgery",
    industry: "healthcare",
  },
  {
    id: 2,
    skill: "nursing",
    industry: "healthcare",
  },
  {
    id: 3,
    skill: "physician",
    industry: "healthcare",
  },
  {
    id: 4,
    skill: "caregiving",
    industry: "healthcare",
  },
  {
    id: 5,
    skill: "analytics",
    industry: [
      "technology",
      "commercial",
      "finance",
      "engineering",
      "academia",
      "research",
    ],
  },
  {
    id: 6,
    skills: "machines",
    industry: "engineering",
  },
  {
    id: 7,
    skills: "electronics",
    industry: ["engineering", "technology", "maintenance", "manufacturing"],
  },
  {
    id: 8,
    skills: "welding",
    industry: ["construction", "maintenance"],
  },
  {
    id: 9,
    skills: "web",
    industry: ["technology", "advertising", "internet"],
  },
  {
    id: 10,
    skills: "programming",
    industry: ["technology", "research", "engineering", "commercial"],
  },
  {
    id: 11,
    skills: "consulting",
    industry: [
      "services",
      "finance",
      "government",
      "technology",
      "research",
      "commercial",
    ],
  },
  {
    id: 12,
    skills: "management",
    industry: [
      "commercial",
      "technology",
      "engineering",
      "consulting",
      "government",
    ],
  },
  {
    id: 13,
    skills: "negotiation",
    industry: ["government", "commercial", "legal"],
  },
  {
    id: 14,
    skills: "creativity",
    industry: [
      "design",
      "advertising",
      "fashion",
      "fine arts",
      "entertainment",
    ],
  },
  {
    id: 15,
    skills: "speaking",
    industry: ["legal", "public speaking", "politics"],
  },
  {
    id: 16,
    skills: "writing",
    industry: [
      "academia",
      "literature",
      "journalism",
      "technology",
      "entertainment",
    ],
  },
  {
    id: 17,
    skills: "teaching",
    industry: ["training", "academia", "basic education"],
  },
  {
    id: 18,
    skills: "construction",
    industry: ["civil engineering", "estate development"],
  },
  {
    id: 19,
    skills: "project",
    industry: ["engineering", "technology", "commerce", "entertainment"],
  },
  {
    id: 20,
    skills: "investigative",
    industry: ["police", "legal", "intelligence"],
  },
  {
    id: 21,
    skills: "logical",
    industry: ["legal", "technology", "investigative"],
  },
  {
    id: 22,
    skills: "legal",
    industry: ["legal", "politics", "commercial"],
  },
  {
    id: 23,
    skills: "commercial",
    industry: ["commercial", "manufacturing", "finance", "technology"],
  },
  {
    id: 24,
    skills: "financial",
    industry: ["commercial", "banking", "consulting", "government", "NGO"],
  },
  {
    id: 25,
    skills: "data",
    industry: ["consulting", "finance", "technology", "research", "government"],
  },
  {
    id: 26,
    skills: "handicraft",
    industry: ["woodwork", "construction", "maintenance", "manufacturing"],
  },
  {
    id: 27,
    skills: "laboratory",
    industry: [
      "pharmaceutical",
      "research",
      "engineering",
      "healthcare",
      "manufacturing",
    ],
  },
  {
    id: 28,
    skills: "sales",
    industry: [
      "pharmaceutical",
      "advertising",
      "finance",
      "engineering",
      "technology",
      "manufacturing",
    ],
  },
  {
    id: 29,
    skills: ["dancing", "vocal", "acting"],
    industry: "entertainment",
  },
  {
    id: 30,
    skills: ["driving", "flying", "sailing"],
    industry: "transportation",
  },
];

// //This is just a test 
// function myFunction(){
//   let x = document.getElementById('mySelect').selectedIndex;
//   let y = document.getElementsByName("option");
//   let val = y[x].value;
//   console.log(val);
// }


//A shortened variable declaration for the elements with the IDs skill1, skill2, skill3, skill4 and skill5:

let a = document.getElementById("skill1").selectedIndex;
let b = document.getElementById("skill2").selectedIndex;
let c = document.getElementById("skill3").selectedIndex;
let d = document.getElementById("skill4").selectedIndex;
let e = document.getElementById("skill5").selectedIndex;

//The options of the 5 select menus will state the selected index with this method:
let v = document.getElementsByName("optionsV");
let skill1 = v[a].value;
let w = document.getElementsByName("optionsW");
let skill2 = w[b].value;
let x = document.getElementsByName("optionsX");
let skill3 = x[c].value;
let y = document.getElementsByName("optionsY");
let skill4 = y[d].value;
let z = document.getElementsByName("optionsZ");
let skill5 = z[e].value;


let paraOne = document.getElementById("paraOne");
let paraTwo = document.getElementById("paraTwo");
let paraThree = document.getElementById("paraThree");



//Implement event listener ('change') to output defined data when a menu option is selected:

