$(document).ready(function(){
    // $("#list").append("<li> five </li>")

    // $("#list").prepend("<li> five </li>")
    // $("#list").before("<li> five </li>")
    // $("#list").after("<li> five </li>")

    // $("#list").remove()

    // $("#add").click(function(){
    //     var textInput = $("#info").val()
    //     $("#list").append(`<li>${textInput}</li>`)

    // })


    // $("ul").on("click", "li", function(){
    //     $(this).hide("slow")
    // })
    setInterval(clock, 1000)

    function clock(){
        var date = new Date()

        let year = date.getFullYear()
        let day = date.getDay()
        let month = date.getMonth()

        let hour = date.getHours()
        let seconds = date.getSeconds()
        let min = date.getMinutes()

        $(".clock").html(`<i>${hour} : ${min} : ${seconds}</i>`)
        
    }
    

    

})