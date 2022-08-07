function buttonTest(){

alert('世界の半分が欲しくはないか？');

}

function ClickTextbox1()
{
	getTextbox1=document.getElementById("Textbox1");
	text1=getTextbox1.value;
	alert(text1);
}

function ClickTextbox2()
{
	getTextbox2=document.getElementById("Textbox2");
	text2=getTextbox2.value;
	//alert(text2);
	text2="ほほーう...?"　+　text2　+　"...。本当にそう思っているのか？";
	Displaytext2=document.getElementById("DisplayTextbox2");
	Displaytext2.innerHTML=text2;
}

function iftest()
{
	res = window.confirm("個人情報を提供しますか？")
	if(res == true){
		alert("もーらい！")
	}else{
		alert("拒否権なんてないですけど？（貰いました。）")
	}
}
function Clock1(){
	document.getElementById("TimeArea").innerHTML=Date();
}
window.onload = Clock1;
setInterval('Clock1()',1000);

function Trigger(){
	Count=5;
	CountDownTimer=setInterval(function()
	{
		
		document.getElementById('CountDown').innerHTML=Count;

		if(0 == Count)
		{
			document.getElementById('Boomda').innerHTML="<img src=img/bakuhatu.jpeg>"
			clearInterval(CountDownTimer);
		}

	Count--;
	},1000);
}


function Calculator()
{
	getCalculatorBox1=document.getElementById("CalculatorBox1");
	getCalculatorBox2=document.getElementById("CalculatorBox2");
	
	a=parseInt(getCalculatorBox1.value);
	b=parseInt(getCalculatorBox2.value);
	if(getCalculatorBox1.value==""||getCalculatorBox2.value=="")
	{
		alert("未入力の項目があります");
		return;
	}
	if(getCalculatorBox1.value.match(/[^0-9]+/)||getCalculatorBox1.value.match(/[^0-9]+/))
	{
		alert("認識できないものが含まれています");
		return;
	}
	c = a + b;
	
	DisplayResult=document.getElementById("CalculatorResult");
	DisplayResult.innerHTML= c;
}
