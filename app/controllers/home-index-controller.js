angular.module('mvivagreen')
.controller('HomeIndexController', function ($scope, $http) {

	var controller = this;

	//$scope = html

	$http.get('http://localhost/mvivagreen/remote/news.json')
	.then(function (results) {

		if(results.data.status == 'success') {

			controller.news = results.data.news;

		}

	})

})