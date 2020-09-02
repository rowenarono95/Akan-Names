var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function dateOfBirth() {
   event.preventDefault();
   var dayOfWeek = document.getElementById("day").value;
   var birthDate = new Date(dayOfWeek);
   var dayOfBirth = birthDate.getDay();
   //validate
   re = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
   if(dayOfWeek=="" || (!(dayOfWeek.match(re)))){
      alert("Provide a Valid date")
   }
   //get gender
   var genders = document.getElementsByName("gender");
   var gendervalue;
   for (var i = 0; i <= genders.length; i++) {
      if (genders[0].checked) {
         gendervalue = "male";
      }
      if (genders[1].checked) {
         gendervalue = "female";
      }
   }

   switch (gendervalue) {
      case "male":
         if (dayOfBirth == 0) {
            document.getElementById("display").innerHTML = ("You were born on<span>" + " " + days[0] + "</span> and your akan name is<span> " + "" + maleAkanNames[0]);
         }
         if (dayOfBirth == 1) {
            document.getElementById("display").innerHTML = ("You were born on<span>" + " " + days[1] + "</span> and your akan name is<span> " + "" + maleAkanNames[1]);
         }
         if (dayOfBirth == 2) {
            document.getElementById("display").innerHTML = ("You were born on<span>" + " " + days[2] + "</span> and your akan name is<span> " + "" + maleAkanNames[2]);
         }
         if (dayOfBirth == 3) {
            document.getElementById("display").innerHTML = ("You were born on<span>" + " " + days[3] + "</span> and your akan name is<span> " + "" + maleAkanNames[3]);
         }
         if (dayOfBirth == 4) {
            document.getElementById("display").innerHTML = ("You were born on<span>" + " " + days[4] + "</span> and your akan name is<span> " + "" + maleAkanNames[4]);
         }
         if (dayOfBirth == 5) {
            document.getElementById("display").innerHTML = ("You were born on<span>" + " " + days[5] + "</span> and your akan name is<span> " + "" + maleAkanNames[5]);
         }
         if (dayOfBirth == 6) {
            document.getElementById("display").innerHTML = ("You were born on<span>" + " " + days[6] + "</span> and your akan name is<span> " + "" + maleAkanNames[6]);
         }
         break;

      case "female":
         if (dayOfBirth == 0) {
            document.getElementById("display").innerHTML = ("You were born on<span>" + " " + days[0] + "</span> and your akan name is<span> " + "" + maleAkanNames[0]);
         }
         if (dayOfBirth == 1) {
            document.getElementById("display").innerHTML = ("You were born on<span>" + " " + days[1] + "</span> and your akan name is<span> " + "" + maleAkanNames[1]);
         }
         if (dayOfBirth == 2) {
            document.getElementById("display").innerHTML = ("You were born on<span>" + " " + days[2] + "</span> and your akan name is<span> " + "" + maleAkanNames[2]);
         }
         if (dayOfBirth == 3) {
            document.getElementById("display").innerHTML = ("You were born on<span>" + " " + days[3] + "</span> and your akan name is<span> " + "" + maleAkanNames[3]);
         }
         if (dayOfBirth == 4) {
            document.getElementById("display").innerHTML = ("You were born on<span>" + " " + days[5] + "</span> and your akan name is<span> " + "" + maleAkanNames[5]);
         }
         if (dayOfBirth == 5) {
            document.getElementById("display").innerHTML = ("You were born on<span>" + " " + days[6] + "</span> and your akan name is<span> " + "" + maleAkanNames[6]);
         }
         if (dayOfBirth == 6) {
            document.getElementById("display").innerHTML = ("You were born on<span>" + " " + days[7] + "</span> and your akan name is<span> " + "" + maleAkanNames[7]);
         }

   }
}
