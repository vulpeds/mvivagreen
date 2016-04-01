angular.module('mvivagreen')
.config(function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		templateUrl: './templates/pages/home/index.html',
		controller: 'HomeIndexController',
		controllerAs: 'indexController'
	});

	$stateProvider.state('news', {
		url: '/noticia/{categoria}/{id}',
		templateUrl: './templates/pages/home/index.html',
		controller: 'HomeIndexController',
		controllerAs: 'indexController'
	});

})