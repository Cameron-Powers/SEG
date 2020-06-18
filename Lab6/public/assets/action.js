// jQuery that will "listen" to the html niceSurvey.html
$(document).ready(function(){

  $('form').on('submit', function(){
    
    var item = $('form input');
    var niceSurvey = {q1: q1.val(), q2: q2.val(), q3: q3.val(), q4: q4.val(), q5: q5.val(), q6: q6.val()};
    console.log(item.serializeArray());

    $.ajax({
      type: 'POST',
      url: '/niceSurvey',
      data: niceSurvey,
        success: function(data){
          // do something with the data via front-end framework
          
          // Make the submit button red, disabled and saying Thank you
          $("#bb").css("background-color", "red");
          $("#bb").prop("disabled", "true");
          $("#bb").text("Thank you!");
          location.reload();
        }
      });
      return false;
  });
});
