$(document).ready(function() {
    $(function() {
      $("form").submit(function(event) {
        event.preventDefault();
        var formData = {
          hospNo: $("#hospNo").val(),
          title: $("#title").val(),
          maritalStatus: $("#maritalStatus").val(),
          firstName: $("#firstName").val(),
          lastName: $("#lastName").val(),
          DOB: $("#DOB").val(),
          gender: $("#gender").val(),
          bloodgroup: $("#bloodgroup").val(),
          genotype: $("#genotype").val(),
          emailaddress: $("#emailaddress").val(),
          phoneNumber: $("#phoneNumber").val(),
          timeIn: $("#timeIn").val(),
          dateIn: $("#dateIn").val()
        };
  
        $.ajax({
          type: "POST",
          url: "http://localhost:3000/PatientInfo",
          data: formData,
          success: function(data) {
            alert("Patient Checked in successfully!");
            addToTable;
          }
        })
          .fail(function(data) {
            $("#detailList").removeClass("success");
            $("#detailList").addClass("error");
  
            if (data.responseText !== "") {
              $("#detailList").text(data.responseText);
            } else {
              $("#detailList").text(
                "Eewo! there is an error, please bear with us."
              );
            }
          });
          function addToTable(data){
            for(var i = 0; i<PatientInfo.length; i++){
                $("#tabVal").after("<tr id="newRow"></tr>");
                for(var j = 0; j<PatientInfo.i.length; j++){
                    $("#newRow").within("<th>PatientInfo[i][j]</th>")
                }
            }
          }









      });
    });
  
  
  
  
    
  });
  