// $(window).scroll(function(){
//     if($(window).scrollTop() > 0){
//         $('.navbar').css('background','green')
//     }else{
//         $('.navbar').css('background','#13314d')
//     }
// })

// navbar cach scroll man hình 
window.addEventListener('scroll', rove);

function rove() {
    // gọi đến đối tượng
    var top = document.querySelector('#navbar');
    var windowheight = window.innerHeight;
    // do kich thuoc
    var reavetop = document.querySelector('.container').getBoundingClientRect().top;
    var point = 900;
    // kiểm tra điệu kiện và add className
    if (reavetop < windowheight - point) {
        // top.classList.add('navbar-fixed-top');
        top.classList.add('transition');

    } else {
        // top.classList.remove('navbar-fixed-top');
        top.classList.remove('transition');

    }

}

// add json danh mục 
angular.module('myApp', []).controller('myCtr', ($scope, $http) => {
    $scope.listDanhMuc = [];
    $http.get('db/Subjects.js').then((reponse) => {
        $scope.listDanhMuc = reponse.data;
    })
})

