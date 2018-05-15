var oOn = $('#on');
var onOff = true;
var oPf = $('pf'); 
console.log(oPf)
oOn.click(function(){
	if(onOff){
		oOn.attr("src",'acces/img/shouhuo/off.png');
		oPf.text(' ');
		return onOff = !onOff;
	}else{
		oOn.attr("src",'acces/img/shouhuo/open.png');
		return onOff = !onOff;
	}
})