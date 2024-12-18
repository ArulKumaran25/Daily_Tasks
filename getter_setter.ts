class StudentDetails{
    originalName="Arul Kumaran S";
     name:any;
 
     set studentName(name){
         this.originalName=name;
         console.log(this.originalName);
     }
 
     get studentName(){
         return this.originalName;
     }  
 }
 
 const studentDetails=new StudentDetails();
 console.log(studentDetails.studentName)
 
 //by changing the value , using setter
 studentDetails.studentName="Arul";
 console.log(studentDetails.studentName)