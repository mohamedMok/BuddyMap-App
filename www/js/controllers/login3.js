/*
* Controller of the login3 page
*/
phonecatControllers.controller('LoginCtrl3', function ($scope, $location, $rootScope, user) {
  // Labels : English
  var engLabels = {
    explain : "Subscribe or register with email",
    placeholder : "Nickname",
    next : "Next",
    back : "Back",
    nickeNameAlert : "Filling your nickname is required"
  },
  // Labels : French
  frLabels = {
    explain : "Inscrit ou connecte toi avec l'email",
    placeholder : "Pseudo",
    next : "Suivant",
    back : "précédent",
    nickeNameAlert : "Votre pseudo est manquant"
  };

  // Setting the language
  if($rootScope.language === "fr")
    $scope.labels = frLabels;
  else 
    $scope.labels = engLabels;

  $scope.email = $rootScope.email;
  $scope.password = $rootScope.password;

  $scope.back = function(){
    $location.path('/login2');
  }
  
  $scope.$on('logIn', function(event, loginObj){
		 if(loginObj.logIn){
			 delete $rootScope.password; 
			 delete $scope.password;
			 $rootScope.token = loginObj.token;
			 $location.path('/home');
		 }else{
			 
		 }
  });

  $scope.$on('register', function(event, register){
	  if(register.isRegistered){
		  user.logIn(register.user.mail, register.user.password);
	  }else{
		  
	  }
	 
  });
  
  $scope.next = function(){
    if(typeof $scope.nickname !== 'undefined'){
      user.register($scope.email, $scope.password, $scope.nickname);
    } else{
      alert($scope.labels.nickeNameAlert);
    }
  }
});