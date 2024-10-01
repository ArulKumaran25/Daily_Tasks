interface employeeInfo{
    empId:number;
    empName:string;
    getSalary:(num:number)=>number;
    getManagerName:(num:number) => string;
}

const emp:employeeInfo={
    empId: 101,
    empName: "Arul",
    getSalary:(n)=>{
        return n;
    },
    getManagerName:function(n){
        return " i";
    }
}
console.log(emp);




