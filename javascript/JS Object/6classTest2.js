class Person {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  getName(){
    return this.name;
  }
}

//extends就是实现继承
//super  ====>  Person.call(this, name, age)
class Student extends Person {
  constructor(name, age, score){

    //super相当于借用构造函数
    super(name, age);
    this.score = score;
  }
  exam(){
    console.log("exam.......");
  }
}

var s1 = new Student('zhangsan', 20,  65);
console.log(s1);
