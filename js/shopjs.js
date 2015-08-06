$(document).ready(function() {
  $('#add').click(function() {
    var thing = $("#input").val();    
    $(".items").append("<li>"+thing+" <button class='remove'> Remove</button></li>");
  })
});
