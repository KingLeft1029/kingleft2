window.onload=function(){
   (
    function(){
        //banner
        if ($(".ban").eq(0).css("display")=="block") {
            $(".fir .im1").animate({top:"90px"},1000);
            $(".fir .im2").animate({right:"140px"},1500);
            $(".fir .im3").animate({bottom:"100px"},1000);
            $(".fir .im4").animate({left:"49px"},1500);
            $(".fir .im5").addClass("con1");
            $(".fir .im6").addClass("con2");
            $(".fir .im7").addClass("con3");
            $(".fir .im8").addClass("con4");
        }else{
            $(".fir .im1").css({top:"-79px"});
            $(".fir .im2").css({right:"-500px"});
            $(".fir .im3").css({bottom:"-77px"});
            $(".fir .im4").css({left:"-574px"});
            $(".fir .im5").removeClass("con1");
            $(".fir .im6").removeClass("con2");
            $(".fir .im7").removeClass("con3");
            $(".fir .im8").removeClass("con4");
        } 
        var x=0;
	function fun(){
		x+=1;
		if (x>3) {
			x=0;
		}
		// alert(x)
		$(".ban").css({display:"none"});
		$(".ban").eq(x).css({display:"block"});


			if ($(".ban").eq(0).css("display")=="block") {
				$(".fir .im1").animate({top:"90px"},1000);
				$(".fir .im2").animate({right:"140px"},1500);
				$(".fir .im3").animate({bottom:"100px"},1000);
				$(".fir .im4").animate({left:"49px"},1500);
				$(".fir .im5").addClass("con1");
				$(".fir .im6").addClass("con2");
				$(".fir .im7").addClass("con3");
				$(".fir .im8").addClass("con4");
			}else{
				$(".fir .im1").css({top:"-79px"});
				$(".fir .im2").css({right:"-500px"});
				$(".fir .im3").css({bottom:"-77px"});
				$(".fir .im4").css({left:"-574px"});
				$(".fir .im5").removeClass("con1");
				$(".fir .im6").removeClass("con2");
				$(".fir .im7").removeClass("con3");
				$(".fir .im8").removeClass("con4");
			}

			if ($(".ban").eq(1).css("display")=="block") {
				$(".sec .im1").addClass("tt1");
				$(".sec .im2").delay(1000);
				$(".sec .im2").animate({top:"240px"},500);
				$(".sec .im3").delay(1000);
				$(".sec .im3").animate({bottom:"0px"},500);
				$(".sec .p1").delay(1500);
				$(".sec .p1").animate({left:"100px"},500);
				$(".sec .p2").delay(2000);
				$(".sec .p2").animate({left:"200px"},500);
				$(".sec .p3").delay(2500);
				$(".sec .p3").animate({left:"110px"},500);
				$(".ban .im4").addClass("tt2");
			}else{
				$(".sec .im1").removeClass("tt1");
				$(".sec .im2").css({top:"450px"});
				$(".sec .im3").css({bottom:"-257px"});
				$(".sec .p1").css({left:"-440px"});
				$(".sec .p2").css({left:"-580px"});
				$(".sec .p3").css({left:"-380px"});
				$(".ban .im4").removeClass("tt2");
			}

			if ($(".ban").eq(2).css("display")=="block") {
				$(".thd .th1").addClass("addth1");
				$(".thd .th2").addClass("addth2");
				$(".thd .th3").addClass("addth3");
				$(".thd .im1").addClass("addim1");
				$(".thd .im2").addClass("addim2");
				$(".thd .im3").addClass("addim3");
				$(".thd .im4").addClass("addim4");
				$(".thd .im5").addClass("addim5");
				$(".thd .im6").addClass("addim6");
				$(".thd .im7").addClass("addim7");
			}else{
				$(".thd .th1").removeClass("addth1");
				$(".thd .th2").removeClass("addth2");
				$(".thd .th3").removeClass("addth3");
				$(".thd .im1").removeClass("addim1");
				$(".thd .im2").removeClass("addim2");
				$(".thd .im3").removeClass("addim3");
				$(".thd .im4").removeClass("addim4");
				$(".thd .im5").removeClass("addim5");
				$(".thd .im6").removeClass("addim6");
				$(".thd .im7").removeClass("addim7");
			}

			if ($(".ban").eq(3).css("display")=="block") {
				$(".fou .dian .im3").addClass("fouadd2");
				$(".fou .dian .im3").animate({top:"-430px"},1000);
				$(".fou .im4").addClass("fouadd4");
				$(".fou .im5").addClass("fouadd5");
				$(".fou .im6").addClass("fouadd6");
				$(".fou .p1").addClass("fouaddp1");
				$(".fou .im7").addClass("fouadd7");
				$(".fou .im8").addClass("fouadd8");
				$(".fou .im8").animate({top:"-240px"},500);
				$(".fou .im9").addClass("fouadd9");
			}else{
				$(".fou .dian .im3").removeClass("fouadd2");
				$(".fou .dian .im3").animate({top:"0px"});
				$(".fou .im4").removeClass("fouadd4");
				$(".fou .im5").removeClass("fouadd5");
				$(".fou .im6").removeClass("fouadd6");
				$(".fou .p1").removeClass("fouaddp1");
				$(".fou .im8").removeClass("fouadd8");
				$(".fou .im8").animate({top:"0px"});
				$(".fou .im9").removeClass("fouadd9");
			}
	}
	// fun();
	setInterval(fun,5000);
    }
   )()
   //tab切换
   $(".item li").eq(0).css({
	   "background-color":"red",
	   "color":"white"
   })
   $(".item_contents div").eq(0).css("display","block")
var x=0
$(".item li").click(function(){
	$(".item li").eq(x).css({
		"background-color":"white",
		"color":"black"
	})
	$(".item_contents div").eq(x).css("display","none")
	x=$(this).index()
	$(".item li").eq(x).css({
		"background-color":"red",
		"color":"white"
	})
	$(".item_contents div").eq(x).css("display","block")

	
})
}

