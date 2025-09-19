/*
function Circle(radius){

  this.radius = radius;
  let area = 10; //abstraction 
  this.getArea = function(){
    return area;
  }

  this.draw = function(){
    console.log('draw');
  }

  Object.defineProperty(this, 'area',{
    get: function(){
      return area;
    },
    set: function(value){
      if(!value){
        throw new Error('Invalid value');
      }
      area = value;
    }
  })
}

const c1 = new Circle(5);
c1.getArea();
c1.area = 15;
*/

/*
function Car(brand){
  this.brand = brand;
  let price = 0;
  Object.defineProperty(this, 'price', {
    get: function(){
      return price;
    },
    set: function(cost){
      if(!cost){
        throw new Error('Invalid price');
      }else{
        price = cost;
      }
    }
  })
};

Car.prototype.drive = function(){
  console.log('Drives fast');
}


const maruthi = new Car('Maruthi');
const volksvagen = new Car('Volksvagen');
maruthi.drive();
maruthi.price = 123000;
*/

/*
function HtmlEelement(){
  this.click = function(){
    console.log('click');
  }
}
HtmlEelement.prototype.focus = function(){
  console.log('focused');
}

function HtmlSelectElement(items = []){
  this.items = items;

  this.addItem = function(item){
    this.items.push(item);
  }

  this.removeItem = function(item){
    this.items.splice(this.items.indexOf(item),1);
  }
}

HtmlSelectElement.prototype = new HtmlEelement();
*/


class Circle{
  constructor(radius){
    this.radius = this.radius;
  }

  draw(){
    console.log('draw');
  }
}

const c = new Circle(10);





























































