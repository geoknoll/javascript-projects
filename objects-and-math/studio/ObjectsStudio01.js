// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let newCrewArray = [];
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}
console.log(selectRandomEntry);

let idNumbers = [291, 414, 503, 599, 796, 890];
//create while loop here to push this into a new array
//let chosenID =[]
//while ( chosenid.length < 3 )
//let chosenForLaunch = selectRandomEntity(idnumber array)
//if (!chosenID.includes(chosenforLaunch)) **this is where it makes sure it's not repeating
  //chosenID.push(chosenForLaunch),
let i = 0
while (i < 3) {
  console.log(i);
  i++;
}

for ( i = 0; i < 3; i++) {
  console.log(selectRandomEntry(idNumbers));
}

// Code your buildCrewArray function here:
let newCrewArray = [];
console.log(newCrewArray.length);

while (newCrewArray === 3) {
  
}

function buildCrewArray(ids, candidates) { 
  for (i = 0; i < ids.length; i++) {
    console.log(idNumbers[i]);
  }
  for (j = 0; j < candidates.length; j++) {
    console.log(null);
  }
}  
// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

// let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
