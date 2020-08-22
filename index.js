var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
 

function dateOfBirth(){
   var days=document.getElementById("day").value;
   var birthDate = new Date(days);
   var dayOfBirth= birthDate.getDay();
   //get gender
   var genders=document.getElementsByName("gender");
   var gendervalue;
   for(var i = 0;i<=genders.length;i++){
      if(genders[0].checked){
         gendervalue="male";
      }
      if(genders[1].checked){
         gendervalue="female";
      }
   }
 

}
