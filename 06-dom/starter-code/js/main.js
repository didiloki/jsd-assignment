    
    var hour_hand = document.getElementById("hourhand");
    var minute_hand = document.getElementById("minutehand");
    var second_hand = document.getElementById("secondhand");

    function myclock(){
        var date = new Date();
        
        var hour = date.getHours() %12;
        var digital_hour = date.getHours()
        var new_digital_hour = date.getHours()
        var minute = date.getMinutes()
        var digital_minute = date.getMinutes()
        var second = date.getSeconds()
        var digital_second = date.getSeconds()
        var day = date.getDay()
        var month = date.getMonth();

        var hour_d = (hour * 30) + (.5 * minute);
        var minute_d = (minute * 6) + (.1 * second);
        var second_d = second * 6;
        var day_night = "AM";

        hour_hand.style.oTransform = 'rotate(' + hour_d + 'deg)';
        hour_hand.style.mozTransform = 'rotate(' + hour_d + 'deg)';
        hour_hand.style.webkitTransform = 'rotate(' + hour_d + 'deg)';
        hour_hand.style.msTransform = 'rotate(' + hour_d + 'deg)';
        hour_hand.style.transform = 'rotate(' + hour_d + 'deg)';

        minute_hand.style.oTransform = 'rotate(' + minute_d + 'deg)';
        minute_hand.style.mozTransform = 'rotate(' + minute_d + 'deg)';
        minute_hand.style.webkitTransform = 'rotate(' + minute_d + 'deg)';
        minute_hand.style.msTransform = 'rotate(' + minute_d + 'deg)';
        minute_hand.style.transform = 'rotate(' + minute_d + 'deg)';

        second_hand.style.oTransform = 'rotate(' + second_d + 'deg)';
        second_hand.style.mozTransform = 'rotate(' + second_d + 'deg)';
        second_hand.style.webkitTransform = 'rotate(' + second_d + 'deg)';
        second_hand.style.msTransform = 'rotate(' + second_d + 'deg)';
        second_hand.style.transform = 'rotate(' + second_d + 'deg)';

        if(digital_hour == 0){
            digital_hour = 12;
        }

        if(digital_hour > 12){
            digital_hour = digital_hour - 12;
            day_night = "PM";
        }
        if(digital_hour < 10) {
            digital_hour = "0" + digital_hour
        }
        if(digital_minute < 10) {
            digital_minute = "0" + digital_minute
        }
        if(digital_second < 10) {
            digital_second = "0" + digital_second
        }
        var day_val = "";
        var day_arr = ["Sun","Tue","Wed","Thur","Fri","Sat","Mon"];
        day_arr.forEach(function(currentValue,index,array){
            if(day == index){
                 day_val = currentValue
            }
        })
        var month_val = "";
        var month_arr = ["Jan","Feb","Mar","Apr","May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
        month_arr.forEach(function(currentValue,index,array){
            if(month == index){
                month_val = currentValue
            }
        })


        var time = day_val + " " + month_val + " " + digital_hour + ":" + digital_minute + ":" + digital_second ;
        var new_time = day_val + " " + month_val + " " + new_digital_hour + ":" + digital_minute + ":" + digital_second

        document.getElementById("day_time").innerText = day_night
        document.getElementById("day_time").textContent = day_night

        var button = document.getElementById("change")
        
        var the_clock = document.getElementById("Digital_clock");
        var the_clock = document.getElementById("Digital_clock");

        if (button.textContent == "12 hour metric"){
            the_clock.innerText = time
            the_clock.textContent = time
        }else if (button.textContent = "24 hour metric"){
        the_clock.innerText = new_time
        the_clock.textContent = new_time
        }

       
        button.onclick = function(){
            if(button.textContent == "12 hour metric"){

                button.textContent = "24 hour metric";
                button.style.backgroundColor = "#ff0000";
    
            }
            else if(button.textContent == "24 hour metric"){

                button.textContent = "12 hour metric"
                button.style.backgroundColor = "#000";
    
            }
        }
        
        

        
    
        setTimeout(myclock , 1000);
        
    };
     myclock();
