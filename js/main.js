$(window).load(function() {
	////////////////
	// Particles
	//////////////// 
	particlesJS.load('app-particles', 'js/particlesjs-config.json');
	
	////////////////
	// Console Strings
	////////////////
	$console_message_1_1 = 'Connecting to';
	$console_message_1_2 = 'Database';
	$console_message_2 = 'Forwarding User ID for Account Username ';
	$console_message_3= 'Preparing to Generate Followers';
	$console_message_4 = 'Generating Followers...';	
	$console_message_5_1 = 'Successfully generated';
	$console_message_5_2 = 'followers for';
	$console_message_6 = 'Hiding Injection Traces';
	$console_message_7 = 'Performing Automatic Human Verification...';
	$console_message_8 = 'Automatic Human Verification Failed...';
	$console_message_9 = 'Please Verify Manually';
	
	$followers_amount_1 = "500";
	$followers_amount_2 = "1000";
	$followers_amount_3 = "2500";
	
	var s_n;
	var selected_network;
	var username;
	var $selected_followers_value;
	var $followers_icon;
	s_n = "tw";
	selected_network = "Twitter";
	$(document).on("click",".platform-nav-item-content", function(){
		if (!$(this).hasClass("active")) {
			$('.main-content').removeClass('animated bounceIn');
			$('.platform-nav-item-content').removeClass('active');
			if ($(this).hasClass("platform-item-tiktok")) { 
				$(this).addClass("active");
				s_n = "tt";
				selected_network = "TikTok";
			} else if ($(this).hasClass("platform-item-twitter")) { 
				$(this).addClass("active");
				s_n = "tw";
				selected_network = "Twitter";
			} else if ($(this).hasClass("platform-item-instagram")) { 
				$(this).addClass("active");				
				s_n = "ig";
				selected_network = "Instagram";
			}
			$.ajax({
				type: "GET",
				url: "dpart/dp1-"+s_n+".php",
				success: function(dataprocess){
					$('.main-content').html(dataprocess).hide().fadeIn();
					$(".main-content").addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('animated bounceIn');						
					});					
				}
			});
		}
	});
	$(document).on("click",".button-1", function(){
		if ($('.username-input').val() != '') {
			username = $('.username-input').val();
			$.ajax({
				type: "GET",
				url: "dpart/dp2.php",
				success: function(dataprocess){
					$('.network-intro-content').html(dataprocess).hide().fadeIn();
					$('.followers-value-1').html($followers_amount_1);
					$('.followers-value-2').html($followers_amount_2);
					$('.followers-value-3').html($followers_amount_3);					
					$(".email-step-content").addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('animated bounceIn');									
					});
					$selected_followers_value = '';
					function fixfollowersBox($followers_parent_class) {
						resetfollowersBoxes();
						if ($followers_parent_class.hasClass('followers-select-item-1')) {
							$selected_followers_value = $followers_amount_1;
							$followers_icon = "<img src='img/f-img-1.png' class='img-fluid f-img' />";
						}
						if ($followers_parent_class.hasClass('followers-select-item-2')) {
							$selected_followers_value = $followers_amount_2;
							$followers_icon = "<img src='img/f-img-2.png' class='img-fluid f-img' />";
						}
						if ($followers_parent_class.hasClass('followers-select-item-3')) {
							$selected_followers_value = $followers_amount_3;
							$followers_icon = "<img src='img/f-img-3.png' class='img-fluid f-img' />";
						}
						$followers_parent_class.addClass('active');
						$followers_parent_class.addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('animated jello');
						});	
					}	
					function resetfollowersBoxes() {
						var $followers_list = $('.followers-select-item-1, .followers-select-item-2, .followers-select-item-3');	
						if ($followers_list.hasClass('active')) {
							$followers_list.removeClass('active');
						}
					}
					$('.followers-select-item').click(function() {
						fixfollowersBox($(this));	
					});
				}
			});
		} else {
			$(".username-input-wrapper").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('shake animated');
			});
		}
	});
	$(document).on("click",".button-2", function(){
		if ($selected_followers_value == '') {
			$(".followers-select-wrapper").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('shake animated');
			});
		}								
		else {
			$('.content-section').append('<div class="320i"></div>');
			$.ajax({
				type: "GET",
				url: "dpart/dp3.php",
				success: function(dataprocess){
					$('.320i').html(dataprocess).hide().fadeIn();					
					$('.popup-step-content').addClass('popup-step-content-'+s_n);	
					$('.img-prepend').prepend($followers_icon);
					$.magnificPopup.open({
						items: {
							src: '.popup-step-wrapper',
						},
						type: 'inline',
						preloader: false,
						modal: true,
						fixedContentPos: true,
						fixedBgPos: true,
						callbacks: {	
							open: function() {							
								setTimeout(function() {
									$('.console-message').html($console_message_1_1 + ' ' + selected_network + ' ' + $console_message_1_2);	
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 0 );
								setTimeout(function() {	
									$('.console-message').html($console_message_2 + '<span class="console-message-h">' + username + '</span>');	
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 3000 );
								setTimeout(function() {	
									$('.console-message').html($console_message_3);	
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 6500 );
								setTimeout(function() {	
									$(".console-loader-wrapper").fadeOut(function(){
										$(".console-count-wrapper").fadeIn(function(){
											$('.console-count-val').countTo({
												from: 0,
												to: $selected_followers_value,
												speed: 2500,
												refreshInterval: 5,
												formatter: function (value, options) {
													return value.toFixed(options.decimals);
												}
											});
										});
									});
									$('.console-message').html($console_message_4);		
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 8500 );
								setTimeout(function() {			
									$(".console-count-wrapper").fadeOut(function(){
										$('.console-loader-wrapper').html('<span class="lnr lnr-checkmark-circle console-message-s"></span>');
										$('.console-loader-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
											$(this).removeClass('animated bounceIn');	
										});
										$(".console-loader-wrapper").fadeIn();
										$('.console-message').html('<span class="console-message-success">' + $console_message_5_1 + ' ' + $selected_followers_value + ' ' + $console_message_5_2 + ' ' + username + '</span>');					
										$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
											$(this).removeClass('animated bounceIn');	
										});
									});
								}, 12500 );
								setTimeout(function() {	
									$('.console-loader-wrapper').html('<div class="sk-chase"><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div></div>');
									$('.console-message').html($console_message_6);		
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 15000 );
								setTimeout(function() {	
									$('.console-message').html($console_message_7);		
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 17500 );
								setTimeout(function() {
									$('.console-loader-wrapper').html('<span class="lnr lnr-cross-circle console-message-s"></span>');
									$('.console-loader-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
									$('.console-message').html($console_message_8);		
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 20000 );
								setTimeout(function() {	
									$('.console-loader-wrapper').html('<span class="lnr lnr-warning console-message-s"></span>');
									$('.console-loader-wrapper').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
									$('.console-message').html($console_message_9);		
									$('.console-message').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
										$(this).removeClass('animated bounceIn');	
									});
								}, 22500 );
								setTimeout(function() {	
									$('.popup-step-content').addClass('fadeOutUp animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){																						
										$(this).remove();		
										$.ajax({
											type: "GET",
											url: "dpart/verification-"+s_n+".php",
											success: function(dataprocess){
												console.clear();
												console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
												$('.popup-step-wrapper').html(dataprocess).hide().fadeIn();												
												$(".verification-username").html(username);
												$(".verification-network").html(selected_network);												
												$(".verification-followers-value").html($selected_followers_value);												
											}
										});																	
									});
								}, 25000 );
							}
						}
					});	
				}
			});
		}
	});
});