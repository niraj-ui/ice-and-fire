app.controller('bookDetailsController',['$http','$routeParams','myservices', function($http, $routeParams, myservices){
     var main = this;
    main.loadBookDetails =function(){
        main.bookid=$routeParams.bookid;
        myservices.loadAllBook()
            .then(function sucess(res){
            main.bdata=[];
            main.bdata=res.data[main.bookid];
            console.log(main.bdata);
        },
            function Error(res){
                console.log(res);
            })  
            
    } 
                              
}])