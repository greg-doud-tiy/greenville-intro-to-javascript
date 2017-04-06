$().ready(function() {

	//var webapi = "http://localhost:62553/Test";
	var webapi = "http://webapigreenville20170308085510.azurewebsites.net/Test";

	$("#getMovies").click(function() {

		$.get(webapi, function(resp) {
		     console.log(resp);
		     render(resp);
		});

	});

	function render(movies) {
		var ctrl = $("#movies");
		ctrl.empty();
		for(idx in movies) {
			var title = movies[idx].Name;
			var desc = movies[idx].Description;
			ctrl.append("<tr data-idx=" + idx + "><td>" + title + "</td><td>" 
				+ desc + "</td></tr>");
		}
	}

});