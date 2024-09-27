class car{
    readonly brand:string;

    constructor(brand:string){
        this.brand=brand;
    }
}
const myCar=new car('Toyota');
console.log(myCar.brand);
