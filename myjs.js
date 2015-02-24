$(document).ready(function(){
   		if($("#checkbox").is(':checked')){
    		$('input[type="submit"]').removeAttr('disabled');}
		else{
			$('input[type="submit"]').attr('disabled','disabled');}

   		var $radios = $('input:radio[name=sex]');
    	$radios.filter('[value=female]').prop('checked', true);
  		var x = Math.floor((Math.random() * 10) + 1);
   		$("#c1").text(x);
   		var y = Math.floor((Math.random() * 10) + 1);
   		$("#c2").text(y);
   	 
   		$("#sub").click(function(){
    		var z=($("#ctext").val());
        	if( z==(x+y)){
        	}
        	else{
        		alert("Captcha error");
        	}
        
   		}); 
    
    	$("#male").click(function(){
    		$("#male").addClass("male");
    		$("#female").removeClass("female");
    		var $radios = $('input:radio[name=sex]');
        	$radios.filter('[value=male]').prop('checked', true);

    	});
    	$("#female").click(function(){
    		$("#female").addClass("female");
    		$("#male").removeClass("male");
			var $radios = $('input:radio[name=sex]');
        	$radios.filter('[value=female]').prop('checked', true);    
    	});
    	$("#checkbox").click(function(){
    		if($("#checkbox").is(':checked')){
    			$('input[type="submit"]').removeAttr('disabled');}
			else{
				$('input[type="submit"]').attr('disabled','disabled');}

    	}); 	  
    });