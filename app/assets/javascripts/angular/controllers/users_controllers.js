var myApp = angular.module('myapp',['ngRoute', 'ngResource']);

//Adding angular factory: This interacts with the server and processes the json response
//Users factory gets the collection of users and creates a user
myApp.factory('Users',['$resource', function($resource){
	return $resource('/users.json', {},{
		query: { method: 'GET', isArray: true },
		create: { method: 'POST'}
	});
}]);

//User factory gets the user details, updates the user or deletes the user
myApp.factory('User', ['$resource', function($resource){
	return $resource('/users/:id.json', {}, {
		show: { method: 'GET'}
		update: { method: 'PUT', params: {id: '@id'}},
		delete: { method: 'DELETE', params: {id: '@id'}}
	});
}]);