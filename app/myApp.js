var app = angular.module("myApp", ['ngRoute']);
// o day dat ma dieu khien roi dat them cai phan dang ki nua
app.config(function ($routeProvider) {
    $routeProvider
        .when("/gioiThieu", {
            templateUrl: "html/gioiThieu.html"
        })       
        // .otherwise({
        //     redierctTo: '/html/lienHe'

        // });



});


//     return {
//         require: 'ngModel',
//         link: function(scope, element, attr, mCtrl) {
//             function rePas(value) {
//                 var pass = scope.studentR.password;
//                 if (pass == value) {
//                     mCtrl.$setValidity('charE', true);
//                 } else {
//                     mCtrl.$setValidity('charE', false);
//                 }
//                 return value;
//             }
//             mCtrl.$parsers.push(rePas);
//         }
//     }
// });
// app.directive('fee', function() {
//     return {
//         require: 'ngModel',
//         link: function(scope, element, attr, mCtrl) {
//             function Sfee(value) {
//                 var pass = parseInt(value)
//                 if (pass >= 2000000) {
//                     mCtrl.$setValidity('charE', true);
//                 } else {
//                     mCtrl.$setValidity('charE', false);
//                 }
//                 return value;
//             }
//             mCtrl.$parsers.push(Sfee);
//         }
//     }
// });