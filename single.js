$(document).ready(function() {
    $(function() {
      $("form").submit(function(event) {
        event.preventDefault();
         var phoneNumber= $("#phoneNumber").val();

         $.ajax({
            type: "GET",
            url: `http://localhost:3000/PatientInfo?phoneNumber=${phoneNumber}`,
            success: function(data) {
             
            }
          });
      });
    });
  });
  