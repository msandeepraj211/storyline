var myApp = angular.module('myApp',[]);
myApp.controller('MainCtrl',('scope', function($scope){
    window.scope=$scope;

    $scope.pages=[];
    $scope.pages.push({title:'Title1',description:'Description1',videomp:'./videos/movie.mp4'});
    $scope.pages.push({title:'Title2',description:'Description2',videomp:'./videos/movie.mp4'});
    $scope.pages.push({title:'Title3',description:'Description3',videomp:'./videos/bs3.mp4'});
    $scope.pages.push({title:'Title4',description:'Description4',videomp:'./videos/movie.mp4'});
    $scope.pages.push({title:'Title5',description:'Description5',videomp:'./videos/bs3.mp4'});
    $scope.pages.push({title:'',description:'',videomp:'./videos/movie.mp4'});

    $scope.currentPage = 0;

    $scope.showPage = function(index){
        $scope.currentPage = index;
        if($scope.pages[$scope.currentPage].title =='' && $scope.pages[$scope.currentPage].description ==''){
            $('#content').css('display','none');/*
            $('#bgVideo').attr('muted','muted');*/
            $('#videoControlsBar').css('display','block');
        }else{
            $('#content').css('display','block');
            $('#videoControlsBar').css('display','none');

        }
        if(!$scope.$$phase) {
            $scope.$apply();
        }
    }
    $scope.showPage(0);



}));


