function submitform() {
  var selectCity = document.getElementById("SelectCity");
  var selectCourse = document.getElementById("SelectCourse");
  var selectCampus = document.getElementById("SelectCampus");
  var selectClassPreference = document.getElementById("SelectClassPreference");
  var fullName = document.getElementById("FullName");
  var fatherName = document.getElementById("FatherName");
  var email = document.getElementById("email");
  var phone = document.getElementById("Phone");
  var cnic = document.getElementById("CNIC");
  var fatherCNIC = document.getElementById("FatherCNIC");
  var dob = document.getElementById("DOB");
  var gender = document.getElementById("Gender");
  var address = document.getElementById("Address");
  var lastQualification = document.getElementById("Lastqualification");
  var doyouhaveaLaptop = document.getElementById("DoyouhaveaLaptop");
  var picture = document.getElementById("Picture");

  console.log(`Seleted City: ${selectCity.value}`);
  console.log(`Seleted Course: ${selectCourse.value}`);
  console.log(`Seleted Campus: ${selectCampus.value}`);
  console.log(`Seleted Class Preference: ${selectClassPreference.value}`);
  console.log(`Full Name: ${fullName.value}`);
  console.log(`Father Name: ${fatherName.value}`);
  console.log(`Email: ${email.value}`);
  console.log(`Phone: ${phone.value}`);
  console.log(`CNIC: ${cnic.value}`);
  console.log(`Father's CNIC: ${fatherCNIC.value}`);
  console.log(`Date of Birth: ${dob.value}`);
  console.log(`Gender: ${gender.value}`);
  console.log(`Address: ${address.value}`);
  console.log(`Last Qualification: ${lastQualification.value}`);
  console.log(`Do You Have a Laptop: ${doyouhaveaLaptop.value}`);
  console.log(`Picture: ${picture.value}`);
}
