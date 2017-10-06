app.service('myservices', ['$http', function($http){
    this.url="https://anapioficeandfire.com/api/"
    this.loadAllBook=function(){
       return $http.get(this.url+'/books');
    };
    // books API call
     
     this.loadAllcharc=function(){
       return $http.get(this.url+'/characters');
    };
    
     this.loadAllhouses=function(){
       return $http.get(this.url+'/houses');
    };
    
}]);