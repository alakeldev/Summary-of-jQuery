$(document).ready(function () {

    // $("p").hide();
    // $("p").css("color", "red");


    // EVENTS 

    //** click event
    // $("button").click(function () {
    //     // $("p").hide();

    //     // $("p").css("color", "red");

    //     // This word Important it's related to the button(same element)
    //     // $(this).hide();
    // });

    /*-------------------------------------------------------------------------------*/

    //** double click event
    // $("button").dblclick(function () {
    //     // $("p").hide();

    //     // this word it's related to the button
    //     // $(this).hide();
    // });

    /*-------------------------------------------------------------------------------*/

    //** mouse enter
    // $("button").mouseenter(function () {
    //     $("p").css("color", "blue")
    //     $(this).css("color", "#080");


    // })


    /*-------------------------------------------------------------------------------*/
    //** mouse leave
    // $("button").mouseleave(function () {
    //     $("p").css("color", "red");
    //     $(this).css("color", "#F00");
    //     $("p").hide();

    // });


    /*-------------------------------------------------------------------------------*/


    //** mouse hover => mouse enter + mouse leave  // the hover it takes two functions when mouse enter and when mouse leave
    // $("button").hover(function () {
    //     $(this).css("color", "#00F");
    //     $("p").css("color", "#00F");
    // },
    //     function () {
    //         $(this).css("color", "#080");
    //         $("p").css("color", "#080");
    //     });



    /*-------------------------------------------------------------------------------*/

    // Effects => Hide, Show , Toggle

    // $("button").click(function () {

    // $("p").hide();       => hide() effect will make the html element display: none;  (inline style inside html page)
    // $(this).hide();


    // $("p").show();      => show() effect will make the html element display: block; (inline style inside html page)


    // $("p").toggle();    => toggle() effect will make if the html element already hide it will show it and if it's already shown it will hide it




    // the options inside the effects
    // $("p").hide(speed, callback function)
    // $("p").show(speed, callback function)
    // $("p").toggle(speed, callback function)

    // speed: you will control the effect speed, callback function: to make action after the effect done, show message that show the p is hidden
    // speed default value for (hide, show and toggle) = 400 ms

    // $("p").hide(5000);
    // $("p").hide("slow");
    // $("p").hide("fast");


    // $("p").hide(3000, function() {
    //     $("span").show();
    //     $("button").hide();
    // });


    // $("p").hide("slow", alert("Paragraph is Hidden"));


    // $("p").show(3000, function() {
    //     $("span").toggle();   // the toggle here is the span already showed in the page it will hide it and vice versa
    // });


    //     $("p").toggle(1000);
    //     $("span").toggle(2000);
    //     $(this).toggle(3000);
    // });

    /*-------------------------------------------------------------------------------*/

    //** fadeIn effect  => to make the fadeIn work the element must be HIDDEN (display: none;)
    /* the work of fadeIn effect same show make the element display: block but the difference is that fadeIn effect base on 
    opacity css property work*/

    // fadeIn(speed, callback function);

    // $("button").click(function () {
    //     $("div").fadeIn();
    // });


    // $("button").click(function () {
    //     $("div").fadeIn(2000, function () {
    //         $("span").show();
    //     });
    // });


    // $("button").click(function () {
    //     $("div").fadeIn(2000, function () {
    //         $("span").fadeIn(2000);
    //     });
    // });



    //** fadeOut() =>  to make the fadeOut work the element must be Shown on the page(display: block....) not none
    // same hide() but also the fadeOut is base on opacity property 
    // $("button").click(function() {
    //     $("div").fadeOut(2000, function() {
    //         $("span").fadeOut(2000);
    //     });
    // });




    //** fadeToggle() => fadeIn + fadeOut (vice versa)

    // $("button").click(function() {
    //     $("div").fadeToggle(2000, function() {
    //         $("span").fadeToggle(2000);
    //     });
    // })




    //** fadeTo() => if you want to make the fade to exact point of the opactiy, it will stop at this point
    // fadeTo(speed, opacity, callback function)

    // $("button").click(function() {
    //     $("div").fadeTo(2000, 0.3445566);
    // })

    // $("button").click(function () {
    //     $("div").fadeTo(2000, 0.4556, function() {
    //         $("span").fadeOut(2000);
    //     });
    // });

    /*-------------------------------------------------------------------------------*/

    //** Slide effect
    // to make slidedown on element it must be hidden  (display: none;)
    // slideDown(speed, Callback Function)
    // please be note that the speed default value is always 400 ms
    // $(".open").click(function() {
    //     $(".box").slideDown(5000, function () {
    //         $(".open").hide();
    //     });
    // });


    // slideUp(speed, callback function)
    // to make slideUp work on element it must be shown on the page and display: block not none
    // slideUp(speed, Callback Function)
    // $(".open").click(function() {
    //     $(".box").slideUp(5000);
    // });


    // slideToggle(speed, callback function)  => slideDown + SlideUp (Vise Versa)
    // $(".open").click(function() {
    //     $(".box").slideToggle(5000)
    // })

    /*-------------------------------------------------------------------------------*/
    // Animation Section
    //it needs three options (Syntax) =>  .animate({css properties that we want to make the animation on it},speed, callback function)
    //Example  below:
    // $("div").animate({
    //     width:"500px"
    // }, 2000, function() {
    //     $("span").fadeIn(1000);
    // });


    // please be note that the position property for the element must be not equal to static => position: static; in this situation will not move

    // $("div").animate({
    //     width: "500px",
    //     left: "100px",
    //     height: "300px",
    //     opacity: "0.2",
    // }, 5000);


    // if you want to set not fixed value so you want to put 50px or any number += its real value (width, height...)
    // if you want less than the original its width you can use also -= any number you want

    // $("div").animate({
    //     width: "-=50px",
    //     left: "100px",
    //     height: "+=100px",
    //     opacity: "0.5",
    //     borderRadius: "20px",
    // });


    // for the css properties that contain two words or sectors, you gonna write it in the camel case
    //border-radius => jquery => borderRadius
    //font-size => jquery => fontSize


    // please be note that you can set the value show, hide , toggle as a values inside the css properties inside jQuery file as per below:
    // $("div").animate({
    //     width: "toggle",
    //     left: "100px",
    //     height: "hide",
    //     opacity: "0.5",
    //     borderRadius: "20px",
    // }, 5000);



    // Important note, each animation inside jQuery will wait to finish the previous animation then it can start its animation.

    // $("div").animate({
    //     width: "hide",
    //     height: "hide",
    //     opacity: "0.9",
    //     borderRadius: "20px",
    // }, 2000);

    // $("div").animate({
    //     width: "show",
    //     height: "show",
    //     opacity: 0.5,
    // }, 2000)
    // $("div").animate({
    //     width: "toggle",
    //     height: "toggle",
    //     opacity: 0.5,
    // }, 2000)
    // $("div").animate({
    //     width: "toggle",
    //     height: "toggle",
    //     opacity: 0.5,
    // }, 2000)
    // $("div").animate({
    //     width: "toggle",
    //     height: "toggle",
    //     opacity: 0.5,
    // }, 2000)




    //Example

    // $("div").animate({
    //     top:"10px"
    // }, 1000)

    // $("div").animate({
    //     width: "600px"
    // }, 1000)


    // $("div").animate({
    //     height: "400px"
    // }, 1000)


    // $("div").animate({
    //     borderRadius: "20px"
    // }, 1000)

    // $("div").animate({
    //     fontSize: "40px"
    // }, 1000)

    // $("div").fadeOut(3000)


    //**--------------------------

    // stop() effect
    // Syntax of stop()  => stop(ClearQueue, goToEnd);   clearQueue => default value is False , goToEnd => default value is False
    // What is the meaning of False values the stop() if we didn't provide other value so stop it will stop the current animation only and 
    // will continue with the next animation (Queue list => animation list) 
    // on the below example if you press on stop button and you have as mentioned below many animation so when you press it you sill skip the current 
    // animation and it will continue on the next one 

    // $("button").click(function () {
    //     $("div").stop();
    // });

    // $("div").animate({
    //     width: "400px",
    //     height: "200px"
    // }, 2000);


    // $("div").animate({
    //     width: "300px",
    //     height: "100px"
    // }, 2000);


    // $("div").animate({
    //     borderRadius: "20px"
    // }, 2000);




    // onother example, we are going to set the clearQueue as true 
    // here when we press on stop button it will stop all the animations because we are set the value of it as true
    // $("button").click(function () {
    //     $("div").stop(true);
    // });

    // $("div").animate({
    //     width: "400px",
    //     height: "200px"
    // }, 2000);


    // $("div").animate({
    //     width: "300px",
    //     height: "100px"
    // }, 2000);


    // $("div").animate({
    //     borderRadius: "20px"
    // }, 2000);




    //another example:
    //stop(clearQueue, goToEnd)
    // not we will explain that go to end will take the element to the last design of the element after finished in each animation Fram but
    // without going through the animation process as per below:

    // $("button").click(function () {
    //     $("div").stop(false, true);
    // });

    // // Fram 1
    // $("div").animate({
    //     width: "600px",
    //     height: "400px"
    // }, 5000);

    // // Fram 2
    // $("div").animate({
    //     width: "300px",
    //     height: "100px"
    // }, 2000);

    // // Fram 3
    // $("div").animate({
    //     borderRadius: "20px"
    // }, 2000);

    // // Fram 4
    // $("div").animate({
    //     fontSize: "20px"
    // }, 2000);


    /*-------------------------------------------------------------------------------*/

    // Chain() effect

    // without Chain, normal and we use here variable, it's very important to use variables to make the html element cashed inside the jQuery
    // let div = $("div");
    // div.slideUp(2000);
    // div.slideDown(2000);
    // div.fadeOut(2000);
    // div.fadeIn(2000);


    // the chain as per example below:

    $("div")
    .css("background", "yellow")
    .css("color", "blue")
    .slideUp(2000)
    .slideDown(2000)
    .fadeOut(2000)
    .fadeIn(2000)
    .hide(1000)
    .show(1000)
    .animate({ width: "600px", height: "600px" }, 1000);


});

