let typed = undefined;

function resetTyped(newTexts) {
  if (typed && typed.constructor === Typed) {
    typed.destroy();
  }

  typed = new Typed("#input-contact", {
    strings: newTexts,
    typeSpeed: 0,
    backSpeed: 0,
    attr: "placeholder",
    bindInputFocusEvents: true,
    loop: true,
    cursorChar: "",
  });
}

var nameHolders = [
  "John Doe",
  "Peter Parker",
  "Bruce Wayne",
  "John Wick",
  "Albert Einstein",
];

var emailHolders = [
  "robwertm@gmail.com",
  "anthot@mail.com",
  "Bruce@mail.com",
  "jwick@qmail.com",
];

// next button
var next = document.getElementById("next-button");
var send = document.getElementById("send-button");

// label for input
var labelInput = document.getElementById("label-input");
// input values
var inputContact = document.getElementById("input-contact");
var inputMesssage = document.getElementById("message");

// badges container
var dataBadges = document.getElementById("dataForm");
var successAlert = document.getElementById("successWrapper");

var contactData = {
  name: "",
  email: "",
  message: "",
};

var nTL = {
  0: "name",
  1: "email",
  2: "message",
};

var labelMessage = {
  0: "What is your name?",
  1: "What is your email?",
  2: "Write your awesome message!",
};

var step = 0;
resetTyped(nameHolders);

next.addEventListener("click", function (e) {
  e.preventDefault();

  contactData[nTL[step]] = inputContact.value;

  dataBadges.innerHTML += `<span class="badge badge-secondary  mr-2" id="name-badge">${inputContact.value}</span>`;
  console.log(contactData);

  step++;
  // reinicia el typed y ponlo a mostrar emails
  if (step == 1) {
    resetTyped(emailHolders);
  }
  // mensaje sera escrito asi que oculta el input y reemplazalo por un textarea
  if (step == 2) {
    inputContact.style.display = "none";
    inputMesssage.style.display = "block";
    inputMesssage.focus();
    inputMesssage.style.resize = "vertical";
    inputMesssage.rows = 3;
    next.disabled = true;

    send.disabled = false;
    send.classList.add("btn-primary");
  }

  // mensaje enviado
  if (step == 3) {
    step = 0;
    inputMesssage.value = "";
  }

  // reinicia el valor
  inputContact.value = "";
  labelInput.innerHTML = labelMessage[step];
});

send.addEventListener("click", function (e) {
  e.preventDefault();
  contactData[nTL[step]] = inputContact.value;
  // sending progress button

  send.innerText = "Sending...";
  // simulacion de peticion a api
  var timer = setTimeout(function () {
    // revert all to original state
    send.innerText = "SEND!";

    send.classList.remove("btn-primary");
    inputContact.value = "";
    inputMesssage.value = "";
    inputContact.style.display = "block";
    inputMesssage.style.display = "none";
    console.log(contactData);

    next.disabled = false;
    send.disabled = true;
    dataBadges.innerHTML = "";

    successAlert.style.display = "block";
    step = 0;
    labelInput.innerHTML = labelMessage[step];
    resetTyped(nameHolders);
  }, 3000);
});

// sincroniza el valor del textarea con el input original
inputMesssage.addEventListener("keyup", function (e) {
  inputContact.value = e.target.value;
});

// si la data es valida activa o desactiva el boton de next
inputContact.addEventListener("keyup", function (e) {
  if (validateData(inputContact.value, nTL[step])) {
    next.disabled = false;
  } else {
    next.disabled = true;
  }
});

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
