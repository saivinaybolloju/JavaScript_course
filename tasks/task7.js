const Kalam_Book={
    title:"Wings of fire",
    author:"APJ Abdul Kalam",
    ISBN:34356789,
    isborrowed:false,
    borrow(){
        if(!this.isborrowed){
            this.isborrowed=true;
            console.log(`You borrowed this book ${this.title}`);
        }else{
            console.log(`${this.title} is already borrowed!`);
        }
    },
    returnBook(){
        if(this.isborrowed){
            this.isborrowed=false;
            console.log(`${this.title} is returned back to Library!`);
        }
    }
}
const Ambedkar_Book={
    title:"Constitution",
    author:"Ambedkar",
    ISBN:9876543,
    isborrowed:false,
    borrow(){
        if(!this.isborrowed){
            this.isborrowed=true;
            console.log(`You borrowed this book ${this.title}`);
        }else{
            console.log(`${this.title} is already borrowed!`);
        }
    },
    returnBook(){
        if(this.isborrowed){
            this.isborrowed=false;
            console.log(`${this.title} is returned back to Library!`);
        }
    }
}
const Library={
    books:[],
    addBook(book){
        this.books.push(book);
        console.log(`${book.title} is added to the library`);
    },
    findBookByISBN(isbn){
        return this.books.find(book=>book.ISBN===isbn);
    },
    listAvailableBooks(){
        return this.books.filter(book=>!book.isborrowed);
    },
    listBorrowedBooks(){
        return this.books.filter(book=>book.isborrowed);
    }
}
Library.addBook(Kalam_Book);
Library.addBook(Ambedkar_Book);
Kalam_Book.borrow();
console.log("Available",Library.listAvailableBooks().map(b=>b.title));
console.log("Borrowed",Library.listBorrowedBooks().map(b=>b.title));
Kalam_Book.returnBook();
console.log("Available",Library.listAvailableBooks().map(b=>b.title));