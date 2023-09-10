var name, fatherName, rollNo,contactNumber, CNICNumber , picture , courseName;

function readForm() {
    name = document.getElementById("name").value;
    fatherName = document.getElementById("fatherName").value;
    rollNo= document.getElementById("rollNo").value;
    contactNumber= document.getElementById("contactNumber").value;
    CNICNumber= document.getElementById("CNICNumber").value;
    picture = document.getElementById("picture").value;
    courseName= document.getElementById("courseName").value;
  console.log(name, fatherName, rollNo,contactNumber, CNICNumber , picture , courseName);
}
// create
document.getElementById("create").onclick = function () {
  readForm();
  firebase
    .database()
    .ref("user/" + name)
    .set({
        name:name
        , fatherName:fatherName
        , rollNo: rollNo
        ,contactNumber:contactNumber
        , CNICNumber: CNICNumber
        , picture : picture 
        , courseName:courseName
    });
  alert("data created");
  document.getElementById("name").value = "";
  document.getElementById("fatherName").value = "";
  document.getElementById("contactNumber").value = "";
  document.getElementById(" CNICNumber").value = "";
  document.getElementById("picture ").value = "";
  document.getElementById("courseName").value = ""
};

//read
document.getElementById("read").onclick = function () {
  readForm();
  firebase
    .database()
    .ref("user/" + name)
    .on("value", function (snap) {
        document.getElementById("name").value = snap.val().name;
        document.getElementById("fatherName").value= snap.val().fatherName;
        document.getElementById("contactNumber").value = snap.val().contactNumber;
        document.getElementById(" CNICNumber").value=snap.val().CNICNumber
        document.getElementById("picture ").value =snap.val().picture
        document.getElementById("courseName").value=snap.val().courseName
    });
};

//update
document.getElementById("update").onclick = function () {
  readForm();
  firebase
    .database()
    .ref("user/" + name)
    .update({
        name:name
        , fatherName:fatherName
        , rollNo: rollNo
        ,contactNumber:contactNumber
        , CNICNumber: CNICNumber
        , picture : picture 
        , courseName:courseName
    });
  alert("successfully upadted");
  document.getElementById("name").value = "";
  document.getElementById("fatherName").value = "";
  document.getElementById("contactNumber").value = "";
  document.getElementById(" CNICNumber").value = "";
  document.getElementById("picture ").value = "";
  document.getElementById("courseName").value = ""
};

//delete
document.getElementById("delete").onclick = function () {
  readForm();
  firebase
    .database()
    .ref("user/" + name)
    .remove();
  alert("data deleted succesfully!");
  document.getElementById("name").value = "";
  document.getElementById("fatherName").value = "";
  document.getElementById("contactNumber").value = "";
  document.getElementById(" CNICNumber").value = "";
  document.getElementById("picture ").value = "";
  document.getElementById("courseName").value = ""
};