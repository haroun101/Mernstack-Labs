

function Person(name , age){
    this.name = name;
    this.age = age;

    this.isAdult = function(){
        if(this.age >= 18) return true;
        else return false;
    }
}



Object.prototype.introduce = function(){
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`)
}
var p1 = new Person("Haroun" , 20);
p1.introduce();
console.log(p1.isAdult());


function Student(name , age ,grade){
    this.name = name;
    this.age = age
    this.grade = grade
    this.getGrade = function(){
        return this.grade;
    }
}

Object.setPrototypeOf(Student , Person);
console.log(Person)

Object.prototype.study = function(){
    console.log(`${this.name} is studying`);
}

var stu = new Student("haroun" , 20 , 2);
stu.study()   

Object.prototype.study = function(){
    console.log(`Hi, I'm ${this.name}, ${this.age} years old, Grade: ${this.grade}`);
}
stu.study();
console.log( stu.getGrade() )