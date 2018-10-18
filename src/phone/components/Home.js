// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available


// function to log data to a TWX Stream for an event in the experience deemed 'significant' by the author of the experience.
$scope.app.logToTWX = function(AREventName,AREventDetail) {
  var TWXmodelID = 'PS-ARUserLogging-Stream';
  var serviceName = 'AddStreamEntry';
  
  var data = {};
  data.values = {};
  data.values.dataShape = {};
  data.values.dataShape.fieldDefinitions = {"ARExperience":{"name":"ARExperience","baseType":"STRING"},"AREventName":{"name":"AREventName","baseType":"STRING"},"AREventDetail":{"name":"AREventDetail","baseType":"STRING"}};
  data.values.rows = [];
  data.values.rows[0] = {"ARExperience":"AR-event-logging-to-TWX-example","AREventName":AREventName,"AREventDetail":AREventDetail};
  
//  twx.app.fn.triggerDataService(TWXmodelID, serviceName, data);
  
// Comment this line out or remove in actual implementation.  
//  alert('Logging Event to TWX: ' + AREventName);
  
};


// user pick event handling to toggle color of dynamic model items and log the pick to TWX.
$scope.$on('userpick', function(event,target,parent,edata){
  if (edata) {
    
    if ($scope.currentSelection) {
      tml3dRenderer.setColor($scope.currentSelection, '');
    }
    
    $scope.currentSelection = target + '-' + JSON.parse(edata).occurrence;
    tml3dRenderer.setColor($scope.currentSelection, 'rgba(255,10,10,0.8)')
    $scope.app.logToTWX($scope.currentSelection,'user pick of 3D model item');
    
  } else {
    console.log('Userpick evt w/o element data: '+ event.name + " target: " + target + " and parent:" + parent);
  }
});

