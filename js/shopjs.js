$(document).ready(function() {
  $('#add').click(function() {
    var thing = $("#input").val();    
    $(".items").append("<li>"+thing+" <button class='remove'> Remove</button></li>");
    $("#input").val("");
  })


  $('.items').on('click', '.remove', function(e){

  	e.preventDefault(); $(this).parent().remove()
  });
});

