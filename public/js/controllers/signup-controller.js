app.controller("signupCtrl", function($scope, $http, mainService) {

    $scope.register = function() {
        console.log($scope.data);
        mainService.postData($scope.data).then(function(){
        	alert('Registered successfully');
        	$scope.data = {};
        });
    }

});
