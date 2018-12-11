$( document ).ready(function() {
    // NOTE: update below once we have the details of the service 
   var id=1;
        $.ajax({
            url: "http://jsonplaceholder.typicode.com/users/"+ id,
            cache: false,
            success: function(data){
            $("#userName").text(data.username);
        }
      });

});
