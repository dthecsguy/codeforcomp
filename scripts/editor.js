var editor = ace.edit("editor");
var editor2 = ace.edit("editor2");

let secondsPassed;
let fps;
let started_t = false;
let timer = new Timer();
	

$("#timer_b").click(function(){
	console.log("you clicked the button");
	timer.t_status = !timer.t_status;
	timer.old_timeStamp = Date.now();
});

function update(timeStamp) {
	
	// Calculate the number of seconds passed since the last frame
	timer.new_timeStamp = Date.now();
	secondsPassed = (timer.new_timeStamp - timer.old_timeStamp) / 1000;
	
	if (timer.t_status){
		console.log(secondsPassed);
		
		if (timer.get_curr() <= 0) {
			console.log("timer hit 0 stopping");
			timer.t_status = false;
		}
		else if ( secondsPassed >= 1 ){
			timer.old_timeStamp = Date.now();
			timer.decrement(1);
			
			console.log("changing timer to " + timer.get_time());
			
			$("#timer").html(timer.get_time());		//display current time string
		}
		
		console.log(timer.get_curr());
	}
	
    // Calculate fps
    fps = Math.round(1 / secondsPassed);
	
	// The loop function has reached it's end. Keep requesting new frames
    window.requestAnimationFrame(update);
}

editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");

editor2.setTheme("ace/theme/twilight");
editor2.session.setMode("ace/mode/javascript");

timer.set(60) //should set a timer for five seconds
timer.old_timeStamp = Date.now();

$("#timer_contents").html(timer.get_time());		//display current time string

window.requestAnimationFrame(update);

//test the timer bro
//if timer works we are in business