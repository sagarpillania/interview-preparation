const express=require("express");
const app=express();
app.use(express.json());

let books=[{id:1,title:'Harry Potter',genre:'Fiction'},{id:2,title:'Anabelle',genre:'Horror'},
    {id:3,title:"Naruto",genre:'Anime'}
];

// 1. GET all books (with optional query filter)

app.get('/api/books',(req,res)=>{
    const {genre}=req.query;
    if(genre){
        const filteredBooks=books.filter((ele)=>{return ele.genre.toLowerCase()===genre.toLowerCase()});
        return res.status(200).json(filteredBooks);
    }
    res.status(200).json(books);
})

// 2. GET a single book by ID

app.get('/api/books/:id',(req,res)=>{
    const bookId=parseInt(req.params.id,10);
    const book=books.find((b)=>b.id===bookId);
    if(!book){
        return res.status(404).json({error:'Book not found'});
    }
    res.status(200).json(book);
})

// 3. POST - Create a new book

app.post('/api/books',(req,res)=>{
    const {title,genre}=req.body;
    if(!title || !genre){
        return res.status(400).json({error:'Title and genre is missing'});
    }
    const newBook={
        id:books.length+1,
        title:title,
        genre:genre
    };
    books.push(newBook);
    res.status(201).json(newBook);
})

// 4. DELETE - Remove a book by ID
app.delete('/api/books/:id',(req,res)=>{
    const bookId=parseInt(req.params.id,10);
    const intialLen=books.length;
    books=books.filter((book)=>book.id!==bookId);
    if(books.length===intialLen){
        return res.status(404).json({error:'book not found'});
    }
    res.status(200).json({message:'Book deleted'});
})


app.listen(3000,()=>{
    console.log("Server running and here it is crud Routes");
    
})