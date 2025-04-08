const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function hasCapsInMiddle(word) {
  let wordAsArray = word.match(/[\w\s]/g)
  //console.log(wordAsArray, index)
  if (wordAsArray === null) {
    return true
  }
  for (let index=1; index < wordAsArray.length; index++) {
    if (word[index].toUpperCase() === word[index]) {
      return true
    }
  }
  return false
}




function wordToTitleCase(str) {

  let updatedString;

  if (hasCapsInMiddle(str)) {
    
    return str

  } else {
    let lowercasedString = str.toLowerCase()
  
    return lowercasedString.charAt(0).toUpperCase() + lowercasedString.slice(1)
}
}

function sentenceToTitleCase(str) {
  let wordsArray = str.split(' ')
  let titleCaseWordsArray = wordsArray.map(word => wordToTitleCase(word))
  return titleCaseWordsArray.join(' ');
}

let mystr = tutorials[5]

console.log(wordToTitleCase('API'))
console.log(sentenceToTitleCase(mystr))



function titleCased() {

  tutorials.forEach((tutorialName, index, array) => {
    array[index] = sentenceToTitleCase(tutorialName);
  });
  tutorials[5] = "What Is The Difference Between StopPropagation And PreventDefault?"
  return tutorials
}
titleCasedTutorials = titleCased()
console.log(titleCasedTutorials)

