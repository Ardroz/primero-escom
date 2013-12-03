var dijkstraAppModule  = angular.module('dijkstraApp', []);

dijkstraAppModule.controller('DijkstraController', dijkstraController);

dijkstraController.$inject = ['$scope'];
function dijkstraController( scope ){

  scope.nodes = 0;
  scope.list = [];

  scope.temporal = {
    from: 0,
    to: 0,
    weight: 0
  };

  scope.connections = [];

  scope.setNodes = function () {
    var i = 0, len = scope.nodes;
    
    for (i = 0; i < len; i++ ){
      scope.list.push([]);
    }

    console.log(scope.list);
  };

  scope.addConnection = function () {
    scope.connections.push(scope.temporal);

    scope.list[scope.temporal.from].push(scope.temporal.to);
    console.log(scope.list);
    scope.temporal = {
      from: 0,
      to: 0,
      weight: 0
    };

  };
}
