// Task 5 : Create a nested object library with name and array of book obects

const library = {
    name : 'Central lucknow',
    books : [
        {
            title : 'hyper focus',
            price : 300,
            author : 'chris bailey'
        },
        {
            title : 'Atomic Habits',
            price : 350,
            author : 'James Clear'
        },
        {
            title : 'How to win friends',
            price : 150,
            author : 'Dale carnegie'
        }
    ]
}

console.log(library);

//Task 6 : log name of library and title of books in it
console.log('library Name : ',library.name );
console.log('Books : ');
for (const keys of library.books) {
    console.log(keys.title);
}