/*
	This is the definition of the angular service
*/

angular.module("StuMod").service("StuSvc", StuSvc);
StuSvc.$inject = ['$http'];
function StuSvc($http) {
	var self = this;
	self.about = "Angular service";
	self.all = [
		{ Name: 'Cindy', Sat: 1600, Gpa: 4.0, College: 'Harvard' },
		{ Name: 'Nick', Sat: 1400, Gpa: 3.8, College: 'Yale' },
		{ Name: 'Ken', Sat: 1400, Gpa: 3.8, College: 'Penn' },
		{ Name: 'Greg', Sat: 400, Gpa: 0.0, College: 'Not accepted anywhere!' }
	];
	/*
	$http.get("http://localhost:60863/api/student")
		.then(function(resp) { // success
			resp.data.forEach(function(student) {
				students.push({
					Name: student.Name,
					Sat: student.Sat,
					Gpa: student.Gpa
				})
			})
		},function(err) { // failure

		});

	return {
		about: "About Angular Service",
		all: students
	};
	*/
};