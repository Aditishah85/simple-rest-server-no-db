$(document).ready(function () {
  $("body").load(pageload());
  function pageload(){
 
 $.ajax({url: "/shops", 
              type: 'GET',
              success: function(result){              
                   	var template = Handlebars.compile($("#get-template").html());
                    $("#data").append(template(result));
	             }               
           
            }); 
    }
$("form").submit(function(event){
	  
      var itemname = $("#ItemName").val();
      var desc = $("#Desc").val();
      var price = $("#Price").val();
      
      $.ajax({url: "/shops", 
              type: 'POST',
              data: {"Item_Name": itemname,"Desc": desc, "Price": price},
              success: function(result){
                var template = Handlebars.compile($("#get-template").html());
              $("#data").append(template([result]));
              }           
            });        
     ;
	  $("#ItemName").val('');
      $("#Desc").val('');  
      $("#Price").val('');	      
      event.preventDefault();  
});  

$("div").on('click', '.glyphicon', function(event) {
     
       var cnfrm = confirm("Are you sure you want to delete it??");
        
       
        if (cnfrm) {
            var del_item = $(this).prop("id");

            var del_item1 = $(this).closest("div");

            $.ajax({

                url: '/shops/' + del_item,
                type: "DELETE",
                data: {
                    "id": del_item
                }

                
                
                
            });
              del_item1.remove();
             

        }
    });        
})