$().ready(function() {

	$("#title").css("color", 'red').css("font-family", 'Tahoma').css("font-size", '2em');
	$("p").css("font-weight", "bold");

	$("#phide").click(function() {
		$("#ps").hide();
	});
	$("#pshow").click(function() {
		$("#ps").show();
	});

	$("#getinp").click(function() {
		$("#inp").val("Changed the text");
	});
});