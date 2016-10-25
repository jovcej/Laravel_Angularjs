<!doctype html>
<html lang="en" ng-app="commentApp">
	<head>
		<meta charset="UTF-8">
		<title>Comments</title>

		<!-- CSS files -->
		<link rel="stylesheet" href="packages/css/bootstrap.min.css">
		<style>
			body        { padding-top:30px; }
			form        { padding-bottom:20px; }
			.comment    { padding-bottom:20px; }
		</style>

		<!-- JS files -->
		<script src="packages/angular.min.js"></script>
		<script src="packages/angular-route.min.js"></script>
		<script src="packages/jquery-3.1.1.min.js"></script>

    <!-- load application -->
		<script src="js/app.js"></script>
    <!-- load controllers -->
    <script src="js/controllers/mainCtrl.js"></script>
    <script src="js/controllers/statsCtrl.js"></script>
    <script src="js/controllers/aboutCtrl.js"></script>
    <!-- load services -->
    <script src="js/services/commentService.js"></script>

	</head>
	<body class="container">
		<header>
			<div class="col-md-8 col-md-offset-2">
				<ul class="nav nav-tabs">
					<li class="active"><a href="#/comments">Comments</a></li>
					<li><a href="#/stats">Stats</a></li>
					<li><a href="#/about">About</a></li>
				</ul>
			</div>
		</header>
		<div class="col-md-8 col-md-offset-2">
			<div ng-view></div>
		</div>
	</body>
</html>
