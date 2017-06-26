var canvas = document.getElementById('playground');

var turt = new Turtle(500,500,-90,200,22.5);

var strProd = new StringProdSystem('F',5,2);
strProd.addRules('F','FF-[-F+F+F]+[+F-F-F]');
strProd.addRules('X','F[+X]F[-X]+X');
// console.log(strProd.defineRules);
turt.parseString('FF-');
var ctx = canvas.getContext('2d');
// ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillStyle="#222";
// ctx.fillRect(0,0,250,250);
// ctx.lineTo(500,500);
// ctx.closePath();
turt.drawAll(ctx);