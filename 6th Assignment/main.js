frontEndStudent = document.getElementsByClassName("studentName");
frontEndStudentArray = Array.from(frontEndStudent);

backEndStudent = [
  "Noman",
  "Rohaan",
  "Ahmed",
  "Inam",
  "Farhan",
  "Ali",
  "Hasan",
  "Hussain",
];
for (i = 0; i < backEndStudent.length; i++) {
  frontEndStudentArray[i].innerHTML = backEndStudent[i];
}

frontEndDepart = document.getElementsByClassName("depart");
frontEndDepartArray = Array.from(frontEndDepart);

backEndDepart = [
  "Applied Chemistry",
  "Applied Physics",
  "Applied Mathematics",
  "Civil",
  "Mechanical",
  "Electrical",
  "Electronics",
  "Computer Science",
];
for (i = 0; i < backEndDepart.length; i++) {
  frontEndDepartArray[i].innerHTML = backEndDepart[i];
}

frontEndUniversity = document.getElementsByClassName("uni");
frontEndUniversityArray = Array.from(frontEndUniversity);

backEndUniversity = [
  "NED University",
  "Karachi University",
  "Dawood University",
  "Sindh Univeristy",
  "Sir Syed University",
  "Hamdard University",
  "Iqra University",
  "Usman Institute",
];
for (i = 0; i < backEndUniversity.length; i++) {
  frontEndUniversityArray[i].innerHTML = backEndUniversity[i];
}