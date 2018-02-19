window.onload=function () {
    var index=$(this).index()
    // $('.asidebar li').mouseover(function () {
    // 	$('.asidemain').eq($(this).index()).show()

    // 	}) 
    // $('.asidebar li').mouseout(function () {
    // 	$('.asidemain').eq($(this).index()).hide()
       
    // })	
    $('.asidebar li').hover(function () {
    		$('.asidemain').eq($(this).index()).show()},
    		function () {
    		$('.asidemain').eq($(this).index()).hide()
    		})
    $('.asidemain').mouseover(function () {
    	$(this).show()
    })
     $('.asidemain').mouseout(function () {
    	$(this).hide()
    })
    $('#mycarousel').carousel({
    	interval:4000
    })
    $('.switchspan a:nth-child(2)').mouseover(function () {
    	 $('.switchspan a:nth-child(1)').css('background','#f5f5f5')
    	 $('.switchspan a:nth-child(1)').css('color','black')
    	 $('.switchspan a:nth-child(2)').css('background','#00b262')
    	 $('.switchspan a:nth-child(2)').css('color','white')
    	 $('.switchone').hide()
    	 $('.switchtwo').show()
    	 $('.bgimgone').hide()
    	 $('.bgimgtwo').show()
    })
     $('.switchspan a:nth-child(1)').mouseover(function () {
    	 $('.switchspan a:nth-child(2)').css('background','#f5f5f5')
    	 $('.switchspan a:nth-child(2)').css('color','black')
    	 $('.switchspan a:nth-child(1)').css('background','#00b262')
    	 $('.switchspan a:nth-child(1)').css('color','white')
    	 $('.switchone').show()
    	 $('.switchtwo').hide()
    	 $('.bgimgone').show()
    	 $('.bgimgtwo').hide()
    })
    $('.publicimg').mouseover(function () {
    	$(this).css('border','1px solid #ff0036')
    })
    $('.publicimg').mouseout(function () {
    	$(this).css('border','1px solid transparent')
    })
    $('logobuttons a').mouseover(function () {
    	$(this).addClass('hidenlogo')
    })
}