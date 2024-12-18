class Parent{
    greet():void{
        console.log("Hello from Parent!");
    }
}

class Child extends Parent{
    greet():void{
        console.log("Hello From Child!");        
    }
}

const parents=new Parent();
parents.greet();

const child=new Child();
child.greet();

