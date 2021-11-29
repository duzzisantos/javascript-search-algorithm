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

//Test the outline of the data by iterating using for--of
for (let job of jobs) {
  console.log(job);
}
//This is just a test

let acadLevel = document.getElementById("acadLevel");
let skill1 = document.getElementById("skill1");
let skill2 = document.getElementById("skill2");
let skill3 = document.getElementById("skill3");
let skill4 = document.getElementById("skill4");

skill1.addEventListener("change", () =>{
    if(skill1.selectedIndex === 1 && acadLevel.selectedIndex === 1){
        console.log("This actually works!");
    }
})
