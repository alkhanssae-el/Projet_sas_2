console.log("Candidates: ")
//add several candidates
const candidates = [
  { cin: "AB123456", lastName: "Boushaba", firstName: "Soufiane", politicalParty: "Independent", age: 40,
    voters: [] },
  { cin: "CD234567", lastName: "El Amrani", firstName: "Fatima Zahra", politicalParty: "PJD", age: 35,
    voters: ["AB123456", "GH456789", "KL678901"] },
  { cin: "EF345678", lastName: "Chraibi", firstName: "Younes", politicalParty: "RNI", age: 45,
    voters: [] },
  { cin: "GH456789", lastName: "Bennani", firstName: "Salma", politicalParty: "PAM", age: 29,
    voters: [] },
  { cin: "IJ567890", lastName: "Ouahbi", firstName: "Karim", politicalParty: "Istiqlal", age: 52,
    voters: [] },
  { cin: "KL678901", lastName: "Ziani", firstName: "Nadia", politicalParty: "Independent", age: 33,
    voters: [] },
  { cin: "MN789012", lastName: "Tazi", firstName: "Hamza", politicalParty: "USFP", age: 60,
    voters: [] },
  { cin: "OP890123", lastName: "Idrissi", firstName: "Meryem", politicalParty: "PJD", age: 27,
    voters: [] },
  { cin: "QR901234", lastName: "Berrada", firstName: "Omar", politicalParty: "RNI", age: 38,
    voters: [] },
  { cin: "ST012345", lastName: "Fassi", firstName: "Khadija", politicalParty: "PAM", age: 31,
    voters: [] },
];
//console.log(candidates)
function candidateAdd(cin, lastName, firstName, politicalParty, age, voters){
	candidates.push({cin: cin , lastName: lastName, firstName: firstName, politicalParty: politicalParty, age: age, voters: voters})
}

let cinData = prompt("Please enter your cin: ");
let lastNameData = prompt("Please enter your last name: ");
let firstNameData = prompt("Please enter your first name: ");
let politicalPartyData = prompt("Please enter your political party: ");
let yearOfBirthData = parseInt(prompt("Please enter your year of birth: "));
let ageData = 2026 - yearOfBirthData
let votes = []

candidateAdd(cinData, lastNameData, firstNameData, politicalPartyData, ageData, votes)
console.log(candidates)