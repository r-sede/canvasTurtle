
Number.prototype.toRad = function(){
	return this * Math.PI / 180;
};

// function toRad(Angdeg){
// 	return Angdeg * Math.PI / 180;
// }
//////////////////////////////////////////////////
/////////////////////////////////////////////////


var Vector2 = function(x,y){
	this.x = x;
	this.y = y;
};

Vector2.prototype.set = function(x,y){
	this.x = x;
	this.y = y;
};

///////////////////////////////////////////////
//////////////////////////////////////////////

var ProductionRule = function(predecessor,sucessor){
	this.predecessor = predecessor;
	this.sucessor = sucessor;
};


/////////////////////////////////////////////
/////////////////////////////////////////////

var StringProdSystem = function(axiom,desiredIter){
	this.TAG = 'StringProdSystem';
	this.axiom = axiom;
	this.prodRules = [];
	this.desiredIter = desiredIter;
	// console.log(this.desiredIter);

};

StringProdSystem.prototype.addRules = function(predecessor,sucessor){
	this.prodRules.push(new ProductionRule(predecessor,sucessor));
};



// StringProdSystem.prototype.convertAll = function(str,iter){
// 	if(arguments.length === 0){
// 		return this.convertAll(this.axiom,0);
// 	}

// 	if(iter>=this.desiredIter){
// 		return str;
// 	}

// 	var iteration = iter;

// 	if(this.prodRules.length === 1){
// 		var tt = this.test1(str);
// 		iteration++;
// 		if(iteration===this.desiredIter)
// 			return tt;
// 		else
// 			return this.convertAll(tt,iteration);


// 	}else{
// 		var ttt=this.test(str);
// 		iteration++;
// 		if(iteration===this.desiredIter)
// 			return ttt;
// 		else
// 			return this.convertAll(ttt,iteration);
// 	}

// };


StringProdSystem.prototype.test = function(depart){
	var strBuild ='';

	for(var i = 0;i<depart.length;i++){
		var cur = depart.charAt(i);
		var find = false;
		for(var ii=0;ii<this.prodRules.length;ii++){
			if(cur == this.prodRules[ii].predecessor){
				strBuild+=this.prodRules[ii].sucessor;
				find = true;
			}
		}

		if(!find)
			strBuild+=cur;
	}

	return strBuild;
};


StringProdSystem.prototype.test1 = function(depart){
	var strBuild = '';
	for(var i = 0;i<depart.length;i++){
		var cur = depart.charAt(i);
		if(cur == this.prodRules[0].predecessor){
			strBuild+=this.prodRules[0].sucessor;
		}else{
			strBuild+=cur;
		}

	}
	return strBuild;
};

StringProdSystem.prototype.recursivTest = function(axiom, desIt){
	if(desIt === 0){
		return axiom;
	}else{
		return (this.prodRules.length === 1) ? this.recursivTest(this.test1(axiom), desIt-1):this.recursivTest(this.test(axiom),desIt-1);
	}
};