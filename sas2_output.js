const candidates = []
//console.log(candidates)
//1;2. Add a new candidate
function candidateAdd(cin, lastName, firstName, politicalParty, age, voters){
	candidates.push({cin: cin , lastName: lastName, firstName: firstName, politicalParty: politicalParty, age: age, voters: voters})
}
candidateAdd("ST012345", "Fassi", "Khadija", "PAM", 31, "[]")
//console.log(candidates)