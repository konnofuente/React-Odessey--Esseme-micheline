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
  
// dont make use of if/else and for 
  

  //  // Create a new array containing only the titles of the books.


  //  Create a new array containing objects with only title and author properties

  //  Sort the books by their publication date in descending order.

  // Filter the books to only include those with a movie adaptation

  // Calculate the total number of pages of all the books combined.

  // Find the book with the title "Dune".

  // Merge this array newBook and data in an array called updaedBook

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

  const updatedBook=[]

  //  Remove the book with the ID of 3



  // Update the pages of the book with ID 1 to 1120


  // Destructure the title, author, and genres of the book with ID 2

  // Create a new array of genres for book with ID 5, adding a new genre

  //  Create a message indicating if the book with ID 1 has more than 1000 pages


  // Create an arrow function that takes a book ID and returns the title.


  // Get the number of reviews for the book with ID 3 using optional chaining


  // Check if the book with ID 1 has both "fantasy" and "adventure" genres

  // Get the Spanish translation of the book with ID 3, or default to "Not available".

  // Calculate the average rating of the book with ID 1 from both Goodreads and LibraryThing.

  // Check if there is any book with a rating higher than 4.5 on Goodreads.

  // Check if all books have more than 200 pages.

  // Find the book with ID 4 and create a new array of its genres in uppercase

  // Create a new array containing all genres from all books, flattened into a single array.

  // Check if the array of titles includes "Dune"