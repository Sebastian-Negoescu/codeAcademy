/*
Meal Maker
As a frequent diner, you love trying out new restaurants and experimenting with different foods. 
However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

In this project, you'll use JavaScript to randomly create a three-course meal based on what is available on a menu. We'll keep running it until we're satisfied with the generated meal!
*/

const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    
    get courses() {
      return {
       appetizers: this._courses.appetizers,
       mains: this._courses.mains,
       desserts: this._courses.desserts
      }
    },
    
    get appetizers () {
      
    },
    
    set appetizers (appetizerIn) {
      
    },
    
    get mains() {
      
    },
    
    set mains(mainIn) {
      this.addDishToCourse();
    },
    
    get desserts() {
      
    },
    
    set desserts(dessertIn) {
      
    },
    
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
      
    },
    
    getRandomDishFromCourses(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourses('appetizers');
      const main = this.getRandomDishFromCourses('mains');
      const dessert = this.getRandomDishFromCourses('desserts');
      let totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is: an Appetizer of a ${appetizer.name}, a Main course of a ${main.name} and a Dessert of a ${dessert.name}. Amount of money to be paid: $${totalPrice}.`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Royal Canin for Humans', 4.25);
  menu.addDishToCourse('appetizers', 'Omelette with Dill', 7.5);
  menu.addDishToCourse('appetizers', 'Zacusca with break', 3.75);
  menu.addDishToCourse('mains', 'Veggie Burger', 4.60);
  menu.addDishToCourse('mains', 'Lasagna with Avocado', 8.20);
  menu.addDishToCourse('mains', 'Pineapple with Bat Shit', 13.75);
  menu.addDishToCourse('desserts', 'My banana on flames', 1000);
  menu.addDishToCourse('desserts', 'Royal licking with cream', 100);
  menu.addDishToCourse('desserts', "Negoescu's penis with Strawberries", 500)
  
  let randomMeal = menu.generateRandomMeal();
  console.log(randomMeal);
  