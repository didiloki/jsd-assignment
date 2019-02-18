# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) DOM Homework

One of the great things about JavaScript is that it lets you manipulate the contents of a Web page in real-time. This means that we can use JavaScript to create a digital clock, embedded in the Web page, that updates every second.

> Todays class can be found in the [dom](dom) folder
## Digital Clock
 To build a digital clock we need to utilize the date class from the JavaScript Library

 - `var date = new Date()`
-  `date.getHours()`
-  `date.getMinutes()`
-  `date.getSeconds()`

The most important function for this task is is the `setInterval()` function. The `setInterval(fn, time)` takes 2 parameters. One a function and the other is duration in milliseconds.

### The task 
- Build a digital clock to show just like a digital wristwatch will show the time.
i.e. `01:30:03 PM`

- Include a button to toggle the time from 12hrs format to 24hours format.(means have ONE button to change the time format)

>You might want to check out the `.toggle()` method in the JQuery library.

## Analogue Clock
We all loved that old fashion grandfather clock.

# ![](http://gtsparkplugs.com/images/Analog-Clock-Javascript.gif)

##### Img folder has all required images

### The task 
Using JavaScript, HTML5, CSS3. Build an analogue clock that ticks.

- Seconds hand must rotate 360 degrees
- Minutes hand must move after every 60 seconds.
- Hour hand must move after every 60 minutes


> Hints: If a circle is 360 degrees and 15mins is 90 degrees then 90/15 is 6 degrees which makes 1 minute.

### Champions Only
- Create a text box that takes city name and displays a new clock based on timezone of that city. `e.g. Riyadh - GMT+3, Zhengzhou - GMT+8, Lagos - GMT+1`

#### Useful Links
- [Rotate Transform CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate)
- [setInterval](https://www.w3schools.com/jsref/met_win_setinterval.asp)
- [Toggle JQuery](http://api.jquery.com/toggle/)
- [Date Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Positioning CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Quick Examples Positioning](https://medium.freecodecamp.org/how-to-use-the-position-property-in-css-to-align-elements-d8f49c403a26)
- [Digital Clock Examples ](digit_clock.md)