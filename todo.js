$(document).ready(function(){

		$('#btn').click(function()
		{

			
			if(task.value.length==0)
			{
				alert("please enter question first");
			}
			else
			{
				var a=$('#task').val();
				$('#task').val(" ");
				/*var two=$('<div id="d2"></div>');*/
    			var chk = $("<div class='d'>"+'<input type="checkbox" name="chk"  class="checks" id="c1"/> '+'<label class="l">'+a+'</label>'+'<input type="text"  class="text1"/>'+" "+'<input type="button" class="edit btn btn-primary" value="Edit" />'+" "+'<input type="button" value="Delete" class="del btn btn-danger" />'+"</div>"+"<br />");
    			$("#box").append(chk);			
    			$('.del').on('click',function(){		
    			$(this).parent().remove();
    			});
    			$('.edit').on('click',function()
    			{
    			var b=$(this).parent().text();
    			$(this).parent('.d').children('.text1').val(b);	
    			});
    			$('.l').click(function()
    			{
    				var c=$(this).parent().children('.text1').val();
    				$(this).parent('.d').children('.l').text(c);
    				console.log(c);	
    				
    			});

    			$('input[name="chk"]').change(function(){
    				if($(this).prop("checked")==true)
    				{
    					$(this).parent('.d').appendTo('.box2');
    				}
    				else
    				{
    					$(this).parent('.d').appendTo('#box');
    				}
    			})
    		}
    	});

	});