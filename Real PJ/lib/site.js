app.controller("siteCtrl", ["$scope", "$firebaseObject", "$firebaseArray",
	function($scope, $firebaseObject, $firebaseArray) {
		console.log("loaded record:");
		$scope.changeSite1 = function() {
			$scope.pageChange = "home";
		}

		$scope.changeSite2 = function() {
			$scope.pageChange = "teams";
		}

		$scope.changeSite3 = function() {
			$scope.pageChange = "profile";
		}
	}
]);