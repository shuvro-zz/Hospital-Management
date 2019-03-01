$(document).ready(function() {
 $(function(){
    $("form").submit(function(event) {
    event.preventDefault();
    var  staffLastName = $("#stafflastName").val();
    var  staffId = $("#staffId").val();
    var  password = $("#password").val();


    $.ajax({
      type: "GET",
      url: `http://localhost:3000/users?staffLastName=${staffLastName}&staffId=${staffId}&password=${password}`,
      success: function(data) {
       window.location.assign("index.html");
      }
    });
  });
});
});
