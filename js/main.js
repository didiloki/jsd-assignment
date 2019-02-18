// Working on the Wes Bos Javascript 30 Tutorial series

$(document).ready(function(){

    setInterval(analogueClock, 1000)

    function analogueClock(){

        
        var currentTime = new Date ( );
        var currentHr = currentTime.getHours ( );
        var currentMin = currentTime.getMinutes ( );
        var currentSec = currentTime.getSeconds ( );

        var hour_hand= $('#hour_hand')
        var minute_hand= $('#minute_hand')
        var second_hand= $('#second_hand')
     
        $(second_hand).css("transform", "rotate("+currentSec * 6+"deg)")
        $(minute_hand).css("transform", "rotate("+currentMin * 6+"deg)")
        $(hour_hand).css("transform", "rotate("+currentHr * 30+"deg)")

    }
    setTimeout(analogueClock , 1000);
})


