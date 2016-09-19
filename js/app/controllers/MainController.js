function MainController($scope) {
  $scope.name   = "Mr.NoEgo";
  $scope.email  = "mrnoego@email.com";
  $scope.phone  = "123-456-7890";
}

angular
  .module('app')
  .controller('MainController', MainController);