app.controller('mycntrl', ['$http','$q','myservices', function($http, $q, myservices){
    
    var main=this;
    main.loadAllData=function(){
         
        var list1=$http.get(myservices.url+'/books')
        var list2=$http.get(myservices.url+'/characters')
        var list3=$http.get(myservices.url+'/houses')
        
        $q.all([list1,list2,list3])
        
        .then(function sucess(res){
            main.myData = []
            angular.forEach(res, function(font){
                 main.myData.push(font.data)
                

            })
            console.log(main.myData);
             
            
        }, function error(res){
            console.log(res);
        })
        
    }
}]);

