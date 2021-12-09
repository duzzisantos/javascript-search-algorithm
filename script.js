//Array of objects containing the job information

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


//Test the outline of the data by iterating using for--of
for (let job of jobs) {
  console.log(job);
}
//This is just a test

const acadLevel = document.getElementById("acadLevel");
const skill1 = document.getElementById("skill1");
const skill2 = document.getElementById("skill2");
const skill3 = document.getElementById("skill3");
const skill4 = document.getElementById("skill4");
const skill5 = document.getElementById("skill5");

//Variables for paragraphs under the <details> and <summary> parent and grandparent nodes
let paraOne = document.getElementById("paraOne")
let paraTwo = document.getElementById("paraTwo")
let paraThree = document.getElementById("paraThree")


//Shortened variable names and what they originally represent: paragraphs 1, 2 and 3 under <details> and <summary> in HTML//
let x = paraOne;
let y = paraTwo;
let z = paraThree;

const skill = [skill1, skill2, skill3, skill4, skill5];
for (let i = 0; i < skill.length; i++) {
  skill[i].addEventListener("change", () => { 
    //these conditionals are permutations of the selected index numbers 1 to 30 in 210 combinations
    if (skill[i].selectedIndex === 1 || skill[i].selectedIndex === 2 || skill[i].selectedIndex === 3 || skill[i].selectedIndex === 4 || skill[i].selectedIndex === 5) {
      x.innerText = `${jobs[0].industry}`; //first set of combinations
      y.innerText = `${jobs[3].industry}`;
      z.innerText = `${jobs[4].industry[0]}, ${jobs[4].industry[3]}, ${jobs[4].industry[5]}`; 
    } else if (skill[i].selectedIndex === 1 || skill[i].selectedIndex === 6 || skill[i].selectedIndex === 7 || skill[i].selectedIndex === 8 || skill[i].selectedIndex === 9) {
      x.innerText = `${jobs[6].industry}`;
      y.innerText= `${jobs[7].industry}`;
      z.innerText  = `${jobs[9].industry}`;
    } else if(skill[i].selectedIndex === 1 || skill[i].selectedIndex === 10 || skill[i].selectedIndex === 11 || skill[i].selectedIndex === 12 || skill[i].selectedIndex === 13){
      x.innerText = `${jobs[1].industry}`;
      y.innerText = `${jobs[11].industry}`;
      z.innerText = `${jobs[12].industry}`;
    }else if(skill[i].selectedIndex === 1 || skill[i].selectedIndex === 14 || skill[i].selectedIndex === 15 || skill[i].selectedIndex === 16 || skill[i].selectedIndex === 17){
      x.innerText = `${jobs[14].industry}`;
      y.innerText = `${jobs[15].industry}`;
      z.innerText  = `${jobs[16].industry}`;
    } else if(skill[i].selectedIndex === 1 || skill[i].selectedIndex === 18 || skill[i].selectedIndex === 19 || skill[i].selectedIndex === 20 || skill[i].selectedIndex === 21){
      x.innerText = `${jobs[18].industry}`;
      y.innerText= `${jobs[19].industry}`;
      z.innerText  = `${jobs[20].industry}`;
    }else if(skill[i].selectedIndex === 1 || skill[i].selectedIndex === 22 || skill[i].selectedIndex === 23 || skill[i].selectedIndex === 24 || skill[i].selectedIndex === 25){
      x.innerText = `${jobs[22].industry}`;
      y.innerText = `${jobs[24].industry}`;
      z.innerText  = `${jobs[25].industry}`;
    } else if(skill[i].selectedIndex === 1 || skill[i].selectedIndex === 26 || skill[i].selectedIndex === 27 || skill[i].selec9edIndex === 28 || skill[i].selectedIndex === 25){
      x.innerText = `${jobs[27].industry}`;
      y.innerText = `${jobs[28].industry}`;
      z.innerText  = `${jobs[29].industry}`;
    } else if(skill[i].selectedIndex === 1 || skill[i].selectedIndex === 30 || skill[i].selectedIndex === 2 || skill[i].selectedIndex === 3 || skill[i].selectedIndex === 4){
      x.innerText = `${jobs[1].industry}`;
      y.innerText = `${jobs[2].industry}`;
      z.innerText  = `${jobs[30].industry}`;
    } else if(skill[i].selectedIndex === 2 || skill[i].selectedIndex === 3 || skill[i].selectedIndex === 4 || skill[i].selectedIndex === 5 || skill[i].selectedIndex === 6){
      x.innerText = `${jobs[0].industry}`;  //2nd set of combinations
      y.innerText = `${jobs[3].industry}`;
      z.innerText  =  `${jobs[4].industry[0]}, ${jobs[4].industry[3]}, ${jobs[4].industry[5]}`;
    } else if(skill[i].selectedIndex === 2 || skill[i].selectedIndex === 7 || skill[i].selectedIndex === 8 || skill[i].selectedIndex === 8 || skill[i].selectedIndex === 9){
      x.innerText = `${jobs[6].industry}`;
      y.innerText = `${jobs[7].industry}`;
      z.innerText =  `${jobs[9].industry[0]}, ${jobs[9].industry[3]}`;
    } else if(skill[i].selectedIndex === 2 || skill[i].selectedIndex === 11 || skill[i].selectedIndex === 12 || skill[i].selectedIndex === 13 || skill[i].selectedIndex === 14){
      x.innerText = `${jobs[0].industry}`;
      y.innerText = `${jobs[12]}`;
      z.innerText  =  `${jobs[13].industry}`;
    } else if(skill[i].selectedIndex === 2 || skill[i].selectedIndex === 15 || skill[i].selectedIndex === 16 || skill[i].selectedIndex === 17 || skill[i].selectedIndex === 18){
      x.innerText = `${jobs[0].industry}`;
      y.innerText = `${jobs[14]}`;
      z.innerText  =  `${jobs[16].industry[0]}, ${jobs[15].industry[4]}`;
    } else if(skill[i].selectedIndex === 2 || skill[i].selectedIndex === 19 || skill[i].selectedIndex === 20 || skill[i].selectedIndex === 21 || skill[i].selectedIndex === 22){
      x.innerText = `${jobs[0].industry}`;
      y.innerText = `${jobs[3]}`;
      z.innerText =  `${jobs[4].industry[0]}, ${jobs[4].industry[3]}, ${jobs[4].industry[5]}`;
    } else if(skill[i].selectedIndex === 2 || skill[i].selectedIndex === 23 || skill[i].selectedIndex === 24 || skill[i].selectedIndex === 25 || skill[i].selectedIndex === 26){
      x.innerText = `${jobs[0].industry}`;
      y.innerText = `${jobs[22]}`;
      z.innerText =  `${jobs[23].industry[0]}, ${jobs[23].industry[3]}, ${jobs[25].industry[1]}`;
    }  else if(skill[i].selectedIndex === 2 || skill[i].selectedIndex === 27 || skill[i].selectedIndex === 28 || skill[i].selectedIndex === 29 || skill[i].selectedIndex === 30){
      x.innerText = `${jobs[0].industry}`;
      y.innerText = `${jobs[26]}`;
      z.innerText =  `${jobs[27].industry[2]}, ${jobs[27].industry[5]}, ${jobs[30].industry}`;
    } else if(skill[i].selectedIndex === 3 || skill[i].selectedIndex === 4 || skill[i].selectedIndex === 5 || skill[i].selectedIndex === 6 || skill[i].selectedIndex === 7){
      x.innerText = `${jobs[0].industry}`; //3rd set of combinations
      y.innerText = `${jobs[5]}`;
      z.innerText =  `${jobs[6].industry}`;
    } else if(skill[i].selectedIndex === 3 || skill[i].selectedIndex === 8 || skill[i].selectedIndex === 9 || skill[i].selectedIndex === 10 || skill[i].selectedIndex === 11){
      x.innerText = `${jobs[7].industry}`;
      y.innerText = `${jobs[8]}`;
      z.innerText =  `${jobs[10].industry}`;
    }  else if(skill[i].selectedIndex === 3 || skill[i].selectedIndex === 12 || skill[i].selectedIndex === 13 || skill[i].selectedIndex === 14 || skill[i].selectedIndex === 15){
      x.innerText = `${jobs[11].industry}, ${jobs[0].industry}`;
      y.innerText = `${jobs[13]}`;
      z.innerText =  `${jobs[14].industry}`;
    }  else if(skill[i].selectedIndex === 3 || skill[i].selectedIndex === 16|| skill[i].selectedIndex === 17 || skill[i].selectedIndex === 18 || skill[i].selectedIndex === 19){
      x.innerText = `${jobs[15].industry}, ${jobs[0].industry}`;
      y.innerText = `${jobs[16]}`;
      z.innerText =  `${jobs[17].industry}`;
    }  else if(skill[i].selectedIndex === 3 || skill[i].selectedIndex === 20 || skill[i].selectedIndex === 21 || skill[i].selectedIndex === 22 || skill[i].selectedIndex === 23){
      x.innerText = `${jobs[19].industry}, ${jobs[0].industry}`;
      y.innerText = `${jobs[20]}, ${jobs[22].industry[1]}`;
      z.innerText =  `${jobs[21].industry}`;
    }  else if(skill[i].selectedIndex === 3 || skill[i].selectedIndex === 24 || skill[i].selectedIndex === 25 || skill[i].selectedIndex === 26 || skill[i].selectedIndex === 27){
      x.innerText = `${jobs[24].industry}, ${jobs[0].industry}`;
      y.innerText = `${jobs[25]}`;
      z.innerText =  `${jobs[27].industry}`;
    }  else if(skill[i].selectedIndex === 3 || skill[i].selectedIndex === 28 || skill[i].selectedIndex === 29 || skill[i].selectedIndex === 30 || skill[i].selectedIndex === 1){
      x.innerText = `${jobs[27].industry}`;
      y.innerText = `${jobs[28]}`;
      z.innerText =  `${jobs[29].industry}, ${jobs[0].industry}`;
    } else if(skill[i].selectedIndex === 4 || skill[i].selectedIndex === 13 || skill[i].selectedIndex === 14 || skill[i].selectedIndex === 15 || skill[i].selectedIndex === 16){
      x.innerText = `${jobs[13].industry}`; //4th set of combinations
      y.innerText = `${jobs[14]}`;
      z.innerText =  `${jobs[15].industry}, ${jobs[16].industry}`;
    } else if(skill[i].selectedIndex === 4 || skill[i].selectedIndex === 17 || skill[i].selectedIndex === 18 || skill[i].selectedIndex === 19 || skill[i].selectedIndex === 20){
      x.innerText = `${jobs[17].industry}`;
      y.innerText = `${jobs[28]}`;
      z.innerText =  `${jobs[19].industry}, ${jobs[20].industry}`;
    } else if(skill[i].selectedIndex === 4 || skill[i].selectedIndex === 21 || skill[i].selectedIndex === 22 || skill[i].selectedIndex === 23 || skill[i].selectedIndex === 24){
      x.innerText = `${jobs[21].industry}`;
      y.innerText = `${jobs[22]}`;
      z.innerText =  `${jobs[24].industry}, ${jobs[0].industry}`;
    } else if(skill[i].selectedIndex === 4 || skill[i].selectedIndex === 25 || skill[i].selectedIndex === 26 || skill[i].selectedIndex === 27 || skill[i].selectedIndex === 28){
      x.innerText = `${jobs[7].industry}`;
      y.innerText = `${jobs[5]}`;
      z.innerText =  `${jobs[6].industry}, ${jobs[0].industry}`;
    } else if(skill[i].selectedIndex === 4 || skill[i].selectedIndex === 29 || skill[i].selectedIndex === 30 || skill[i].selectedIndex === 1 || skill[i].selectedIndex === 2){
      x.innerText = `${jobs[0].industry}`;
      y.innerText = `${jobs[28]}`;
      z.innerText =  `${jobs[29].industry}, ${jobs[1].industry}`;
    } else if(skill[i].selectedIndex === 5 || skill[i].selectedIndex === 6 || skill[i].selectedIndex === 7 || skill[i].selectedIndex === 8 || skill[i].selectedIndex === 9){
      x.innerText = `${jobs[4].industry}`; //5th set of combinations
      y.innerText = `${jobs[5]}`;
      z.innerText =  `${jobs[8].industry}`;
    } else if(skill[i].selectedIndex === 5 || skill[i].selectedIndex === 10 || skill[i].selectedIndex === 11 || skill[i].selectedIndex === 12 || skill[i].selectedIndex === 13){
      x.innerText = `${jobs[4].industry}`;
      y.innerText = `${jobs[10]}`;
      z.innerText =  `${jobs[12].industry}`;
    } else if(skill[i].selectedIndex === 5 || skill[i].selectedIndex === 14 || skill[i].selectedIndex === 15 || skill[i].selectedIndex === 16 || skill[i].selectedIndex === 17){
      x.innerText = `${jobs[4].industry}`;
      y.innerText = `${jobs[13]}`;
      z.innerText =  `${jobs[15].industry}`;
    } else if(skill[i].selectedIndex === 5 || skill[i].selectedIndex === 18 || skill[i].selectedIndex === 19 || skill[i].selectedIndex === 20 || skill[i].selectedIndex === 21){
      x.innerText = `${jobs[4].industry}`;
      y.innerText = `${jobs[19]}, ${jobs[18].industry}`;
      z.innerText =  `${jobs[20].industry}`;
    } else if(skill[i].selectedIndex === 5 || skill[i].selectedIndex === 22 || skill[i].selectedIndex === 23 || skill[i].selectedIndex === 24 || skill[i].selectedIndex === 25){
      x.innerText = `${jobs[4].industry}`;
      y.innerText = `${jobs[21]}, ${jobs[23].industry}`;
      z.innerText =  `${jobs[24].industry}`;
    } else if(skill[i].selectedIndex === 5 || skill[i].selectedIndex === 26 || skill[i].selectedIndex === 27 || skill[i].selectedIndex === 28 || skill[i].selectedIndex === 29){
      x.innerText = `${jobs[4].industry}`;
      y.innerText = `${jobs[25]}, ${jobs[26].industry}`;
      z.innerText =  `${jobs[28].industry}`;
    } else if(skill[i].selectedIndex === 5 || skill[i].selectedIndex === 30 || skill[i].selectedIndex === 1 || skill[i].selectedIndex === 2 || skill[i].selectedIndex === 3){
      x.innerText = `${jobs[0].industry}`;
      y.innerText = `${jobs[1]}, ${jobs[4].industry}`;
      z.innerText =  `${jobs[29].industry}`;
    } else if(skill[i].selectedIndex === 6 || skill[i].selectedIndex === 7 || skill[i].selectedIndex === 8 || skill[i].selectedIndex === 9 || skill[i].selectedIndex === 10){
      x.innerText = `${jobs[5].industry}`; //6th set of combinations
      y.innerText = `${jobs[7].industry}`;
      z.innerText =  `${jobs[9].industry}`;
    } else if(skill[i].selectedIndex === 6 || skill[i].selectedIndex === 11 || skill[i].selectedIndex === 12 || skill[i].selectedIndex === 13 || skill[i].selectedIndex === 14){
      x.innerText = `${jobs[5].industry}`;
      y.innerText = `${jobs[10].industry}`;
      z.innerText =  `${jobs[13].industry}`;
    } else if(skill[i].selectedIndex === 6 || skill[i].selectedIndex === 15 || skill[i].selectedIndex === 16 || skill[i].selectedIndex === 17 || skill[i].selectedIndex === 18){
      x.innerText = `${jobs[5].industry}`;
      y.innerText = `${jobs[16].industry}`;
      z.innerText =  `${jobs[17].industry}`;
    } else if(skill[i].selectedIndex === 6 || skill[i].selectedIndex === 19 || skill[i].selectedIndex === 20 || skill[i].selectedIndex === 21 || skill[i].selectedIndex === 22){
      x.innerText = `${jobs[5].industry}`;
      y.innerText = `${jobs[18].industry}`;
      z.innerText =  `${jobs[19].industry}`;
    } else if(skill[i].selectedIndex === 6 || skill[i].selectedIndex === 23 || skill[i].selectedIndex === 24 || skill[i].selectedIndex === 25 || skill[i].selectedIndex === 26){
      x.innerText = `${jobs[5].industry}`;
      y.innerText = `${jobs[22].industry}`;
      z.innerText =  `${jobs[24].industry}, ${jobs[25].industry[0]}`;
    } else if(skill[i].selectedIndex === 6 || skill[i].selectedIndex === 27 || skill[i].selectedIndex === 28 || skill[i].selectedIndex === 29 || skill[i].selectedIndex === 30){
      x.innerText = `${jobs[5].industry}`;
      y.innerText = `${jobs[26].industry}`;
      z.innerText =  `${jobs[29].industry}, ${jobs[30].industry}`;
    } else if(skill[i].selectedIndex === 6 || skill[i].selectedIndex === 1 || skill[i].selectedIndex === 2 || skill[i].selectedIndex === 3 || skill[i].selectedIndex === 4){
      x.innerText = `${jobs[5].industry}`;
      y.innerText = `${jobs[0].industry}`;
      z.innerText =  `${jobs[1].industry}`;
    } else if(skill[i].selectedIndex === 7 || skill[i].selectedIndex === 8 || skill[i].selectedIndex === 9 || skill[i].selectedIndex === 10 || skill[i].selectedIndex === 11){
      x.innerText = `${jobs[6].industry}`; //7th set of combinations
      y.innerText = `${jobs[7].industry[0]}, ${jobs[8]}`;
      z.innerText =  `${jobs[10].industry}`;
    } else if(skill[i].selectedIndex === 7 || skill[i].selectedIndex === 12 || skill[i].selectedIndex === 13 || skill[i].selectedIndex === 14 || skill[i].selectedIndex === 15){
      x.innerText = `${jobs[6].industry}`;
      y.innerText = `${jobs[11].industry}`;
      z.innerText =  `${jobs[14].industry}`;
    } else if(skill[i].selectedIndex === 7 || skill[i].selectedIndex === 16 || skill[i].selectedIndex === 17 || skill[i].selectedIndex === 18 || skill[i].selectedIndex === 19){
      x.innerText = `${jobs[6].industry}`;
      y.innerText = `${jobs[15].industry}`;
      z.innerText =  `${jobs[16].industry[0]}, ${jobs[17].industry[0]}, ${jobs[18].industry[0]} `;
    } else if(skill[i].selectedIndex === 7 || skill[i].selectedIndex === 20 || skill[i].selectedIndex === 21 || skill[i].selectedIndex === 22 || skill[i].selectedIndex === 23){
      x.innerText = `${jobs[13].industry}`;
      y.innerText = `${jobs[19].industry}`;
      z.innerText =  `${jobs[22].industry}`;
    } else if(skill[i].selectedIndex === 7 || skill[i].selectedIndex === 24 || skill[i].selectedIndex === 25 || skill[i].selectedIndex === 26 || skill[i].selectedIndex === 27){
      x.innerText = `${jobs[23].industry}`;
      y.innerText = `${jobs[24].industry}`;
      z.innerText =  `${jobs[26].industry}`;
    } else if(skill[i].selectedIndex === 7 || skill[i].selectedIndex === 28 || skill[i].selectedIndex === 29 || skill[i].selectedIndex === 30 || skill[i].selectedIndex === 1){
      x.innerText = `${jobs[27].industry}`;
      y.innerText = `${jobs[28].industry}`;
      z.innerText =  `${jobs[29].industry}, ${jobs[1].industry}`;
    } else if(skill[i].selectedIndex === 7 || skill[i].selectedIndex === 2 || skill[i].selectedIndex === 3 || skill[i].selectedIndex === 4 || skill[i].selectedIndex === 5){
      x.innerText = `${jobs[6].industry}`;
      y.innerText = `${jobs[0].industry}`;
      z.innerText =  `${jobs[4].industry}`;
    } else if(skill[i].selectedIndex === 8 || skill[i].selectedIndex === 9 || skill[i].selectedIndex === 10 || skill[i].selectedIndex === 11 || skill[i].selectedIndex === 12){
      x.innerText = `${jobs[7].industry}`; //8th set of combinations
      y.innerText = `${jobs[8].industry}`;
      z.innerText =  `${jobs[10].industry}`;
    } else if(skill[i].selectedIndex === 8 || skill[i].selectedIndex === 13 || skill[i].selectedIndex === 14 || skill[i].selectedIndex === 15 || skill[i].selectedIndex === 16){
      x.innerText = `${jobs[13].industry}`;
      y.innerText = `${jobs[12].industry}`;
      z.innerText =  `${jobs[14].industry[0]}, ${jobs[15].industry}`;
    } else if(skill[i].selectedIndex === 8 || skill[i].selectedIndex === 17 || skill[i].selectedIndex === 18 || skill[i].selectedIndex === 19 || skill[i].selectedIndex === 20){
      x.innerText = `${jobs[7].industry}`;
      y.innerText = `${jobs[16].industry}, ${jobs[17].industry}`;
      z.innerText =  `${jobs[19].industry}`;
    } else if(skill[i].selectedIndex === 8 || skill[i].selectedIndex === 21 || skill[i].selectedIndex === 22 || skill[i].selectedIndex === 23 || skill[i].selectedIndex === 24){
      x.innerText = `${jobs[7].industry}`;
      y.innerText = `${jobs[20].industry}, ${jobs[21].industry[1]}`;
      z.innerText =  `${jobs[23].industry}`;
    } else if(skill[i].selectedIndex === 8 || skill[i].selectedIndex === 25 || skill[i].selectedIndex === 26 || skill[i].selectedIndex === 27 || skill[i].selectedIndex === 28){
      x.innerText = `${jobs[7].industry}`;
      y.innerText = `${jobs[24].industry}, ${jobs[25].industry[0]}, ${jobs[25].industry[1]}`;
      z.innerText =  `${jobs[26].industry}`;
    } else if(skill[i].selectedIndex === 8 || skill[i].selectedIndex === 29 || skill[i].selectedIndex === 30 || skill[i].selectedIndex === 1 || skill[i].selectedIndex === 2){
      x.innerText = `${jobs[7].industry}`;
      y.innerText = `${jobs[28].industry}, ${jobs[29].industry}`;
      z.innerText =  `${jobs[1].industry}`;
    } else if(skill[i].selectedIndex === 8 || skill[i].selectedIndex === 3 || skill[i].selectedIndex === 4 || skill[i].selectedIndex === 5 || skill[i].selectedIndex === 6){
      x.innerText = `${jobs[7].industry}`;
      y.innerText = `${jobs[0].industry}, ${jobs[4].industry}`;
      z.innerText =  `${jobs[5].industry}`;
    } else if(skill[i].selectedIndex === 9 || skill[i].selectedIndex === 10 || skill[i].selectedIndex === 11 || skill[i].selectedIndex === 12 || skill[i].selectedIndex === 13){
      x.innerText = `${jobs[8].industry}`; //9th set of combinations
      y.innerText = `${jobs[10].industry}`;
      z.innerText =  `${jobs[12].industry}`;
    } else if(skill[i].selectedIndex === 9 || skill[i].selectedIndex === 14 || skill[i].selectedIndex === 15 || skill[i].selectedIndex === 16 || skill[i].selectedIndex === 17){
      x.innerText = `${jobs[8].industry}`;
      y.innerText = `${jobs[13].industry}, ${jobs[14].industry[1]}`;
      z.innerText =  `${jobs[15].industry}, ${jobs[17].industry[1]}`;
    } else if(skill[i].selectedIndex === 9 || skill[i].selectedIndex === 18 || skill[i].selectedIndex === 19 || skill[i].selectedIndex === 20 || skill[i].selectedIndex === 21){
      x.innerText = `${jobs[8].industry}`;
      y.innerText = `${jobs[18].industry}, ${jobs[19].industry}`;
      z.innerText =  `${jobs[20].industry}`;
    } else if(skill[i].selectedIndex === 9 || skill[i].selectedIndex === 22 || skill[i].selectedIndex === 23 || skill[i].selectedIndex === 24 || skill[i].selectedIndex === 25){
      x.innerText = `${jobs[8].industry}`;
      y.innerText = `${jobs[21].industry[0]}, ${jobs[22].industry}`;
      z.innerText =  `${jobs[24].industry}`;
    } else if(skill[i].selectedIndex === 9 || skill[i].selectedIndex === 26 || skill[i].selectedIndex === 27 || skill[i].selectedIndex === 28 || skill[i].selectedIndex === 29){
      x.innerText = `${jobs[8].industry}`;
      y.innerText = `${jobs[25].industry[0]}, ${jobs[26].industry}`;
      z.innerText =  `${jobs[27].industry[1]}, ${jobs[28].industry}`;
    } else if(skill[i].selectedIndex === 9 || skill[i].selectedIndex === 30 || skill[i].selectedIndex === 1 || skill[i].selectedIndex === 2 || skill[i].selectedIndex === 3){
      x.innerText = `${jobs[8].industry}`;
      y.innerText = `${jobs[29].industry}`;
      z.innerText =  `${jobs[1].industry}`;
    } else if(skill[i].selectedIndex === 9 || skill[i].selectedIndex === 4 || skill[i].selectedIndex === 5 || skill[i].selectedIndex === 6 || skill[i].selectedIndex === 7){
      x.innerText = `${jobs[8].industry}, ${jobs[1].industry}`;
      y.innerText = `${jobs[4].industry}`;
      z.innerText =  `${jobs[5].industry}`;
    } else if(skill[i].selectedIndex === 10 || skill[i].selectedIndex === 11 || skill[i].selectedIndex === 12 || skill[i].selectedIndex === 13 || skill[i].selectedIndex === 14){
      x.innerText = `${jobs[9].industry}`; //10th set of combinations
      y.innerText = `${jobs[10].industry}`;
      z.innerText =  `${jobs[13].industry}`;
    } else if(skill[i].selectedIndex === 10 || skill[i].selectedIndex === 15 || skill[i].selectedIndex === 16 || skill[i].selectedIndex === 17 || skill[i].selectedIndex === 18){
      x.innerText = `${jobs[9].industry}`;
      y.innerText = `${jobs[14].industry}, ${jobs[16].industry[1]}`;
      z.innerText =  `${jobs[15].industry}, ${jobs[17].industry}`;
    } else if(skill[i].selectedIndex === 10 || skill[i].selectedIndex === 19 || skill[i].selectedIndex === 20 || skill[i].selectedIndex === 21 || skill[i].selectedIndex === 22){
      x.innerText = `${jobs[9].industry}`;
      y.innerText = `${jobs[18].industry}, ${jobs[19].industry[1]}`;
      z.innerText =  `${jobs[21].industry}`;
    } else if(skill[i].selectedIndex === 10 || skill[i].selectedIndex === 23 || skill[i].selectedIndex === 24 || skill[i].selectedIndex === 25 || skill[i].selectedIndex === 26){
      x.innerText = `${jobs[9].industry}`;
      y.innerText = `${jobs[22].industry}`;
      z.innerText =  `${jobs[25].industry}`;
    } else if(skill[i].selectedIndex === 10 || skill[i].selectedIndex === 27 || skill[i].selectedIndex === 28 || skill[i].selectedIndex === 29 || skill[i].selectedIndex === 30){
      x.innerText = `${jobs[9].industry}`;
      y.innerText = `${jobs[26].industry}`;
      z.innerText =  `${jobs[28].industry},${jobs[29].industry} `;
    } else if(skill[i].selectedIndex === 10 || skill[i].selectedIndex === 1 || skill[i].selectedIndex === 2 || skill[i].selectedIndex === 3 || skill[i].selectedIndex === 4){
      x.innerText = `${jobs[9].industry}`;
      y.innerText = `${jobs[0].industry}`;
      z.innerText =  `${jobs[1].industry}`;
    } else if(skill[i].selectedIndex === 10 || skill[i].selectedIndex === 5 || skill[i].selectedIndex === 6 || skill[i].selectedIndex === 7 || skill[i].selectedIndex === 8){
      x.innerText = `${jobs[4].industry}`;
      y.innerText = `${jobs[5].industry}`;
      z.innerText =  `${jobs[8].industry}`;
    } else if(skill[i].selectedIndex === 11 || skill[i].selectedIndex === 12 || skill[i].selectedIndex === 13 || skill[i].selectedIndex === 14 || skill[i].selectedIndex === 15){
      x.innerText = `${jobs[10].industry}`;
      y.innerText = `${jobs[13].industry}`;
      z.innerText =  `${jobs[14].industry}`;
    } else if(skill[i].selectedIndex === 11 || skill[i].selectedIndex === 16 || skill[i].selectedIndex === 17 || skill[i].selectedIndex === 18 || skill[i].selectedIndex === 19){
      x.innerText = `${jobs[10].industry}`;
      y.innerText = `${jobs[15].industry}`;
      z.innerText =  `${jobs[17].industry}, ${jobs[18].industry} `;
    } else if(skill[i].selectedIndex === 11 || skill[i].selectedIndex === 20 || skill[i].selectedIndex === 21 || skill[i].selectedIndex === 22 || skill[i].selectedIndex === 23){
      x.innerText = `${jobs[10].industry}`;
      y.innerText = `${jobs[19].industry}`;
      z.innerText =  `${jobs[20].industry}, ${jobs[22].industry} `;
    } else if(skill[i].selectedIndex === 11 || skill[i].selectedIndex === 24 || skill[i].selectedIndex === 25 || skill[i].selectedIndex === 26 || skill[i].selectedIndex === 27){
      x.innerText = `${jobs[10].industry}`;
      y.innerText = `${jobs[23].industry}`;
      z.innerText =  `${jobs[25].industry}`;
    } else if(skill[i].selectedIndex === 11 || skill[i].selectedIndex === 28 || skill[i].selectedIndex === 29 || skill[i].selectedIndex === 30 || skill[i].selectedIndex === 1){
      x.innerText = `${jobs[10].industry}`;
      y.innerText = `${jobs[26].industry}`;
      z.innerText =  `${jobs[29].industry}, ${jobs[1].industry} `;
    } else if(skill[i].selectedIndex === 11 || skill[i].selectedIndex === 2 || skill[i].selectedIndex === 3 || skill[i].selectedIndex === 4 || skill[i].selectedIndex === 5){
      x.innerText = `${jobs[10].industry}`;
      y.innerText = `${jobs[1].industry}`;
      z.innerText =  `${jobs[4].industry}`;
    } else if(skill[i].selectedIndex === 11 || skill[i].selectedIndex === 6 || skill[i].selectedIndex === 7 || skill[i].selectedIndex === 8 || skill[i].selectedIndex === 9){
      x.innerText = `${jobs[10].industry}`;
      y.innerText = `${jobs[5].industry}`;
      z.innerText =  `${jobs[7].industry}, ${jobs[8].industry} `;
    } else if(skill[i].selectedIndex === 12 || skill[i].selectedIndex === 13 || skill[i].selectedIndex === 14 || skill[i].selectedIndex === 15 || skill[i].selectedIndex === 16){
      x.innerText = `${jobs[11].industry}`;
      y.innerText = `${jobs[13].industry}`;
      z.innerText =  `${jobs[15].industry}`;
    } else if(skill[i].selectedIndex === 12 || skill[i].selectedIndex === 17 || skill[i].selectedIndex === 18 || skill[i].selectedIndex === 19 || skill[i].selectedIndex === 20){
      x.innerText = `${jobs[11].industry}`;
      y.innerText = `${jobs[16].industry}, ${jobs[18].industry}`;
      z.innerText =  `${jobs[19].industry}`;
    } else if(skill[i].selectedIndex === 12 || skill[i].selectedIndex === 21 || skill[i].selectedIndex === 22 || skill[i].selectedIndex === 23 || skill[i].selectedIndex === 24){
      x.innerText = `${jobs[11].industry}`;
      y.innerText = `${jobs[20].industry}, ${jobs[21].industry}`;
      z.innerText =  `${jobs[23].industry}`;
    } else if(skill[i].selectedIndex === 12 || skill[i].selectedIndex === 25 || skill[i].selectedIndex === 26 || skill[i].selectedIndex === 27 || skill[i].selectedIndex === 28){
      x.innerText = `${jobs[11].industry}`;
      y.innerText = `${jobs[25].industry[1]}`;
      z.innerText =  ` ${jobs[27].industry}, ${jobs[28].industry}`;
    } else if(skill[i].selectedIndex === 12 || skill[i].selectedIndex === 29 || skill[i].selectedIndex === 30 || skill[i].selectedIndex === 1 || skill[i].selectedIndex === 2){
      x.innerText = `${jobs[11].industry}`;
      y.innerText = `${jobs[28].industry[1]}`;
      z.innerText =  ` ${jobs[29].industry}, ${jobs[0].industry}`;
    } else if(skill[i].selectedIndex === 12 || skill[i].selectedIndex === 3 || skill[i].selectedIndex === 4 || skill[i].selectedIndex === 5 || skill[i].selectedIndex === 6){
      x.innerText = `${jobs[11].industry}`;
      y.innerText = `${jobs[0].industry}`;
      z.innerText =  ` ${jobs[4].industry}`;
    } else if(skill[i].selectedIndex === 12 || skill[i].selectedIndex === 7 || skill[i].selectedIndex === 8 || skill[i].selectedIndex === 9 || skill[i].selectedIndex === 10){
      x.innerText = `${jobs[11].industry}`;
      y.innerText = `${jobs[6].industry}`;
      z.innerText =  ` ${jobs[9].industry}`;
    } //The 13th set of combos go in here...
  });
}
