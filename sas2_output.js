const candidates = [
  { cin: "AB123456", lastName: "Boushaba", firstName: "Soufiane", politicalParty: "Independent", age: 40, voters: [] },
  { cin: "CD234567", lastName: "El Amrani", firstName: "Fatima Zahra", politicalParty: "PJD", age: 35, voters: ["AB123456", "GH456789", "KL678901"] },
  { cin: "EF345678", lastName: "Chraibi", firstName: "Younes", politicalParty: "RNI", age: 45, voters: [] },
  { cin: "GH456789", lastName: "Bennani", firstName: "Salma", politicalParty: "PAM", age: 29, voters: ["IJ567890", "HH001044", "PQ334180"] },
  { cin: "IJ567890", lastName: "Ouahbi", firstName: "Karim", politicalParty: "Istiqlal", age: 52, voters: [] },
  { cin: "KL678901", lastName: "Ziani", firstName: "Nadia", politicalParty: "Independent", age: 33, voters: [] },
  { cin: "MN789012", lastName: "Tazi", firstName: "Hamza", politicalParty: "USFP", age: 60, voters: ["QR901234", "HH001200"] },
  { cin: "OP890123", lastName: "Idrissi", firstName: "Meryem", politicalParty: "PJD", age: 27, voters: [] },
  { cin: "QR901234", lastName: "Berrada", firstName: "Omar", politicalParty: "RNI", age: 38, voters: ["CD234567", "EF345678", "MN789012", "JK343400", "OP334100"] },
  { cin: "ST012345", lastName: "Fassi", firstName: "Khadija", politicalParty: "PAM", age: 31, voters: ["HH676767"] },
];
//add a candidate

function candidateAdd(cin, lastName, firstName, politicalParty, age, voters){
	candidates.push({cin: cin , lastName: lastName, firstName: firstName, politicalParty: politicalParty, age: age, voters: voters})
}

function promptAdd(){
let cinData = prompt("Enter your cin: ");
let lastNameData = prompt("Enter your last name: ");
let firstNameData = prompt("Enter your first name: ");
let politicalPartyData = prompt("Enter your political party: ");
let yearOfBirthData = parseInt(prompt("Enter your year of birth: "));
let ageData = 2026 - yearOfBirthData
let votes = []

  candidateAdd(cinData, lastNameData, firstNameData, politicalPartyData, ageData, votes);
}

promptAdd()
console.log(candidates);
//Add several candidates
function addSeveralCandidates(){
  let promptSeveralAdd = prompt("Enter the number of candidates you want to add: ");
  let i = 1
  while (i <= promptSeveralAdd){
    promptAdd()
    i++
  }
}
addSeveralCandidates()
console.log(candidates)
//Display the list of candidates
//1
function BubbleSort(candidates){
  for(let i = 0; i < candidates.length-1 ;i++){
    for(let j=0; j < candidates.length-1-i;j++){
      if( candidates[j].voters.length < candidates[j+1].voters.length ){
        let temp = candidates[j]
        candidates[j] = candidates[j+1]
        candidates[j+1] = temp
      }
    }
  }
  return candidates;
}
console.log(BubbleSort(candidates))
BubbleSort(candidates)
//2
function pickPoliticalParty(){
let promptPickPoliticalParty = prompt("Enter the political party you want to see:")
for (let i = 0 ; i < candidates.length ; i++){
  let pick = candidates[i].politicalParty
    if ( promptPickPoliticalParty === pick ){
      console.log(candidates[i])
    }
  }
}
pickPoliticalParty(candidates)
//Vote for a candidate
function voteForACandidate(){
let promptEligibilityCheck = prompt("Enter your cin :")
for (let i = 0 ; i < candidates.length ; i++){
  for (let j = 0 ; j < candidates[i].voters.length ; j++){
    if ( promptEligibilityCheck === candidates[i].voters[j]){
      console.log("You have already voted and you are not allowed to change your vote or vote again.")
    } else {
      let promptVoteForACandidate = prompt("Enter your cin :")
    }
    let promptWhichCandidate = prompt("Enter your candidate's cin: ")
    
      candidates[i].voters[j].push(promptVoteForACandidate)
      }
  }
}
}
voteForACandidate(candidates)