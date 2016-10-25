commentApp.controller('mainController', function(Comment, $scope, $http) {
		$scope.commentData = {};
		$scope.loading = true;

		Comment.get()
			.success(function(data) {
				$scope.comments = data;
				$scope.loading = false;
			});

		$scope.submitComment = function() {
			$scope.loading = true;
			Comment.save($scope.commentData)
				.success(function(data) {
					$scope.commentData = {};
					Comment.get()
						.success(function(getData) {
							$scope.comments = getData;
							$scope.loading = false;
						});

				})
				.error(function(data) {
					console.log(data);
				});
		};
		$scope.deleteComment = function(id) {
        $scope.loading = true;


        Comment.destroy(id)
            .success(function(data) {


                Comment.get()
                    .success(function(getData) {
                        $scope.comments = getData;
                        $scope.loading = false;
                    });

            });
    };
});
