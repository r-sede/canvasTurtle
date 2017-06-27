var canvas = document.getElementById('playground');

var turt = new Turtle(500,1500,-90,25,22.5);

var strProd = new StringProdSystem();

strProd.addRules('F','FF-[-F+F+F]+[+F-F-F]');
strProd.addRules('X','F[+X]F[-X]+X');
turt.parseString(strProd.recursivTest('F',2));
var ctx = canvas.getContext('2d');
console.log(turt.segment);
// ctx.fillStyle = 'rgb(0,0,0)';
// ctx.fillStyle="#222";
// ctx.fillRect(0,0,250,250);
// ctx.lineTo(500,500);
// ctx.closePath();
turt.drawAll(ctx);
//	TODOO add coment
//	function array
//	sup unnecessary argum in StringProdSystem
