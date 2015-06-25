myApp.controller("registerCtrl", function($scope, $http){
  $scope.register = function(user){
    if(user.password == user.password2){
      $http.post("/register", user)
      .success(function(result){
        console.log(result);
        $(".userInput").notify(result.message, {className: result.type, position: "right"});
        console.log(result);
      });
    }else{
      $(".passInput").notify("Passwords do not match", {className: "error", position: "right"});
    }
  };
});
