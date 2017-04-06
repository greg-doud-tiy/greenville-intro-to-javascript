$().ready(function() {

	var nbr = 0;

	$("#inc").click(function() {
		$("#aNbr").val(++nbr);
	});
	$("#dec").click(function() {
		$("#aNbr").val(--nbr);
	});

});