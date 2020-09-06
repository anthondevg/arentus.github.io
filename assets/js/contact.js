// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB1Sgu-Licfe5zrcZxfLpUOZbuVUWxOpyA",
  authDomain: "portfolio-23e28.firebaseapp.com",
  databaseURL: "https://portfolio-23e28.firebaseio.com",
  projectId: "portfolio-23e28",
  storageBucket: "portfolio-23e28.appspot.com",
  messagingSenderId: "141490100811",
  appId: "1:141490100811:web:47b4e28baefbf987db8bce",
  measurementId: "G-N5KDKVZCS3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref("messages");

let typed = undefined;

// next button
var send = document.getElementById("send");

// badges container
var dataBadges = document.getElementById("dataForm");
var successAlert = document.getElementById("successWrapper");
var failureAlert = document.getElementById("failureWrapper");

var contactData = {
  name: "",
  email: "",
  message: "",
};

send.addEventListener("click", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  console.log(name, email, message);

  // sending progress button

  send.innerText = "Sending...";

  // simulacion de peticion a api
  successAlert.style.display = "none";
  failureAlert.style.display = "none";

  if (name !== "" && email !== "" && message !== "") {
    saveMessage(name, email, message);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    setTimeout(function () {
      // revert all to original state
      successAlert.style.display = "block";
      send.innerText = "Send Message";
    }, 1000);
  } else {
    setTimeout(function () {
      failureAlert.style.display = "block";
      send.innerText = "Send Message";
    }, 1000);
  }
});

// Save message to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}

function validateData(data, field) {
  switch (field) {
    case "name":
      return data.length > 3;
      break;
    case "email":
      return validateEmail(data);
      break;
    case "message":
      return true;
      break;
    default:
      break;
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
