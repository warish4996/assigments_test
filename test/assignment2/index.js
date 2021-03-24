let output={}
let input =[
  {
  name: "company",
  type: "IS",
  value: ["Apple", "Google"],
  },
  {
  name: "technology",
  type: "IS",
  value: ["Javascript", "React"],
  },
  {
  name: "technology",
  type: "NOT",
  value: ["Vue", "Angular"],
  },
  {
  name: "company",
  type: "NOT",
  value: ["Microsoft", "Wipro"],
  },
  {
  name: "location",
  type: "NOT",
  value: ["Bangalore", "Chennai"],
  },
  ];

let i;
let company={}
let technology={}
let location={}
for (i = 0; i < input.length; i++) {
if(input[i].name == "company"){
  company[`${input[i].type}`] =input[i].value
}
if(input[i].name == "technology"){
  technology[`${input[i].type}`] =input[i].value
  }
  if(input[i].name == "location"){
    location[`${input[i].type}`] =input[i].value
    }
}
output.company=company
output.technology=technology
output.location=location
console.log(output,"outputttt")
