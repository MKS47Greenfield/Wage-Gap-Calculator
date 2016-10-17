angular.module('wageGap.makestatesgraph', [])
.controller('MakeStatesGraphController', function ($scope) {

  $scope.data = {
    selected: [],
    potentials: ['Age','Gender','Occupation','Race'],
    profiles: [],
    profilesnum: 0,
  };

  //initializes empty profiles with selected variables on choosing the number of people to compare
  $scope.initializeProfiles = function () {
    Number($scope.data.profilesnum);
    for(var i = 0; i < Number($scope.data.profilesnum) - 1; i++){
      $scope.data.profiles.push({number: i + 1});
      $scope.data.selected.forEach(function(variable) {
        $scope.data.profiles[i][variable] = null;
      });
      console.log($scope.data.profiles[i]);
    }
  };

  //toggles checkboxes
  $scope.toggle = function (item, list) {
    var i = list.indexOf(item);
    if(i > -1){
      list.splice(i, 1);
    } else {
      list.push(item);
    }
  };

  //checks if an variable is in selected array to display it as checked or not
  $scope.exists = function (item, list) {
    return list.indexOf(item) > -1;
  };
}]);
