//assign grade from A-F based on score using switch case

let score = 50;
let grade;

switch (true) {
    case (score>=90):
        grade = 'A';
        console.log("You got A grade");
        break;
    case (score>=80):
        grade = 'B';
        console.log("You got B grade");
        break;
    case (score>=65):
        grade = 'C';
        console.log("You got C grade");
        break;
    case (score>=50):
        grade = 'D';
        console.log("You got D grade");
        break;
    case (score>=34):
        grade = 'E';
        console.log("You got E grade");
        break;

    default:
        grade = 'F';
        console.log("You got F grade");
        break;
}
