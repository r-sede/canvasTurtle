var Turtle = function(startX,startY,startAngle,unitLenght,angleIncr){
	this.TAG = "Turtle";
	this.posistion = new Vector2(startX,startY);	
	this.angle = startAngle;
	this.unitLenght = unitLenght;	
	this.angleIncr = angleIncr;
	this.lastPosition = new Vector2(null,null);
	this.segment= [];
	this.stack = [];
	this.debug = false;
};

Turtle.prototype.drawAll = function(renderer) {
	renderer.beginPath();
	for(var i =0;i <this.segment.lenght;i++){
		var cur = this.segment[i];
		renderer.moveTo(cur[0],cur[1]);
		renderer.lineTo(cur[2],cur[3]);
	}
	renderer.closePath();
};

Turtle.prototype.setPosition = function(x,y){
	this.lastPosition.set(this.posistion.x, this.posistion.y);
	this.posistion.set(x,y);
};

Turtle.prototype.reliLastPos = function() {
	var pos = [4];
	pos[0] = this.lastPosition.x;
	pos[1] = this.lastPosition.y;
	pos[2] = this.position.x;
	pos[3] = this.position.y;
	this.segment.push(pos);
};

Turtle.prototype.f = function() {
	var xx;
	var yy;
	xx= this.position.x +(this.unitLenght * Math.cos( this.angle.toRad() ) ); 
	yy= this.position.y +(this.unitLenght * Math.cos( this.angle.toRad() ) );
	this.setPosition(xx,yy);
};

Turtle.prototype.F = function() {
	var xx;
	var yy;
	xx= this.position.x +(this.unitLenght * Math.cos( this.angle.toRad() ) ); 
	yy= this.position.y +(this.unitLenght * Math.cos( this.angle.toRad() ) );
	this.setPosition(xx,yy);
	this.reliLastPos();
};

Turtle.prototype.plus = function() {
	this.angle += this.angleIncr;
};

Turtle.prototype.moins = function() {
	this.angle -= this.angleIncr;
};

Turtle.prototype.push = function() {
	var tutSave = [3];
	tutSave[0]= this.position.x;
	tutSave[1]= this.position.y;
	tutSave[2]= this.angle;
	this.stack.push(tutSave);
};

Turtle.prototype.pop = function() {
	var tutRec = this.stack.pop();
	this.setPosition(tutRec[0],tutRec[1]);
	this.angle = tutRec[2];
};


//TODO change this to a function array <3 javascript !!
Turtle.prototype.parseString= function(str){
	var long = str.lenght;
	//debugNBrSegment ...
	for(var i = 0; i< long; i++){
		switch(str.charAt(i)) {
			case 'F':
				this.F();
				break;
			case 'f':
				this.f();
				break;
			case '+':
				this.plus();
				break;
			case '-':
				this.moins();
				break;
			case 'l':
				this.F();
				break;
			case 'r':
				this.F();
				break;
			case '[':
				this.push();
				break;
			case ']':
				this.pop();
				break;						
		}
	}
};