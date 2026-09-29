const prompt = require("prompt-sync")();

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

let running = true;

while (running) {
  console.log(`
************************************************************
          MOROCCAN ELECTION MANAGEMENT PROGRAM
************************************************************

1. Add a new candidate
2. Add several candidates at once
3. Display the list of candidates
4. Vote for a candidate
5. Edit a candidate's information
6. Delete a candidate
7. Search for candidates
8. Election statistics
9. Exit
`);

  let ask = Number(prompt("PLEASE SELECT AN OPTION FROM THE MENU (1-9): "));

  if (ask === 9) {
    console.log(`
************************************************************
Thank you for using the Election Management Program.
************************************************************
`);
    running = false;
  } else if (ask === 1) {
    promptAdd();
  } else if (ask === 2) {
    addSeveralCandidates();
  } else if (ask === 3) {
    displayCandidates();
  } else if (ask === 4) {
    voteForACandidate();
  } else if (ask === 5) {
    editCandidatesInfos();
  } else if (ask === 6) {
    deleteCandidate();
  } else if (ask === 7) {
    searchCandidate();
  } else if (ask === 8) {
    showStatistics();
  } else {
    console.log("Invalid option. Please choose a number from 1 to 9.");
  }
}

//add a candidate

function candidateAdd(cin, lastName, firstName, politicalParty, age, voters) {
	candidates.push({cin: cin , lastName: lastName, firstName: firstName, politicalParty: politicalParty, age: age, voters: voters})
}

function promptAdd() {
  console.log(`
============================================================
                    ADD A CANDIDATE
============================================================
`);

let cinData = prompt ("Enter your CIN: ");
  let existingCandidate = candidates.find(function(candidate) {
  return candidate.cin === cinData;
  });
  if (existingCandidate) {
  console.log("This CIN already exists.");
  return;
  }
let lastNameData = prompt("Enter your last name: ");
let firstNameData = prompt("Enter your first name: ");
let politicalPartyData = prompt("Enter your political party: ");
let ageData;

while (true) {
  ageData = Number(prompt("Enter your age: "));
  if (isNaN(ageData)) {
    console.log("Please enter a valid number.");
    } 
    else if (ageData < 18) {
      console.log("Invalid age. Candidate must be at least 18 years old.");
      return; 
    } 
    else {
      break; 
    }
  }
  let votes = [];

  candidateAdd(cinData, lastNameData, firstNameData, politicalPartyData, ageData, votes);
  console.log("Added successfully.");
}

//add several candidates at once

function addSeveralCandidates() {
  console.log(`
============================================================
                ADD SEVERAL CANDIDATES
============================================================
`);

  let promptSeveralAdd;

  while (true) {
    promptSeveralAdd = Number(prompt("Enter the number of candidates you want to add: "));

    if (isNaN(promptSeveralAdd)) {
      console.log("Please enter a valid number.");
    } else if (promptSeveralAdd <= 0) {
      console.log("Please enter a number greater than 0.");
    } else {
      break;
    }
  }

  let i = 1;

  while (i <= promptSeveralAdd) {
    console.log(`Adding candidate ${i} of ${promptSeveralAdd}`);
    promptAdd();
    i++;
  }

  console.log("All candidates have been added successfully.");
}

// display candidates

function displayCandidates() {

  // 1
  function BubbleSort(candidates) {
    console.log(`
============================================================
                 LIST OF CANDIDATES
============================================================
`);
    for (let i = 0; i < candidates.length - 1; i++) {
      for (let j = 0; j < candidates.length - 1 - i; j++) {
        if (candidates[j].voters.length < candidates[j + 1].voters.length) {
          let temp = candidates[j];
          candidates[j] = candidates[j + 1];
          candidates[j + 1] = temp;
        }
      }
    }
    return candidates;
  }

  console.log(BubbleSort(candidates));


  // 2
  function pickPoliticalParty() {
    console.log(`
============================================================
   LIST OF CANDIDATES FROM THE POLITICAL PARTY YOU PICKED
============================================================
`);
    
  let promptPickPoliticalParty = prompt("Enter the political party you want to see:")
  let found = false
    for (let i = 0 ; i < candidates.length ; i++){
    let pick = candidates[i].politicalParty

    if (promptPickPoliticalParty === pick){
      console.log(candidates[i])
      found = true
    }
  }

  if (found === false){
    console.log("This political party doesn't exist.")
    return
  }
}
  pickPoliticalParty();
}

//vote for a candidate

function voteForACandidate() {
  console.log(`
============================================================
                   VOTE FOR A CANDIDATE
============================================================
`);

  let promptUserCin = prompt("Enter your CIN: ");
  
  for (let i = 0 ; i < candidates.length ; i++){
    if (candidates[i].voters.includes(promptUserCin)){
      console.log("You have already voted and you are not allowed to change your vote or vote again.");
      return;
    }
  }
  
  let promptWhichCandidate = prompt("Enter your candidate's CIN: ");
  
  for (let i = 0; i < candidates.length; i++) {
    if (promptWhichCandidate === candidates[i].cin) {
      candidates[i].voters.push(promptUserCin);
      console.log("Your vote has been recorded.");
      return;
    }
  }
   console.log("Candidate not found.");
 }

// edit candidate information

function editCandidatesInfos(){
  console.log(`
============================================================
              EDIT CANDIDATE INFORMATION
============================================================
`);

  let promptPickEdit = prompt("Pick whether you want to edit a candidate's political party or age: ");

  while (promptPickEdit !== "political party" && promptPickEdit !== "age"){
    console.log("Please pick one of the two options.");
    promptPickEdit = prompt("Pick whether you want to edit a candidate's political party or age: ");
  }


  if (promptPickEdit === "political party"){

    let promptFindCandidatesPoliticalParty = prompt("Enter the candidate's CIN whose political party you want to change: ");
    let found = false;

    for (let i = 0; i < candidates.length; i++){

      if (promptFindCandidatesPoliticalParty === candidates[i].cin){

        let promptEditPoliticalParty = prompt("Enter the candidate's new political party: ");
        candidates[i].politicalParty = promptEditPoliticalParty;

        found = true;
        return;
      }
    }

    if (found === false){
      console.log("This CIN doesn't exist.");
      return;
    }


  } else if (promptPickEdit === "age"){

    let promptFindCandidatesAge = prompt("Enter the candidate's CIN whose age you want to change: ");
    let found = false;

    for (let i = 0; i < candidates.length; i++){

      if (promptFindCandidatesAge === candidates[i].cin){

        found = true;

        let promptEditAge = prompt("Enter the candidate's new age: ");

        while (isNaN(promptEditAge)){
          promptEditAge = prompt("Please enter a valid number for the age: ");
        }

        if (Number(promptEditAge) === candidates[i].age){
          console.log("The new age is the same as the current age.");
          return;
        }

        candidates[i].age = Number(promptEditAge);

        return;
      }
    }

    if (found === false){
      console.log("This CIN doesn't exist.");
      return;
    }
  }
}

// delete candidate

function deleteCandidate() {
  console.log(`
============================================================
                  DELETE A CANDIDATE
============================================================
`);

  let promptDeleteCandidate = prompt(
    "Enter your CIN to withdraw your candidacy: "
  )
    let found = false
  for (let i = 0 ; i < candidates.length ; i++){
    if (promptDeleteCandidate === candidates[i].cin){
      found = true
      candidates.splice(i, 1)
      console.log("Your candidacy has been withdrawn.");
      break
    }
  }
  if (!found) {
    console.log(
      "Failed to withdraw, you were not found among the candidates for this election."
    )
  }
}

// search candidate 

function searchCandidate() {
  console.log(`
============================================================
                    SEARCH CANDIDATES
============================================================
`);
const lastName = prompt("Please enter the candidate's last name:")
      
  const foundCandidates = candidates.filter(function(candidate){
        return candidate.lastName.toLowerCase() === lastName.toLowerCase()
    });

    if (foundCandidates.length === 0){
        console.log("No candidate found.");
        return;
    }

    foundCandidates.forEach(function(candidate){
        console.log("Cin:", candidate.cin);
        console.log("Last name:", candidate.lastName);
        console.log("First name:", candidate.firstName);
        console.log("Political party:", candidate.politicalParty);
        console.log("Age:", candidate.age);
        console.log("Number of votes:", candidate.voters.length);
    });
}

//election statistics

function showStatistics(){
   console.log(`
============================================================
                  ELECTION STATISTICS
============================================================
`);
//1
function showCandidatesNumber(){
  return candidates.length;
}
console.log("Total number of candidates: ", showCandidatesNumber());
console.log("            ");
//2
let totalVotes = 0
for ( let i = 0 ; i < candidates.length ; i++ ){
  totalVotes += candidates[i].voters.length
}
console.log("Total votes cast in the entire election: ", totalVotes);
console.log("          ");
//3
function showTop3Candidates(){
  for ( let i = 0 ; i < candidates.length ; i++){
    candidates[i].voteCount = candidates[i].voters.length
  }
  console.log("Top 3 candidates with the most votes: ")
  for (let i = 0 ; i < candidates.length ; i++){
        for (let j = i + 1 ; j < candidates.length ; j++){
          if (candidates[j].voteCount > candidates[i].voteCount){
            let temp = candidates[i]
            candidates[i] = candidates[j]
            candidates[j] = temp
          }
        }
  }
  for (let i = 0 ; i < 3 ; i++){
    console.log((i + 1) + ". " + candidates[i].firstName + " " + candidates[i].lastName + " - " + candidates[i].voteCount + " votes")
  }
}
showTop3Candidates();
console.log("          ");
//4
function showCandidatesPerParty(){
  console.log("The number of candidates per political party:")
  let parties = {}
    for (let i = 0 ; i < candidates.length ; i++){
      let party = candidates[i].politicalParty
        if (parties[party] === undefined){
          parties[party] = 1
        } else {
          parties[party]++
        }
    }
  for (let party in parties){
    console.log(party + " : " + parties[party] + " candidates");
  }
}
showCandidatesPerParty();
}