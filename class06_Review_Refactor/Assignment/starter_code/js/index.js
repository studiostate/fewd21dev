var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
/* our variables or options are nyc, sf, la, atx, or syd*/

$(document).ready(function() 
/*when loading document, load the following functions*/{
  for(i=0;i<cities.length;i++)
  /*qualifies our input????*/ {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }/*get id city-type, and putting in the variable cities as the list of cities???*/
  $('form').on('change', '#city-type',function(){
    var city = $('#city-type').val();
    /*creates city as a variable*/
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }/*when city in form is changed to nyc, change class of body to nyc */
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }/*when city in form is changed to sf, change class of body to sf */
    else if (city == 'LA') {
      $('body').attr('class','la');
    }/*when city in form is changed to la, change class of body to la */
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }/*when city in form is changed to atx, change class of body to austin */
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }/*when city in form is changed to syd, change class of body to sdney */
  });
});