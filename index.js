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
 
   switch(gendervalue){
      case "male":
         if(dayOfBirth==0){
            alert("you were born on"+days[0]+"and your akan name is"+maleAkanNames[0]);
         }
         if(dayOfBirth==1){
            alert("you were born on"+""+days[1]+"and your akan name is"+""+maleAkanNames[1]);
         }
         if(dayOfBirth==2){
            alert("you were born on"+""+days[2]+"and your akan name is"+""+maleAkanNames[2]);
         }
         if(dayOfBirth==3){
            alert("you were born on"+""+days[3]+"and your akan name is"+""+maleAkanNames[3]);
         }
         if(dayOfBirth==4){
            alert("you were born on"+""+days[4]+"and your akan name is"+""+maleAkanNames[4]);
         }
         if(dayOfBirth==5){
            alert("you were born on"+" "+days[5]+"and your akan name is"+""+maleAkanNames[5]);
         }
         if(dayOfBirth==6){
            alert("you were born on"+""+days[6]+"and your akan name is"+""+maleAkanNames[6]);
         }

   
   }

}
