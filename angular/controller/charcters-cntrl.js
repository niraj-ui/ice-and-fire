app.controller('charctersDetailsContoroller',['$http','$routeParams','myservices', function($http, $routeParams, myservices){
    
var main=this;
main.loadCharctersDetails=function(){
    main.charctersid=$routeParams.charid;
    myservices.loadAllcharc()      
    .then(function sucess(res){
        
        main.cdata=[];
         console.log(res.data[1]);
        main.cdata=res.data[main.charctersid];
//        console.log(main.cdata);
        },
         function Error(res){
        console.log(main.res);
    }
         )
}
    
}])