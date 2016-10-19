//it would be good to refactor to not need two separate controllers/html skeletons for bar and state
//since they share so much code in common

angular.module('wageGap.makebargraph', [])
.controller('MakeBarGraphController', ['$scope', '$http', function ($scope, $http) {

  $scope.data = {
    selected: ['Gender'],
    potentials: [
      // 'Age',//leaving out age to decrease the number of necessary API variables for basic skeleton
      // 'Gender',//making age autoselected for skeleton version
      'Occupation',
      'Race',
      'State'
    ],
    profiles: [],
    profilesnum: 0,
    options: {
      // age: ['15-19','20-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','60-65'],
      Gender: ['Male', 'Female'],
      Occupation: [
        'Management occupations',
        'Business and financial operations occupations',
        'Computer and mathematical occupations',
        'Architecture and engineering occupations',
        'Life, physical, and social science occupations',
        'Community and social services occupations',
        'Legal occupations',
        'Education, training, and library occupations',
        'Arts, design, entertainment, sports, and media occupations',
        'Healthcare practitioner and technical occupations',
        'Healthcare support occupations',
        'Protective service occupations',
        'Food preparation and serving related occupations',
        'Building and grounds cleaning and maintenance occupations',
        'Personal care and service occupations',
        'Sales and related occupations',
        'Office and administrative support occupations',
        'Farming, fishing, and forestry occupations',
        'Construction and extraction occupations',
        'Installation, maintenance, and repair occupations',
        'Production occupations',
        'Transportation occupations',
        'Material moving occupations'
      ],
      Race: ['White','African-American/Black','American Indian/Alaskan Native','Asian','Pacific Islander','Other'],
      State: [
        "AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID",
        "IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM",
        "NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
      ]
    },
    person: {}
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
    }
  };

  //toggles checkboxes
  //doesn't toggle gender (auto-included in current model)
  // $scope.toggle = function (item, list) {
  //   if(item !== 'Gender'){
  //     var i = list.indexOf(item);
  //     if(i > -1){
  //       list.splice(i, 1);
  //     } else {
  //       list.push(item);
  //     }
  //   }
  // };

  //for radio buttons (delete if switched to checkboxes)
  $scope.toggle = function (item, list) {
    list.splice(1);
    list.push(item);
  };

//sends the query to the server
  $scope.query = function () {
    $http({
      method: 'GET',
      url: '/graph',
      data: $scope.data.person
    });
    console.log($scope.data.person);
  };

  //checks if an variable is in selected array to display it as checked or not
  $scope.exists = function (item, list) {
    return list.indexOf(item) > -1;
  };
}]);
