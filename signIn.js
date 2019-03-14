
    $("form#signInForm").submit(function(event) {
    event.preventDefault();
    var  staffLastName = $("#stafflastName").val();
    var  staffId = $("#staffId").val();
    var  password = $("#password").val();
    $.ajax({
      method: "GET",
      url: `http://localhost:3000/users?stafflastName=${staffLastName}`
    }).done(function(data) {
      //console.log(data);
      if (staffLastName === data[0].stafflastName && staffId === data[0].staffId && password === data[0].password) {
        location.replace('./index.html');
      } else {
        location.reload(true);
        alert('wrong details');
      }
    })
    //fail(function() {
    //  // location.reload(true);
    //   alert('Oops! there is an error.');
    // });
    alert("unauthorized user");
  });


