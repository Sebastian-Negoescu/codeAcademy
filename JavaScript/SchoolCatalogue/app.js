/*
School Catalogue
Let's put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. 
The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary, middle, and high schools. Because these classes share properties and methods, each will inherit from a parent School class. 
Our parent and three child classes have the following properties, getters, setters, and methods:

======
School
Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
======
Primary
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)
======
Middle
Does not include any additional properties or methods
======
High
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)
If you're looking for a challenge, create the constructor() and getters for the four classes above. Then, use the setter and methods specifications in steps five, six, and seven to finish the project.

!!! Nice work! If you've made it this far, you have a strong understanding of class syntax and inheritance.
!!! If you would like to continue working on this project, we have listed some avenues to build on your progress.

Add more properties to each class (averageTestScores, schoolOverview, etc.)
Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools.

If you get stuck during this project, check out the project walkthrough video which can be found at the bottom of the page after the final step of the project.
https://www.youtube.com/watch?v=9p2VeKRKZ1Q
*/

class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    
    get name() {
      return this._name;
    }
    
    get level() {
      return this._level;
    }
      
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === 'number') {
        this._numberOfStudents.push(newNumberOfStudents);
      } else {
        console.log("Invalid input: numberOfStudents must be set to a Number.");
      }
    }
  /*  
    set level(eligibleLevel) {
      if (eligibleLevel === "primary" || eligibleLevel === "middle" || eligibleLevel === "high") {
        this._level.push(eligibleLevel);
      } else {
        console.log("This is not an eligible School type.");
      }
    }
    === Skype Status ===
    let char = "J. Delaney"; const mood = () => { while (scenario === "Nootka Sound") { return mood;}}; console.log(mood());
    */
    quickFacts() {
      console.log(`${this._name} educates ${this.numberOfStudents} students at the ${this._level} school level.`);
    }
    
    static pickSubstituteTeacher(substituteTeachers) {
      let randomNum = Math.floor(substituteTeachers.length * Math.random());
      return substituteTeachers[randomNum];
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    
    get pickuPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
      super(name, 'high', numberOfStudents);
      this._sportsTeam = sportsTeam;
    }
    
    get sportsTeam() {
      return this._sportsTeam;
    }
  }
  
  const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");
  lorraineHansbury.quickFacts();
  
  let subs = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']; 
  console.log(School.pickSubstituteTeacher(subs));
  
  const alSmith = new HighSchool("Al. E. Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeam);
  
  
  
  
  
  
  
  
  