$(document).ready(function(){
	
    	$("#button").click(function(){
    		debugger
    	if($("#First_name").val()== ""|| $("#Last_name").val()== "" || $("#E_mail").val()== ""|| $("#A_ddress").val()== "")
    	{
    		alert("Please fill the form");
    	}
    	else{
    	$("#ShowME11").hide();
		$("#showMe").show();
		var Firstname=$("#First_name").val();
		$("#demo1").text(Firstname);
		var Lastname=$("#Last_name").val();
		$("#demo2").text(Lastname);
		var Email=$("#E_mail").val();
		$("#demo").text(Email);
		var Address=$("#A_ddress").val();
	    $("#demo3").text(Address);
	}
})
});