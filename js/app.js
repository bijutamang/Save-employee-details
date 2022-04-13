const form = document.querySelector(".details-collector-form"),
  email = document.getElementById("email"),
  fullName = document.getElementById("full-name"),
  mobileNumber = document.getElementById("mobile-number"),
  role = document.getElementById("role"),
  cards = document.querySelector(".cards");
// show the localStorage item if page is reload

document.addEventListener("DOMContentLoaded", function() {
  // steps
  // get the items from the localStorage
  let empDates = JSON.parse(localStorage.getItem("emloyeDetails"));

  empDates.forEach(function(data) {
    // create an element
    const div = document.createElement("div");

    // add a class
    div.className = "card";

    div.innerHTML = ` <b>Officer's desk</b>
    <div class="card-inner">
        <div class="card-inner-item">
            <b>Role</b>
            <p>${data.role}</p>
        </div>
        <div class="card-inner-item">
            <b>Contact</b>
            <p>${data.email}</p>
            <p class="num">${data.mobileNumber}</p>
        </div>
        <div class="card-inner-item">
            <b>Full name</b>
            <p>${data.fullName}</p>
        </div>
    </div>
    <div>
        <div class="trash-container"><i class="fa fa-trash trash-icon"></i></div>
    </div>
    `;

    cards.appendChild(div);
  });

  // loop over the items and show it to ui
});
form.addEventListener("submit", function(e) {
  // stpes

  // get the value from the inputs

  //   check if all the inputs are filled correctly sabai kura vary pxi mtr save hunxh
  if (
    email.value !== "" &&
    fullName.value !== "" &&
    mobileNumber.value !== "" &&
    role.value !== ""
  ) {
    // create a div
    const div = document.createElement("div");

    // add class to the create div
    div.className = "card";

    // add the html codes/content to the innerHTMl property the newly created element
    let htmlTemplate = ` <b>Officer's desk</b>
    <div class="card-inner">
        <div class="card-inner-item">
            <b>Role</b>
            <p>${role.value}</p>
        </div>
        <div class="card-inner-item">
            <b>Contact</b>
            <p>${email.value}</p>
            <p class="num">${mobileNumber.value}</p>
        </div>
        <div class="card-inner-item">
            <b>Full name</b>
            <p>${fullName.value}</p>
        </div>
    </div>
    <div>
        <div class="trash-container"><i class="fa fa-trash trash-icon"></i></div>
    </div>
    `;
    // add template to the div
    div.innerHTML = htmlTemplate;

    // show it on the screen ui
    // cards vanny class sakinu vanda antima yo innerhtml ly haldylo
    cards.insertAdjacentElement("beforeend", div);

    // store data on localStorage
    if (localStorage.getItem("emloyeDetails") == null) {
      let arr = [];
      arr.push({
        email: email.value,
        mobileNumber: mobileNumber.value,
        role: role.value,
        fullName: fullName.value
      }); // push vanny ly arr ma item add garcha
      localStorage.setItem("emloyeDetails", JSON.stringify(arr));
    } else {
      let arr = [];
      arr = JSON.parse(localStorage.getItem("emloyeDetails")); // java  lai json ma parse garyko
      arr.push({
        email: email.value,
        mobileNumber: mobileNumber.value,
        role: role.value,
        fullName: fullName.value
      }); // push vanny ly arr ma item add garcha
      localStorage.setItem("emloyeDetails", JSON.stringify(arr));
    }

    // clear the input fields
    email.value = "";
    fullName.value = "";
    mobileNumber.value = "";
    role.value = "";

    // focus on the email input
    email.focus();

    // sucees message
    // create element to show error message
    const succes = document.createElement("div");

    // add class
    succes.className = "success-message";

    // add text for the show message
    succes.textContent = "Suceesfully save the data";

    form.insertAdjacentElement("beforebegin", succes);

    // set time for delete message suceesfully
    setTimeout(function() {
      if (document.querySelector(".success-message") !== null) {
        succes.remove();
      }
    }, 4000);
  } else {
    // create element to show error message
    const error = document.createElement("div");

    // add class
    error.className = "error-message";

    // add text for the show message
    error.textContent = "Please fill the in the fields";

    form.insertAdjacentElement("beforebegin", error);

    // make that eeror message deleted in 4 seconds
    setTimeout(function() {
      if (document.querySelector(".error-message") !== null) {
        error.remove();
      }
    }, 4000);
  }

  e.preventDefault();
});

// delect user data
// const removes = document.querySelector(".trash-container");

// removes.addEventListener("click", function () {
//   div.remove();
// });

// user ly kata kata click garcha web ma hyrnu
/*
document.body.addEventListener("click", function(e) {
  console.log(e.target);
})
*/

// delete Data from localStorage and ui
document.body.addEventListener("click", function(e) {
  // delete from ui
  if (e.target.classList.contains("trash-icon")) {
    console.log(e.target.parentElement.parentElement.parentElement.remove());
  }

  // delete from localStorage
  let emloyeDetails = JSON.parse(localStorage.getItem("emloyeDetails"));

  // took phone number form the ui
  let phoneNum = document.querySelector(".num");

  let filterDetails = emloyeDetails.filter(function(empDetails) {
    return phoneNum !== empDetails.mobileNumber;
  });
  localStorage.setItem("emloyeDetails", JSON.stringify(filterDetails));
});
