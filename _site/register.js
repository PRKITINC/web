$(function () {

    $("#myButton").click(function(){
      console.log("omg")
      let form = document.getElementById("input")
      if (form.elements[1].value != form.elements[2].value) {
          alert("Passwords do not match!")
      } else {
          $.post("http://162.243.143.124/user/register", $('form').serialize())
          .done((data) => {
            alert(data);
          })
      }
    })

});
