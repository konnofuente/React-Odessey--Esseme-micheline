const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
  function getBook(id) {
    return data.find((d) => d.id === id);
  }
  
//   //Aray sectiion and mapping
  
//   const books = getBooks();
//   console.log(books)
  
//   const x=[1,2,3,4,5].map((e)=>e*2);
//   console.log(x)
  
  
//   const alltitle = books?.map((e) => e.title);
//   alltitle;
  
  
//   twoData = books.map((item)=>{
//     return {
//       title : item.title,
//       author: item.author
//     }
//   })
  
//   twoData
  
  
  
  
//   // sorting an array
//   const arr = [3,6,8,4,0,6,2,4,6]
  
//   // make a copy and sort it 
//   const sorted = arr.slice().sort((a,b) => b-a);
//   sorted
//   arr
  
  
  
  
//   //merging 2 array
  
//   const newBook ={
//     id:6,
//     title : "dfdf",
//     author: "hen"
//   }
  
//   const addedArray = [...books , newBook]
//   addedArray
  
//   // delete an id in an array
//   const deleteArray = addedArray.filter((book) => book.id != 3);
//   deleteArray
  
//   //update and arrray
  
//   const updateArray = deleteArray.map((book)=> {
//     book.id === 1? {...book , pages:112} : book
//   })
//    updateArray
  
  
  
  
  /*
  // DEstructuring 
  const books = getBook(2);
  const { title, author, genres } = books;
  // console.log( genres[2]);
  console.log(books)
  const [g1, g2,] = books.genres;
  
  // this funtion create a array from another and will add a value to the array
  const b = [...books.genres, 'hello']
  
  console.log(g1, g2, a);
  console.log(b);
  
  pages = 120;
  
  // this line of code will enable us to add a kay in a json file 
  const updatedBook = { ...books, test: "hello" }
  updatedBook
  
  
  // the template enable us to use $ sign to display variables
  const summary = ` ${title} a book  with author ${author}`;
  summary
  
  //tertiary function
  
  message = pages > 20 ? `the other is ${title}` : `the is no other`;
  console.log(`the message is ${message}`)
  
  
  //arrow function 
  const number = 3;
  
  mult2 = (num) => num * 2;
  
  val = mult2(number);
  val
  
  console.log(val > 5 ? res = "good" : "bad" &&  res);
  
  
  // reviews: {
  //   goodreads: {
  //     rating: 4.44,
  //     ratingsCount: 2295233,
  //     reviewsCount: 59058,
  //   },
  //   librarything: {
    //     rating: 4.36,
    //     ratingsCount: 38358,
    //     reviewsCount: 1095,
    //   },
    // },
    
    // const book =getBook(2);
    const book3 = getBook(3);
  
  
  // here the optional chaining permit js to check if a val is undefine and will return another value if that is true 
  function getReviewCount(b){
  
    reviewG = b.reviews.goodreads?.reviewsCount ?? 0
    reviewL = b.reviews.librarything?.reviewsCount ?? 0
    return reviewG +reviewL;
  }
  
  console.log(getReviewCount(book3))
   */


  /////////////////////////////////////////////////////////////////

  // dont make use of if/else and for 
  

  //  // Create a new array containing only the titles of the books.
  const titles = data.map(book => book.title )
  console.log(titles)


  //  Create a new array containing objects with only title and author properties
  const auteurs = data.map(book => ({
    title : book.title,
    author : book.author 
  }))
  console.log(auteurs);

  //  Sort the books by their publication date in descending order.
  const sorted = [...data].sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));
    console.log (sorted);

  // Filter the books to only include those with a movie adaptation
  const movies = data.filter(book => book.hasMovieAdaptation)
  console.log(movies)

  // Calculate the total number of pages of all the books combined.
  const total = data.reduce((sum,book) => sum + book.pages, 0)
  console.log(total)

  // Find the book with the title "Dune".
  const titre = data.filter(book => book.title === "Dune")
  console.log(titre)

  // Merge this array newBook and data in an array called updatedBook

  const newBook = {
    id: 6,
    title: "New Book",
    author: "New Author",
    publicationDate: "2024-01-01",
    genres: ["new genre"],
    hasMovieAdaptation: false,
    pages: 300,
    translations: {},
    reviews: {}
  };

  const updatedBook=[newBook,...data]
  console.log(updatedBook);

  //  Remove the book with the ID of 3

  const identity = updatedBook.filter(book => book.id !== 3);
  console.log(identity);

  // Update the pages of the book with ID 1 to 1120

  const update = updatedBook.map(book => 
    book.id === 1 ? { ...book, pages: 1120 } : book
  );
  console.log(update);


  // Destructure the title, author, and genres of the book with ID 2
  
  const { title, author, genres } = updatedBook.find(book => book.id === 2);
   console.log({ title, author, genres })
  // Create a new array of genres for book with ID 5, adding a new genre
  const Genres = [...updatedBook.find(book => book.id === 5).genres, "new genre"];
  console.log(Genres)

  //  Create a message indicating if the book with ID 1 has more than 1000 pages
  const value = updatedBook.find(book => (book.id === 1));
  const message = value.pages > 1000 ? "Book 1 has more than 1000 pages" : "Book 1 has 1000 pages or less";
  console.log( message)


  // Create an arrow function that takes a book ID and returns the title.
  const getTitle = id => data.find(book => book.id === id)?.title;
  // i had a problem here
  console.log(getTitle);


  // Get the number of reviews for the book with ID 3 using optional chaining
  const book3 = data.find(book => book.id === 3);
   const reviewsCount = book3.reviews.goodreads?.reviewsCount ?? 0;
   console.log(reviewsCount)

  // Check if the book with ID 1 has both "fantasy" and "adventure" genres
  const book1 = updatedBook.find(book => book.id === 1).genres;
  const result = updatedBook.includes("fantasy") && book1.includes("adventure");
  console.log(result);

  // Get the Spanish translation of the book with ID 3, or default to "Not available".
  const book2 = updatedBook.find(book => book.id === 3).translations.spanish || "Not available";

  // Calculate the average rating of the book with ID 1 from both Goodreads and LibraryThing.
  const Reviews = data.find(book => book.id === 1).reviews;
  const avgRating = (Reviews.goodreads.rating + Reviews.librarything.rating) / 2;
  console.log(avgRating);



  // Check if there is any book with a rating higher than 4.5 on Goodreads.
  const Rating = data.some(book => book.reviews.goodreads.rating > 4.5);
  console.log(Rating);


  // Check if all books have more than 200 pages.
  const results = data.every(book => book.pages > 200);
  console.log(results);

  // Find the book with ID 4 and create a new array of its genres in uppercase
  const book4GenresUppercase = data.find(book => book.id === 4).genres.map(genre => genre.toUpperCase());
  console.log( book4GenresUppercase);

  // Create a new array containing all genres from all books, flattened into a single array.
  const allGenres = data.flatMap(book => book.genres);
  console.log( allGenres);

  // Check if the array of titles includes "Dune"

  const Dunes = titles.includes("Dune");
  console.log( Dunes);
