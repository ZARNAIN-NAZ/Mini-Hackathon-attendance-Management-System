var timings, schedule,teacher,section,course,batch;

function readForm() {
  timings = document.getElementById("timings").value;
  schedule= document.getElementById("schedule").value;
  teacher= document.getElementById("teacher").value;
  section = document.getElementById("section").value;
  course= document.getElementById("course").value;
  batch= document.getElementById("batch").value;


  console.log(timings, schedule,teacher,section,course,batch);
}
// create
document.getElementById("create").onclick = function () {
  readForm();
  firebase
    .database()
    .ref("user/" + batch)
    .set({
      timings: timings, 
      schedule:schedule,
      teacher:teacher,
      section:section,
      course:course,
      batch:batch
    });
  alert("data created");
  document.getElementById("timings").value = "";
  document.getElementById("schedule").value = "";
  document.getElementById("teacher").value = "";
  document.getElementById("section").value = "";
  document.getElementById("course").value = "";
  document.getElementById("batch").value = "";
};

//read
document.getElementById("read").onclick = function () {
  readForm();
  firebase
    .database()
    .ref("user/" + batch)
    .on("value", function (snap) {
      document.getElementById("timings").value  = snap.val().timings;
      document.getElementById("schedule").value= snap.val().schedule;
      document.getElementById("teacher").value  = snap.val().teacher;
      document.getElementById("section").value  = snap.val().section;
      document.getElementById("course").value= snap.val().course;
      document.getElementById("batch").value  = snap.val().batch;
    });
};

//update
document.getElementById("update").onclick = function () {
  readForm();
  firebase
    .database()
    .ref("user/" + batch)
    .update({
      timings: timings, 
      schedule:schedule,
      teacher:teacher,
      section:section,
      course:course,
      batch:batch
    });
  alert("successfully upadted");
  document.getElementById("timings").value = "";
  document.getElementById("schedule").value = "";
  document.getElementById("teacher").value = "";
  document.getElementById("section").value = "";
  document.getElementById("course").value = "";
  document.getElementById("batch").value = "";
};

//delete
document.getElementById("delete").onclick = function () {
  readForm();
  firebase
    .database()
    .ref("user/" + batch)
    .remove();
  alert("data deleted succesfully!");
  document.getElementById("timings").value = "";
  document.getElementById("schedule").value = "";
  document.getElementById("teacher").value = "";
  document.getElementById("section").value = "";
  document.getElementById("course").value = "";
  document.getElementById("batch").value = "";
};