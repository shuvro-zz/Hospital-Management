$("table").hide();
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var phoneNumber = $("#phoneNumber").val();

    $.ajax({
      type: "GET",
      url: `http://localhost:3000/PatientInfo?phoneNumber=${phoneNumber}`,
      success: function(data) {
        $("table").show();

        var hospNo = $(`<td>${data[0].hospNo}</td>`);
        var title = $(`<td>${data[0].title}</td>`);
        var maritalStatus = $(`<td>${data[0].maritalStatus}</td>`);
        var firstName = $(`<td>${data[0].firstName}</td>`);
        var lastName = $(`<td>${data[0].lastName}</td>`);
        var DOB = $(`<td>${data[0].DOB}</td>`);
        var gender = $(`<td>${data[0].gender}</td>`);
        var bloodgroup = $(`<td>${data[0].bloodgroup}</td>`);
        var genotype = $(`<td>${data[0].genotype}</td>`);
        var emailaddress = $(`<td>${data[0].emailaddress}</td>`);
        var phoneNumber = $(`<td>${data[0].phoneNumber}</td>`);
        var timeIn = $(`<td>${data[0].timeIn}</td>`);
        var dateIn = $(`<td>${data[0].dateIn}</td>`);

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

        $("#tabVal").append(tr);
      }
    });
  });
});
