	var oCount1=document.getElementById('count1');
	var oCount2=document.getElementById('count2');
	var oCount3=document.getElementById('count3');
	var h=2;
	var m=0;
	var s=0;

	function toStr(n){
    	if(n<10){
    		return '0'+n;
    	}else{
    		return ''+n;
    }
}
	function init(){
		oCount1.innerHTML=toStr(h);
		oCount2.innerHTML=toStr(m);
		oCount3.innerHTML=toStr(s);
	}
	function run(){
		s--;
		if(s<0){
			m--;
			s=59;
		}
		if(m<0){
			h--;
			m=59;
		}
		if(h<0){
			s=0;
			m=0;
		}
		init();
	}
	timer2=setInterval(run,1000);
	
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		console.log(scrollTop);
		if(scrollTop>750){
			$("#backTop").show(300);

		}else{
			$("#backTop").hide(300);
		}
	})
	$("#backTop").click(function(){
				
		$(document.body).animate({scrollTop:0})
	})