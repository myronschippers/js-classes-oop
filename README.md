
# Classes and Inheritance

Classes are a way to make a template for an Object. 

## Classes vs Object-Literals

We can make an object-literal at any time like so: 

```JS
const employee = {
    firstName: 'Jim',
    lastName: 'Loser',
    fullName: 'Jim Loser',
};
```

But these get hard to manage. What if we have 15 different employees? What if someone accidentally makes the key `FirstName` instead of `firstName`? Or we want to add a salary property to each employee? NOOOOOOO!

Classes are NOT object-literals. They are a blueprint for making objects. When you make a class, you are describing the way the objects will eventually look. 


## Class Syntax
- Class (template)
  -  constructor (what happens to make it)
  -  `new` (make an instance of the class -- calls the constructor)
  -  pass parameters to constructor, use said parameters
  -  default parameters 
  -  multiple instances
  -  class methods


```
class Employee {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
        this.fullName = this.createFullName();
    }

    createFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    changeFirstName(newName) {
        this.firstName = newName;
        this.fullName = this.createFullName();
    }
}

// Usage:
let john = new Employee('John', 'Smith');
let carrie = new Employee('Carrie', ');
console.log('john: ', john);
console.log('carrie: ', carrie);
```

## OOP

Everything is a self contained object.  
The object has every tool it needs to function. 
One of the tenants of OOP is inheritance.

Java, C++, C#, all are OOP languages

Classes talking to each other is the pattern.

## Inheritance
We can extend the functionality from one class to the next by using the `extend` keyword. This will cause the `subclass` (or`child class`) to inherit its functionality from the `super class` (or `parent class`). You get more specific as you drill down.


- `super()` actually creates the thing it extends -- Actually calls constructor from parent!
-  can send parameters in super
-  using inherited methods



Let's take a look at an example below:

```JavaScript 
class MarketItem {

  constructor(name, price, imgUrl){
    this.name = name;
    this.price = price;
    this.imgUrl = imgUrl;
  }

  changePrice(){
    this.price++;
    console.log('Price Changed! ', this.price);
  }
}

class Fruit extends MarketItem { 

  constructor(name, price, imgUrl, freshness){
    super(name, price, imgUrl);
    this.freshness = freshness;
  }

  changePrice(){
    super.changePrice();
    this.freshness--;
    if(this.freshness <=0){
      this.price = 0;
      console.log('Food spoiled: ', this.price);
    } else {
      console.log('Freshness: ', this.freshness);
    }
  }
}

let apple = new Fruit('Apple', 1, 'something.jpg', 2);
console.log(apple);
apple.changePrice();

```
