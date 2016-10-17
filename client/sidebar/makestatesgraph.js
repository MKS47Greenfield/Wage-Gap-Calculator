//it would be good to refactor to not need two separate controllers/html skeletons for bar and state
//since they share so much code in common

angular.module('wageGap.makestatesgraph', [])
.controller('MakeStatesGraphController', ['$scope', function ($scope) {
<<<<<<< d1af93796ea41591de33786268bcb0be0a91f9a7

  $scope.data = {
    selected: [],
    potentials: [
      // 'Age',//leaving out age to decrease the number of necessary API variables for basic skeleton
      'Gender',
      'Occupation',
      'Race'
    ],
    profiles: [],
    profilesnum: 0,
    options: {
      // age: ['15-19','20-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','60-65'],
      Gender: ['Male', 'Female'],
      Occupation: [
        'Agriculture, Forestry, Fishing, and Hunting, and Mining',
        'Construction',
        'Manufacturing',
        'Wholesale Trade',
        'Retail Trade',
        'Transportation and Warehousing and Utilities',
        'Information',
        'Finance and Insurance, and Real Estate, and Rental and Leasing',
        'Professional, Scientific, and Management, and Administrative, and Waste Management Services',
        'Educational Services, and Health Care and Social Assistance',
        'Arts, Entertainment, and Recreation, and Accommodation and Food Services',
        'Other Services, Except Public Administration',
        'Public Administration',
        'Military'
      ],
      Race: ['White','African-American/Black','American Indian/Alaskan Native','Asian','Pacific Islander','Latino']
    }
  };

  //initializes empty profiles with selected variables on choosing the number of people to compare
  $scope.initializeProfiles = function () {
    $scope.data.profiles = [];
    for(var i = 0; i < Number($scope.data.profilesnum); i++){
      // +1 /-1 to deal with 0-indexed profile array versus normal counting of number of people
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

=======

  $scope.data = {
    selected: [],
    potentials: [
      // 'Age',//leaving out age to decrease the number of necessary API variables for basic skeleton
      'Gender',
      'Occupation',
      'Race'
    ],
    profiles: [],
    profilesnum: 0,
    options: {
      // age: ['15-19','20-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','60-65'],
      Gender: ['Male', 'Female'],
      Occupation: ['Programmer'],
      Race: ['White','African-American/Black','American Indian/Alaskan Native','Asian','Pacific Islander']
    }
  };

  //initializes empty profiles with selected variables on choosing the number of people to compare
  $scope.initializeProfiles = function () {
    $scope.data.profiles = [];
    for(var i = 0; i < Number($scope.data.profilesnum); i++){
      // +1 /-1 to deal with 0-indexed profile array versus normal counting of number of people
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

>>>>>>> sidebar checkboxes working, issues binding data from person number select
  //checks if an variable is in selected array to display it as checked or not
  $scope.exists = function (item, list) {
    return list.indexOf(item) > -1;
  };
}]);
