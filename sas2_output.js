const candidates = []
console.log(candidates)
//1. Add a new candidate
candidates.push({
	cin: "BM123456",
	lastName: "Boushaba",
	firstName: "Soufiane",
	politicalParty: "Independent",
	age: 40,
	voters: []
})
console.log(candidates)
//2. Add several candidates at once
candidates.push(
  {cin: "HH207811",
    lastName: "Gardour",
    firstName: "Nabila",
    politicalParty: "PAM",
    age: "47",
    voters: []},
  {cin: "AP004216",
    lastName: "El Abri",
    firstName: "Amine",
    politicalParty: "USFP",
    age: "45",
    voters: []},
  {cin: "CD679002",
    lastName: "Aboud",
    firstName: "Imane",
    politicalParty: "RNI",
    age: "39",
    voters: []}, 
  {cin: "JK331297",
    lastName: "Benanni",
    firstName: "Saad",
    politicalParty: "PI",
    age: "49",
    voters: []},
  {cin: "FA456700",
    lastName: "Amlyoud",
    firstName: "Maryem",
    politicalParty: "PJD",
    age: "40",
    voters: []}
)
console.log(candidates)