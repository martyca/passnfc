myApp.controller("loginCtrl", function($scope, $http){
  $scope.login = function(user){
    $http.post("/login", user)
    .success(function(result){
      $(".userInput").notify(result.username + " logged in", {className: "success", position: "right"});
      console.log(result);
    })
    .error(function(result){
      $(".userInput").notify(result, {className: "error", position: "right"});
      console.log(result);
    });
  };
});
