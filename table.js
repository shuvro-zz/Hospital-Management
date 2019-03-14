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
        `<a href=http://localhost:3000/PatientInfo/${
          info.id
        } type="button" id="edit" class="btn btn-secondary my-2" data-toggle="modal" data-target=".bd-example-modal-xl">Edit</a>`
      );
      var deleteBtn = $(
        `<a href=http://localhost:3000/PatientInfo/${
          info.id
        } type="button" id="delete" class="btn btn-danger my-2">Delete</a>`
      );

      tr.append(editBtn);
      tr.append(deleteBtn);

      $("#tabVal").append(tr);

      $(deleteBtn).click(function(e) {
        e.preventDefault();
        var url = $(this).attr("href");
       if( confirm("Are you sure?")){
        $.ajax({
          type: "DELETE",
          url,
          success: function(data) {
            location.reload(true);
            alert("Delete Successful");
          }
        });
      }
      });

      $(editBtn).click(function(e) {
        e.preventDefault();
        var url = $(this).attr("href");
        $.ajax({
          type: "GET",
          url,
          success: function(info) {
            $("input[type='text']#title").val(`${info.title}`);
            $("input[type='text']#maritalStatus").val(`${info.maritalStatus}`);
            $("input[type='text']#firstName").val(`${info.firstName}`);
            $("input[type='text']#lastName").val(`${info.lastName}`);
            $("input[type='text']#DOB").val(`${info.DOB}`);
            $("input[type='text']#gender").val(`${info.gender}`);
            $("input[type='text']#bloodgroup").val(`${info.bloodgroup}`);
            $("input[type='text']#genotype").val(`${info.genotype}`);
            $("input[type='text']#emailaddress").val(`${info.emailaddress}`);
            $("input[type='text']#phoneNumber").val(`${info.phoneNumber}`);
            $("input[type='text']#timeIn").val(`${info.timeIn}`);
            $("input[type='text']#dateIn").val(`${info.dateIn}`);
            $("input[type='text']#hospNo").val(`${info.hospNo}`);
            $("#save").attr("value", info.id);
           

          }
        });
      });
    }

    $("#ajax-form").submit(function(e) {
      e.preventDefault();
      var id = $("#save").attr("value");     

      var title = $("input[type='text']#title").val();
      var maritalStatus = $("input[type='text']#maritalStatus").val();
      var firstName = $("input[type='text']#firstName").val();
      var lastName = $("input[type='text']#lastName").val();
      var DOB = $("input[type='text']#DOB").val();
      var gender = $("input[type='text']#gender").val();
      var bloodgroup = $("input[type='text']#bloodgroup").val();
      var genotype = $("input[type='text']#genotype").val();
      var emailaddress = $("input[type='text']#emailaddress").val();
      var phoneNumber = $("input[type='text']#phoneNumber").val();
      var timeIn = $("input[type='text']#timeIn").val();
      var dateIn = $("input[type='text']#dateIn").val();
      var hospNo = $("input[type='text']#hospNo").val();

      var modalObject = {
        title,
        maritalStatus,
        firstName,
        lastName,
        DOB,
        gender,
        bloodgroup,
        genotype,
        emailaddress,
        phoneNumber,
        timeIn,
        dateIn,
        hospNo
      };

      $.ajax({
        type: "PUT",
        url: `http://localhost:3000/PatientInfo/${
          id
        }`,
        data: modalObject,
        success: function() {
          console.log(modalObject);
          alert("Patient Updated!");
          window.location.assign("table.html");
        }
      });
    });
  });
});
