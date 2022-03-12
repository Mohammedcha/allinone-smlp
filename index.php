
<!DOCTYPE html>
<?php include("config/config.php"); ?>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	<head>
		<title><?php echo $lp_title; ?></title>
		<meta name="description" content="<?php echo $lp_description; ?>" />    
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />       
		<link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"/>
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"/>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Saira:300,400,700,900&display=swap"/> 
		<link rel="stylesheet" href="css/bootstrap.min.css"/>  
		<link rel="stylesheet" href="css/animate.css"/>
		<link rel="stylesheet" href="css/magnific-popup.css"/>
		<link rel="stylesheet" href="css/style.css"/>	
	</head>
    <body oncontextmenu="return false;">
		<div id="app-particles"></div>
		<div class="platform-navigation-wrapper">
			<div class="row">
				<div class="col-4">
					<div class="platform-nav-item">
						<div class="platform-nav-item-content platform-item-twitter">
							<div>
								<i class="fab fa-twitter"></i>
								<img src="img/logo-tw.png" class="logo-text img-fluid" />
								<div class="tool-title-wrapper">Followers Generator</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-4">
					<div class="platform-nav-item">
						<div class="platform-nav-item-content platform-item-instagram">
							<div>
								<i class="fab fa-instagram"></i>
								<img src="img/logo-ig.png" class="logo-text img-fluid" />
								<div class="tool-title-wrapper">Followers Generator</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-4">
					<div class="platform-nav-item">
						<div class="platform-nav-item-content platform-item-tiktok">
							<div>
								<img src="img/logo-s-tt.png" class="logo-s img-fluid" />
								<img src="img/logo-tt.png" class="logo-text img-fluid" />
								<div class="tool-title-wrapper">Followers Generator</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section class="content-section">
			<div class="container">
				<div class="main-content animated bounceIn">
					<div class="network-intro-header network-intro-header-tw">
						<i class="fab fa-twitter"></i>
						<img src="img/logo-tw.png" class="logo-text img-fluid" />
						<div class="tool-title-wrapper">Followers Generator</div>
					</div>
					<div class="network-intro-content network-intro-content-tw">
						<div class="intro-title-wrapper">
							<span class="intro-step-title-number">1.</span><span class="intro-step-title">Enter your Twitter Username</span>
							<div class="intro-instructions-wrapper">
								<span>Make sure to enter a correct twitter username without any additional symbols.</span>
							</div>
						</div>
						<div class="intro-form-wrapper">
							<div class="username-input-wrapper">
								<i class="fab fa-twitter"></i>
								<input type="text" class="username-input" placeholder="Twitter Username..." />
							</div>
							<div class="button-wrapper">
								<div class="button button-1"><span>Continue</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</body>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>	
	<script type="text/javascript" src="js/jquery.magnific-popup.min.js"></script>
	<script type="text/javascript" src="js/particles.min.js"></script>
	<script type="text/javascript" src="js/jquery.countTo.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
    <script> 
        document.onkeydown = function(e) {
        if(event.keyCode == 123) {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
        }
    </script>
</html>