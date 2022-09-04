function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;

    return average;

}
const assignment1Marks = 60;
const assignment2Marks = 98;
const assignment3Marks = 59;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
var my2digitAverage = myAverage.toFixed(2);
console.log('My Average So Far:', my2digitAverage);

