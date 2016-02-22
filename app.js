angular.module("myApp",["ngMaterial","ui.router","ngMdIcons"])

   .config(function($stateProvider,$urlRouterProvider){
       $urlRouterProvider.otherwise("/");

       $stateProvider

           .state("home",{
           url: "/",
           templateUrl : "views/home/home.html",
           controller : "homeController"
           })

           .state("login",{
               url : "/login",
               templateUrl : "views/login/login.html",
               controller : "loginController"
           })
            .state("studentLogin",{
               url : "/studentLogin",
               templateUrl : "views/studentLogin/studentLogin.html",
               controller : "studentLoginController"
           })

           .state("adminDashBoard",{
               url : "/adminDashBoard",
               templateUrl : "views/adminDashBoard/adminDashBoard.html",
               controller : "adminDashBoardController"
           })

           .state("studentDashBoard",{
               url : "/studentDashBoard",
               templateUrl : "views/studentDashBoard/studentDashBoard.html",
               controller : "studentDashBoardController"
           })

   });