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