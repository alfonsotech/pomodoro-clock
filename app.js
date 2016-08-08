$(document).ready(function() {
	//Start Bell Sound
	var bell = $('#bell')[0];
	//bell.play();
	//Start Break Horn Sound
	var horn = $('#horn')[0];
	//horn.play();

	var workCount = parseInt($('.workCounter').html());
	var breakCount = parseInt($('.breakCounter').html());

	//Hide reset button on load
	$('.reset').hide();
	
	/*START AND RESET CONTROLS*/
	$('#start').click(function(){
		$('.breakMessage').hide();
		var clock = setInterval(timer, 1000);
			workCount *= 60;
			function timer(){
				//Hide SetUp
				$('#workMinus, .workTime, #workPlus, .breakTime, #breakMinus,  .breakCounter, #breakPlus, #start').hide();
				//Change workTime Text
				$('.workingMessage').text("Working It!");
				workCount -= 1;
				
				if (workCount === 0){
					bell.play();
					clearInterval(clock);
					$('.breakMessage').show();
					$('.workingMessage').empty();
					$('.workCounter').hide();
					//Set Break Interval to one second
					var startBreak = setInterval (breakTimer, 1000);
					breakCount *= 60;
				}	

				//Turn workCount into minutes/seconds
				if(workCount%60>=10){
					$('.workCounter').html(Math.floor(workCount/60) + ':' + workCount%60);
				} else {
					$('.workCounter').html(Math.floor(workCount/60) + ':' + 0 +workCount%60);
				}

				//Set workCounter to interval clock
				//$('.workCounter').html(workCount);
			
				function breakTimer (){
				$('.breakMessage').text("On Break");
				$('.breakCounter').show();


				breakCount -=1;

				if(breakCount===0){
					horn.play();
					clearInterval(startBreak);
					$('.breakCounter, .breakMessage').hide();
					$('.reset').show();
				}

				//Turn breakCount into minutes/seconds
				if(breakCount%60>=10){
					$('.breakCounter').html(Math.floor(breakCount/60) + ':' + breakCount%60);
				} else {
					$('.breakCounter').html(Math.floor(breakCount/60) + ':' + 0 +breakCount%60);
				}
			}

		}
		
	});

	/*RESET CLOCK*/
	$('#reset').click(function(){
		workCount = 40;
		breakCount = 10;
		$('.workCounter').html(workCount);
		$('.breakCounter').html(breakCount);
		$('.workTime, #workMinus, .workCounter, #workPlus, .breakTime, #breakMinus, .breakCounter, #breakPlus, .breakMessage, #start').show();
		$('.reset').hide();
	});

	/*COUNTER CONTROLS*/
	//Decrease workCounter
	$('#workMinus').click(function(){
		if (workCount>5) {
			workCount -= 5;
			$('.workCounter').html(workCount);	
		}	
	});

	//Increase workCounter
	$('#workPlus').click(function(){
		if (workCount>=5) {
			console.log(workCount);
			workCount += 5;
			console.log(workCount);
			$('.workCounter').html(workCount);
		}
	});

	//Decrease breakCounter
	$('#breakMinus').click(function(){
		if (breakCount>5) {
			breakCount -= 5;
			$('.breakCounter').html(breakCount);
		}
		
	});

	//Increase breakCOunter
	$('#breakPlus').click(function(){
		if (breakCount>=5) {
			breakCount += 5;
			console.log(breakCount);
			$('.breakCounter').html(breakCount);
			
		}
		
	});

}); //Document Ready Close