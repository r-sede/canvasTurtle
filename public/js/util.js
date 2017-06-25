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
	if(arguments.length === 0){
		return this.convertAll(this.axiom,0);
	}

	if(iter>=this.desiredIter){
		return str;
	}

	var iteration = iter;

	if(this.defineRules === 1){
		var tt = this.test1(str);
		iteration++;
	}
};