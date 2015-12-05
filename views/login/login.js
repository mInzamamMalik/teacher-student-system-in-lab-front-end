

angular.module("myApp")
    .controller("loginController", function ($scope, $rootScope, $http, $state) {


        $scope.login = function(){

            $http({
                method: "post",
                url: "http://localhost:3000/login",
                data: {
                    email: $scope.user.email,
                    password: $scope.user.password
                }
            }).success(
                function (a) {
                    console.log(a);
                    $rootScope.response = a;

                    if (a.adminStatus == "admin") {

                        $state.go("adminDashBoard");

                    } else if (a.adminStatus == "user") {

                        $state.go("studentDashBoard");

                    } else if (a.adminStatus == undefined) {
                        console.log("unable to sign in");
                        $scope.loginErrorMessage = true;

                        setTimeout(function () {
                            $scope.loginErrorMessage = false;
                        }, 3000)
                    }

                }
            );

            /* $http.post("http://localhost:3000/login",{n : "dfgfd"},{})
             .then(function(a) {
             console.log(a);
             $scope.response = a;
             });*/

        }
    });

/*
 post("http://localhost:3000/login",{user: user,password: pass}, function(data){
 if(data==='done')
 {
 alert("login success");
 }
 });


 body : {
 "data": "",
 "status": 200,
 "config": {
 "method": "POST",
 "transformRequest": [ null ],
 "transformResponse": [ null ],
 "url": "http://localhost:3000/login",
 "data": {
 "n": "dfgfd"
 },

 "headers": {
 "Accept": "application/json, text/plain, *!/!*",
 "Content-Type": "application/json;charset=utf-8"
 }
 },
 "statusText": "OK"
 }*/
