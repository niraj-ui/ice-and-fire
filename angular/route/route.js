app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'view/index-view.html'
    })
    .when('/books/:bookid',{
        templateUrl:'view/books-details.html',
        controller:'bookDetailsController',
        controllerAs:'bctr'
         })  
    .when('/charcters/:charid',{
        templateUrl:'view/charcter-details.html',
        controller:'charctersDetailsContoroller',
        controllerAs:'chprint'
    })
    .when('/houses/:housesid',{
        templateUrl:'view/houses-details.html',
        controller:'housesDetailsontroller',
        controllerAs:'hprnt'
    })
    
}])