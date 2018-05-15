var oList = $('#list li');
console.log(oList);

oList.click(function(){
	$(this).addClass('line').siblings().removeClass('line');
})