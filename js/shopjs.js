$(document).ready(function() {
	var thing = $("#input").val
    $('#add').click( (function(){
        $(".items").append("<li>+thing+"<button class="remove">Remove</button></li>);
    })
   });



