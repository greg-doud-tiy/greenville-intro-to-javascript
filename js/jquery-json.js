$().ready(function() {

	$("#getMovies").click(function() {

		$.get("http://localhost:62553/Test", function(resp) {
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
			ctrl.append("<tr><td>" + title + "</td><td>" + desc + "</td></tr>");
		}
	}

});