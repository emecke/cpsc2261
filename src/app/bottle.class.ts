export class bottle {
	amt: number = 0;
	
	constructor(public size : number){}

	fill() {
		this.amt = this.size;
	}

	empty() {
		this.amt = 0;
	}

	pour(targetBottle : bottle) {
		let total = targetBottle.amt + this.amt;

		if(total > targetBottle.size) {
			targetBottle.fill();
			this.amt = total - targetBottle.amt;
		} else {
			targetBottle.amt = this.amt
			this.empty();
		}
	}
}