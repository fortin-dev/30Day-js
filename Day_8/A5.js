// Task 8 : Enhanced object litrals

let title = 'Atomic Habit',
    author = 'James Clear',
    price = 399;

const messagesFormBook = (()=>{
    console.log('New Habits should be sticked together after an old habit ');
})

let myObj= {title,author,price,messagesFormBook}
console.log(myObj);


// Task 9 : computed property name in objects

let subj = 'english'

let nameMarks ={
    name : 'Abhinav',
    [subj] : 35
}

console.log(`${nameMarks.name} has got ${nameMarks[subj]} in english`);
console.log(`${nameMarks.name} has got ${nameMarks.english} in english`);