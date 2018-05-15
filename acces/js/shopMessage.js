var oBuy = $('#buy');
var oClose = $('#close');
var obuyColor = $('#buyColor span');
var oCheck1 = $('#check1');
var oCheck2 = $('#check2');
var oSize = $('#size span');
var Del = $('#Del');
var Add = $('#Add');
var count = $('#count');
var sure = $('#sure');
var oCollect = $('#collect');
var oStar = $('#collect img');
var onOff = true;


$("#choose").click(function(){
	oBuy.show("slow");
	console.log(oBuy.show());
})
oClose.click(function(){
	oBuy.hide("fast");
})

obuyColor.click(function(){
	$(this).addClass('checkColor').siblings().removeClass('checkColor');
	oCheck1.text('“'+this.innerHTML+'”')

})
oSize.click(function(){
	$(this).addClass('checkColor').siblings().removeClass('checkColor');
	oCheck2.text('“'+this.innerHTML+'”')
})
var num = count[0].firstChild.data;
Del.click(function(){
	if(num==1){
		count.text(1);
	}else{
		count.text(--num);
	}	
})

Add.click(function(){
	count.text(++num);
})
sure.click(function(){
	oBuy.hide("fast");
})

oCollect.click(function(){
	if(onOff){
		oStar.attr("src",'acces/img/shopMessage/star.png');
		return onOff = !onOff;
	}else{
		oStar.attr("src",'acces/img/shopMessage/star1.png');
		return onOff = !onOff;
	}
	
})
