angular.module('wageGap.makebargraph', [])
.controller('MakeBarGraphController', function ($scope) {

  $scope.selected = [];

  $scope.potentials = ['Age','Gender','Location','Occupation','Race'];

  $scope.profiles = [];

  $scope.toggle = function (item, list) {
    var i = list.indexOf(item);
    if(i > -1){
      list.splice(i, 1);
    } else {
      list.push(item);
    }
  };

  $scope.exists = function (item, list) {
    return list.indexOf(item) > -1;
  };

});
