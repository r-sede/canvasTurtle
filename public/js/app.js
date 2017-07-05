function displayRules(){
	var textToDispl = "";
	for(var i = 0;i<strProd.prodRules.length;i++){
		textToDispl+='<p>'+strProd.prodRules[i].predecessor+' ==> '+strProd.prodRules[i].sucessor+'</p>';
	}
	document.getElementById('displayRules').innerHTML=textToDispl;
}


var canvas = document.getElementById('playground');

var turt = new Turtle(500,1500,-90,25,22.5);




var ctx = canvas.getContext('2d');
//console.log(turt.segment);
// ctx.fillStyle = 'rgb(0,0,0)';
// ctx.fillStyle="#222";
// ctx.fillRect(0,0,250,250);
// ctx.lineTo(500,500);
// ctx.closePath();
turt.drawAll(ctx);
//	TODOO add coment
//	function array
//	sup unnecessary argum in StringPronodSystem

var inpField = document.getElementById('turtStr');
var drawButt = document.getElementById('drawButt');
var clearButt = document.getElementById('clearButt');

var desiredIterInput = document.getElementById('desiredIter');
var predField = document.getElementById('predecessor');
var sucessField = document.getElementById('sucessor');
var addRuleButt = document.getElementById('addRuleButt');
var resetRuleButt = document.getElementById('resetRules');
			
var strProd = new StringProdSystem();


	drawButt.addEventListener('click',function(event){
		var desrIter = desiredIterInput.value;
		var userText = inpField.value;
		ctx.clearRect(0,0,canvas.width,canvas.height);
		turt.parseString( strProd.recursivTest(userText, desrIter) );
		turt.drawAll(ctx);
			// strProd = new StringProdSystem();
			// strProd.addRules('F','FF-[-F+X+F]+[+X-F-F]');
			// strProd.addRules('X','F[+X]F[-X]+X');
});

	addRuleButt.addEventListener('click',function(event){
		strProd.addRules(predField.value,sucessField.value);
		predField.value = "";
		sucessField.value = "";
		displayRules();
	});
	
	resetRuleButt.addEventListener('click',function(event){
		strProd = new StringProdSystem();
		displayRules();

	});