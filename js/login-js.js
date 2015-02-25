$(document).ready(function(){
	$("#sub").click(function(){
        var a=($("#username").val());
        var b=($("#password").val());
        if( a==""||b==""){
        	alert("Please Enter valid username or password");
        }
    }); 
    $("#username").blur(function(){
        var a=($("#username").val());
        if( a==""){
        	$("#username").removeClass("input");
            $("#username").addClass("warning");
            $("#username-warning").removeClass("username-warning-off");
            $("#username-warning").addClass("username-warning-on");

        }
        else{
            $("#username").addClass("input");
            $("#username").removeClass("warning");
            $("#username-warning").removeClass("username-warning-on");
            $("#username-warning").addClass("username-warning-off");          
        } 
    });
    $("#password").blur(function(){
        var a=($("#password").val());
        if( a==""){
            $("#password").removeClass("input");
            $("#password").addClass("warning");
            $("#password-warning").removeClass("password-warning-off");
            $("#password-warning").addClass("password-warning-on");

        }
        else{
            $("#password").addClass("input");
            $("#password").removeClass("warning");
            $("#password-warning").removeClass("password-warning-on");
            $("#password-warning").addClass("password-warning-off");          
        } 
    });

});