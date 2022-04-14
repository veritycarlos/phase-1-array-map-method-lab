const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased(){
  return tutorials.map(tutorial => {
      const tutorialName = tutorial.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')
    console.log(tutorialName)
    return tutorialName
    // return tutorials.join('')
})}
// const titleCased = array => {
//   let newArray = array.map(element => {
//     const words = element.split(" ");
//     words.map((word) => {
//       return word[0].toUpperCase() + word.substring(1).toLowerCase;
//     }).join(" ");
//   })
//   return newArray;
// }