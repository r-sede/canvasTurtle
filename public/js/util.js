var StringProdSystem = function(axiom,desiredIter,nbrRules){
	this.TAG = 'StringProdSystem';
	this.axiom = axiom;
	this.prodRules = [nbrRules];
	this.desiredIter = desiredIter;
	this.defineRules = 0;

};

StringProdSystem.prototype.addRules = function(predecessor,sucessor){
	if(this.defineRules >= this.prodRules.length){
		console.log(this.TAG, 'la liste des regle est déjà pleine');
		return;
	}
	this.prodRules[this.defineRules]= new ProductionRule(predecessor,sucessor);
	this.defineRules++;
};



StringProdSystem.prototype.convertAll = function(str,iter){
	if(arguments.length === 0)
		return this.convertAll(this.axiom,0);

	if(iter>=this.desiredIter)
		return str;

	var iteration = iter;

	if(this.defineRules === 1){
		var tt = this.test1(str);
		iteration++;
		if(iteration===this.desiredIter)
			return tt;
		else
			return this.convertAll(tt,iteration);


	}else{
		var ttt=this.test(str);
		iteration++;
		if(iteration===this.desiredIter)
			return ttt;
		else
			return this.convertAll(ttt,iteration);
	}

};


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
	if(desIt == 0){
		return axiom;
	}else{
		return (this.prodRules.length === 1) ? this.recursivTest(this.test1(axiom), desIt-1):this.recursivTest(this.test(axiom),desIt-1);
	}
};