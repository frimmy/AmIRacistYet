
var racismCounterElt, racismTimerElt, racismStatusElt, questionElt;
var racismQuestionCount = 0;
var secondsUntilRacist = 0;
var secondsInAYear = 31540000;
var secondsInAMonth = 2592000;
var secondsInAWeek = 604800;
var secondsInADay = 86400;
var secondsInAHour = 3600;
var secondsInAMinute = 60;

function setupRacismTimer(racismCounterId, racismTimerId, racismStatusId, questionId){
	racismCounterElt = document.getElementById(racismCounterId);
	racismTimerElt = document.getElementById(racismTimerId);
	racismStatusElt = document.getElementById(racismStatusId);
	questionElt = document.getElementById(questionId);

	var yearsUntilRacist = getRandomInt(45,75);
	secondsUntilRacist = yearsUntilRacist * secondsInAYear;

	updateRacismCounter();
}

function updateRacismCounter(){
	var value, label, level;
	if(secondsUntilRacist > secondsInAYear){
		value = secondsUntilRacist / secondsInAYear;
		label = "years";
		level= (secondsUntilRacist > secondsInAYear * 20) ? 7 : 6;
	}else if(secondsUntilRacist > secondsInAMonth){
		value = secondsUntilRacist / secondsInAMonth;
		label = "months";
		level = 6;
	}else if(secondsUntilRacist > secondsInAWeek){
		value = secondsUntilRacist / secondsInAWeek;
		label = "weeks";
		level = 5;
	}else if(secondsUntilRacist > secondsInADay){
		value = secondsUntilRacist / secondsInADay;
		label = "days";
		level = 4;
	}else if(secondsUntilRacist > secondsInAHour){
		value = secondsUntilRacist / secondsInAHour;
		label = "hours";
		level = 3;
	}else if(secondsUntilRacist > secondsInAMinute){
		value = secondsUntilRacist / secondsInAMinute;
		label = "minutes";
		level = 2;
	}else if(secondsUntilRacist > 0){
		value = secondsUntilRacist;
		label = "seconds";
		level=1;
	}else if(secondsUntilRacist <= 0){
		value = "0";
		label = "seconds";
		level=0;
	}

	value = Math.round(value * 10) / 10;
	racismTimerElt.innerHTML = "You have <span class='highlight'>" + value + " " + label + "</span> until you're racist";		
	updateRacialStatus(level);

	racismCounterElt.innerHTML = racismQuestionCount+1;

	if(racismQuestionCount >= 5){
		// questionElt.style.display = 'none';
		questionElt.innerHTML = "game over";
	}
}

function goRacism(){
	racismQuestionCount++;

	if(racismQuestionCount == 6 && false){
		secondsUntilRacist = 0;
	}else{
		var minPercent, maxPercent, multiplier;
		if(racismQuestionCount == 2){
			minPercent = 0.5;
			maxPercent = 0.75;
			multiplier = 1;
		}else{
			minPercent = 0.96;
			maxPercent = 0.98;
			multiplier = -1;
		}
		var randomPercent = getRandomArbitary(minPercent,maxPercent);
		secondsUntilRacist += multiplier * (secondsUntilRacist * randomPercent);
	}
	updateRacismCounter();
}

function updateRacialStatus(level){
	if(level == 7){ return; }

	level = getRandomInt(1,6);
	switch(level){
		case 0:
			setRacialStatus("Sorry, you're already racist");
			break;
		case 1:
			setRacialStatus("Please don't ever come by again");
			break;
		case 2:
			setRacialStatus("Do you hate all races or just one?");
			break;
		case 3:
			setRacialStatus("Paula Deen called, she wants to chat");
			break;
		case 4:
			setRacialStatus("Have you or any members of your family been a member of the KKK or Boko Haram?");
			break;
		case 5:
			setRacialStatus("Why are you even taking this quiz");
			break;
		case 6:
			setRacialStatus("Watch more racially diverse movies");
			break;
		// case 7:
			//setRacialStatus("Post Racial");
			// break;
		default:
			break;
	}
}
function setRacialStatus(status){
	racismStatusElt.innerHTML = status;
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomArbitary (min, max) {
    return Math.random() * (max - min) + min;
}


function setupCurrentTime(timeId){
	var timeElt = document.getElementById(timeId);
	var d = new Date();

	var curr_hour = d.getHours();
	var curr_min = d.getMinutes();
	
	if(curr_min < 10){
		curr_min = "0" + curr_min;
	}

	var meridian = "am";
	if(curr_hour == 0){
		curr_hour = 12;
	}else if(curr_hour >= 12){
		meridian = "pm";
		if(curr_hour > 12){
			curr_hour %= 12;
		}
	}

	timeElt.innerHTML = curr_hour + ":" + curr_min + meridian;
}



