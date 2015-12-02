

angular.module("myApp")
    .controller("loginController",function($scope,$http){

        $scope.login = function(){
            $http.body.email = $scope.user.email;
            $http.body.password = $scope.user.password;

            $http.get("http://localhost:3000/login");

        }
    });