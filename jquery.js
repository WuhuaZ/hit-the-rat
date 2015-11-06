$(document).ready(function(){

    $(".buttons .start").click(function(){
    	GameStart();
    });

});

//gamestart
function GameStart(){
	total=0;
	playing = true;
	countDown= 30;
    interId = setInterval("ratshow()",1000);
    grassland= document.getElementById("grassland");
	grassland.style.cursor= "url(images/hammer.png),auto";
	timeShow();
	
}

function ratshow(){
    	var positionArray = [
			  [140,170]
			, [325,162] 
			, [520,165] 
			, [110,260] 
			, [325,255] 
			, [525,255] 
			, [105,355] 
			, [325,360]
			, [550,365]];
			var rannum= Math.floor(Math.random() * 8);
			var left1= positionArray[rannum][0];
			var top1= positionArray[rannum][1];
			$(".hole").css({"top": top1+"px", "left":left1+"px", "position":"absolute"});	
			$(".hole").addClass("appear");
			$(".hole").show();	
			grassland.onclick = function(ev){
				var iscore= 0;
				var oEvent=event||ev;
				var iHammerX= oEvent.pageX;
				var iHammerY = oEvent.pageY;
				var iRatX = $(".hole").offset().left+54;
				var iRatY = $(".hole").offset().top;
				var iDistance = 
				Math.floor(Math.sqrt((iHammerX-iRatX)*(iHammerX-iRatX) + (iHammerY-iRatY)*(iHammerY-iRatY)));
				if(iDistance< 105){
					iscore= 100;
					total+= iscore;
					$(".hole").addClass("hitted");
				}
			}
			$(".hole").mouseleave().removeClass("hitted");
		
}


function timeShow(){
    timeId= setInterval(function(){
	document.getElementById("countdown").innerHTML= "time left:"+(--countDown);
	if(countDown<=0)
	{
		document.getElementById("countdown").innerHTML= "time out";
		GameOver();
	}
}, 1000);
}

//gameover
function GameOver(){
	clearInterval(interId);//clearInterval()方法返回setInterval()方法的id
    clearInterval(timeId);
	playing= false;
	alert("total:"+total);
	countDown = 30;

}
