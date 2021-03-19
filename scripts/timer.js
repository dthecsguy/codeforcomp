class Timer {			//timer works in ms
	
	constructor() {
		this.curr = 0;
		this.initial_time = 0;
		this.t_status = false;
		this.curr_str;			//string for the current time
		this.old_timeStamp = 0;
		this.new_timeStamp = 0;
	}
	
	convert_to_str(s){	//converts time in secs to a mm:ss format
	
		console.log(s);
	
		let minutes = Math.trunc(s / 60);
		let secs = s % 60;
		let min_str;
		let secs_str;
		
		if (minutes < 10) {
			min_str = "0" + Math.trunc(minutes);
		} 
		else {
			min_str = Math.trunc(minutes).toString();
		}
		
		if (secs < 10) {
			secs_str = "0" + Math.trunc(secs);
		}
		else {
			secs_str = Math.trunc(secs).toString();
		}
		
		return min_str + ":" + secs_str;
		
	}
	
	set(s){			//sets time to sex seconds
		this.initial_time = s;
		this.curr = s;
		this.curr_str = this.convert_to_str(this.curr);
	}
	
	decrement(amount) {			//decrements the seconds timer
		this.curr = this.curr - amount;
		this.curr_str = this.convert_to_str(this.curr);
	}
	
	increment() {			//increments the seconds timer
		this.curr = this.curr + 1;
		this.curr_str = convert_to_str(this.curr);
	}
	
	clear() {
		this.curr = 0;
		this.curr_string = "";
		this.initial_time = 0;
	}
	
	get_time() {
		return this.curr_str;
	}	
	
	get_curr() {
		return this.curr;
	}	
}