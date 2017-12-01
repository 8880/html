

//ES5构造函数
function Person(name, age){
  this.name = name;
  this.age = age;
}

Person.prototype = {
  constructor: Person,
  getName: function () {
    return this.name;
  },
  getAge: function () {
    return this.age;
  },
  setName: function (newName){
    this.name = newName;
  }
}

// var p1= new Person('lisi', 10);


//es6构造函数
class Animal {
  //constructor 相当于 之前构造函数内部的代码
  constructor(type){
    this.type = type;

    //每一个对象都有一份的函数
    this.run = function(){
      console.log("run.....");
    }
  }

  //如果添加的是原型方法，那么直接写
  eat(){
    console.log("eat ....");
  }

  drink(){
    console.log("drink....");
  }
}


var a1 =  new Animal("dog");
console.log(a1);
