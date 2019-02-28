$(document).ready(function() {
  $.get("http://localhost:3000/PatientInfo", function(data) {
    console.log(data);

    for (const info of data) {
      // let hospNo = document.createElement("td")
      /*var tr = $("<tr></tr>")
            var td = $("<td></td>").html(info.hospNo)
            tr.append(td)*/
      var hospNo = $(`<td>${info.hospNo}</td>`);
      var title = $(`<td>${info.title}</td>`);
      var maritalStatus = $(`<td>${info.maritalStatus}</td>`);
      var firstName = $(`<td>${info.firstName}</td>`);
      var lastName = $(`<td>${info.lastName}</td>`);
      var DOB = $(`<td>${info.DOB}</td>`);
      var gender = $(`<td>${info.gender}</td>`);
      var bloodgroup = $(`<td>${info.bloodgroup}</td>`);
      var genotype = $(`<td>${info.genotype}</td>`);
      var emailaddress = $(`<td>${info.emailaddress}</td>`);
      var phoneNumber = $(`<td>${info.phoneNumber}</td>`);
      var timeIn = $(`<td>${info.timeIn}</td>`);
      var dateIn = $(`<td>${info.dateIn}</td>`);

      var tr = $(`<tr id='newRow'></tr>`);
      tr.append(hospNo);
      tr.append(title);
      tr.append(maritalStatus);
      tr.append(firstName);
      tr.append(lastName);
      tr.append(DOB);
      tr.append(gender);
      tr.append(bloodgroup);
      tr.append(genotype);
      tr.append(emailaddress);
      tr.append(phoneNumber);
      tr.append(timeIn);
      tr.append(dateIn);

      var editBtn = $(
        `<a href=http://localhost:3000/PatientInfo/${info.id} type="button" id="edit" class="btn btn-secondary my-2">Edit</a>`
      );
      var deleteBtn = $(
        `<a href=http://localhost:3000/PatientInfo/${info.id} type="button" id="delete" class="btn btn-danger my-2">Delete</a>`
      );

      tr.append(editBtn);
      tr.append(deleteBtn);

      $("#tabVal").append(tr);

      $(deleteBtn).click(function(e) {
          e.preventDefault();
          var url = $(this).attr("href")
        $.ajax({
          type: "DELETE",
          url,
          success: function(data) {
            alert("Successful Delete");
            location.reload(true);
          }
        });
      });

     



    }
  });
});
