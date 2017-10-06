app.controller('housesDetailsontroller',['$http','$routeParams','myservices', function($http, $routeParams,myservices){
    var main=this;
    main.loadHousesDetails= function(){
        main.housesid=$routeParams.housesid;
        console.log(main.housesid)
        myservices.loadAllhouses()
        .then(function sucess(res){
            main.hdata=[];
            main.hdata=res.data[main.housesid];
            console.log(main.hdata);
        },
             function Error(res){
            console.log(res);
        }
             )
    }
    
}]);