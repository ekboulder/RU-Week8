//Setting an Angular module: myApp
angular.module ('myApp',[])

//Defining the Controller function: mainControllerFunc
var mainControllerFunc = function ($scope) {
	$scope.greeting = 'Hello from Angular'

}

//Registering the controller: mainController
angular.module('myApp').controller('mainController',['$scope',mainControllerFunc])
