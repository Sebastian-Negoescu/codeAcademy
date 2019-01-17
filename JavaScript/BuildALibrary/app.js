/*
Build a Library

Congratulations, you've passed the grueling rigmarole of librarian school and have become head librarian at your local Books-'N-Stuff.
Just as you sit down, eager to utilize all those skills you learned in "Lib 203 - Shushing: How to Maintain Order While Spitting", you realize you're still using index cards to handle everything.

But no matter, you know some JavaScript, so let's get to work modernizing your new digs.
Books-'N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:
======
Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
======
Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
======
CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

If you're looking for a challenge, try to create the four classes without using the steps below.
=======
If you get stuck during this project, check out the project walkthrough video which can be found at the bottom of the page after the final step of the project.
https://www.youtube.com/watch?v=_7HStd1Vhlc
*/

class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    
    get title() {
      return this._title;
    }
    
    get isCheckedOut () {
      return this._isCheckedOut;
    }
    
    get ratings() {
      return this._ratings;
    }
    
    set isCheckedOut(rating) {
      this._ratings = rating;
    }
    
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
    
    getAverageRating(){
      const avgRating = (this._ratings.reduce((currentSum, rating) => currentSum + rating, 0) / this._ratings.length);
      return avgRating;
    } 
    
    addRating (newRating) {
      this._ratings.push(newRating);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super (title);
      this._author = author;
      this._pages = pages;
    }
    
    get author() {
      return this._author;
    }
    
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor (director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    
    get director() {
      return this._director;
    }
    
    get runTime() {
      return this._runTime;
    }
  }
  
  //Practice for Book class
  const historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);
  console.log(historyOfEverything);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  //Practice for Movie calass
  const speed = new Movie("Jan de Bont", "Speed", 116);
  console.log(speed);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  const legent = new Movie("Tom Hardy", "Sebastian Negoescu", 120);
  console.log(legend);
  
  
  
  
  















