// $(document).ready(function () {

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

// $("div")
// .css("background", "yellow")
// .css("color", "blue")
// .slideUp(2000)
// .slideDown(2000)
// .fadeOut(2000)
// .fadeIn(2000)
// .hide(1000)
// .show(1000)
// .animate({ width: "600px", height: "600px" }, 1000);


// });

/*-------------------------------------------------------------------------------*/

// $(document).ready(function () {

// alert($("div").text());     you will show the div context inside an alert




////////////////////////////////////////////////

// 1- .text
// let div = $("div").text();

// $("p").text(div);



// 2- .html
// let div = $("div").html();

// $("p").html(div);



// the different above between .html and .text => .html will also take the html structure
// include the context but .text will take only the context without any html tags or even the inline style

///////////////////////////////////////////////




// $("button").click(function() {
//     $("input").val("This Value From jQuery");
// });



// $("button").click(function() {
//     $("input").val($("div").text());
// })


// if we are using as per below example .html so it will take also the html tags and inline style property to the input and show it as per below:
//the result =>  <span style="color: red;">Hello From Div</span>

// $("button").click(function () {
//     $("input").val($("div").html());
// })


// Important example below to understand the val()
// $("button").click(function () {
//     $("div.result").text( "The Result is: " + $("input").val());
// });




// Attributes section

// $("button").click(function() {
//     $("input").val($("a").attr("target"))     // the result is the value of attribute target
// });


// $("button").click(function () {
//     $("input").val($("a").attr("href"))     // the result is the value of attribute href
// });

// for the previouse two examples we made get the attribute value



// if you want to change the value of a specific attribute

// $("button").click(function() {
//     $("a").attr("class", "jquery");    // here we set the class attribute new value  / Syntax=> attr("the attribute", "its new value")
// })

// $("button").click(function () {
//     $("a").attr("href", "https://www.jquery.com");    // here we set the href attribute new value 
// })



// $("button").click(function () {
//     $("a").attr({
//         "target":"xx",
//         "href": "https://www.jquery.com",
//         "class": "alakel"
//     });    
//     // above we want to set new values from group of attributes we follow the way above IMPORTANT



//     alert($("a").attr("href"))   // with using alert method to show the value of href attribute
// });

// });



/*-------------------------------------------------------------------------------*/

/////// In this section you gonna learn how to add new html elements using jQuery and how to set it in a specific place inside the page

/* append , appendTo, prepend, prependTo, Before, After */

// $(document).ready(function() {

// //append   parent => append => child
// $("div").append("<p>Hello</p>")  // append will add the element to last or at the end of the target element in our example is div
// $("div").append("<span><a href='#'>Google</a></span>") //add the element to last or at the end of the target element in our example is div



// // prepend  parent => prepend => child
// $("div").prepend("<span><a href='#'>Facebook</a></span>") // add the element to begin or at the start of the targeted element, in our example div



// // before is working same prepend but will add the new element out side the targeted element and sure before it
// $("div").before("<p>Hi</p>");



// // after is working same append but will add the new element out side the targeted element and sure after it
// $("div").after("<p>alakel</p>");


// // example to input type add file ---- it's only an example
// $("span.add").click(function() {
//     $("input").after("<br /><input type='file'>")
// });


// appendTo    child => append to => parent
// here the targeted element will be second the first you gonna write what you want append exactly like a text or new element
// $("<p>Hello Paragraph</p>").appendTo("div")

// prependTo   child => prepend to => parent
// here the targeted element will be second and the first you gonna write what you want prepend exactly like a text or new element
// $("<p>Hello from prependto paragraph</p>").prependTo("div");




// advanced example important to understand and these attributes will be as variables you can use it and edit it in the future

//     $("<p></p>", {
//         text: "Welcome To power of jQuery",
//         class: "Alakel"
//     }).appendTo("div");
// });


/*-------------------------------------------------------------------------------*/

// Remove Element from the page

/* Remove the element completely from the page */

// $(document).ready(function () {

//     $("button").click(function () {

// $("div").hide();   // Here the div is still on the page but its display value is none
// $("div").remove();   // Here the div removed completely from the page or the document

// $("div.jquery").remove();  // Here we make the remove apply on the div with class value equal to jquery

// $("div").remove(".jquery")   // Here also same above we apply the remove on the div with class value equal to jquery

// IMPORTANT: please be note that remove will be remove not only the element but also its children too


// $("div").fadeOut(5000);  // here also please be note that fadeOut on opacity but at the end will be the display: none;

// in the below example will be fadeOut till reach to display none and because or call back function will be remove completely div from the document
//     $("div").fadeOut(2000, function() {
//         $(this).remove();
//     });

// in the below advanced example i want to remove the specific paragraph that contains an exact word
// Very Important Advanced Example for filter and to catch and remove an exact paragraph that contains a specific word
// $("p").remove(" :contains('This')");

/*-------------------------------------------------------------------------------*/
// Empty 

// $("div.jquery").empty();   // will empty the element from the elements and text too because the text by dom concept is a child too

// Imprtant to understand empty()

//     });
// });


/*-------------------------------------------------------------------------------*/

// Here we are going to uderstand the css class and how we can add classes on element , remove classes from element, and toggle classes

// $(document).ready(function() {

// $("p").click(function() {

//     // add class
//     $(this).addClass("custom br"); // here we added two classes to the element p when we press on p 

// });

// $("button").click(function() {
// $("div.alakel").addClass("custom br"); // here another exmaple we added two classes to the element div with class value .alakel


// $("div, p, span").addClass("custom br");  // here we add three elements to set a new values to its class property

// $("div, p, span").addClass("custom br").removeClass("alakel");  // here we added classes to the elements and remove the class: alakel

// $("div, p, span").removeClass("alakel"); // Here we only remove the class: alakel from the group of elements

// $("div").removeClass("alakel jquery css"); // here we only remove group or classes from the div

// $("div").removeClass(); // Here the element div will remove all its classes becasue we didn't set a specific value for the remove class






// the section below for the filter (advanved section only to read it's not the original section for this part)

// using filter : first and :last Important
// $("p:first").addClass("alakel jquery css"); // Here we are using a filter to target the first paragraph and add group classes to it

// $("p:last").addClass("alakel"); // Here we are using a filter to target the last Paragraph then add a class equal to alakel to it


// here using filter important contains
// $("p:contains('Love')").addClass("custom br");

// // here using filter important equal0 , that's mean the first paragraph in the page
// $("p:eq(0)").addClass("custom br");

// // here it means that second paragraph in the page
// $("p:eq(1)").addClass("custom br");




//Toggle class section

// $("p:eq(2)").toggleClass(); // same as before toggle if it has class will remove it , if it has not so it will add its class

//
// });



// $("p:eq(3)").click(function() {
//     $("p:eq(3)").toggleClass();
// })

// IMPORTANT TO LEAN AND UNDERSTAND
// $("p").click(function() {
//     $(this).toggleClass();
// });



// $("div.test").click(function() {
//     $(this).toggleClass("border")
// })


// });

/*-------------------------------------------------------------------------------*/


// Here we are focusing on the CSS properties 

// $(document).ready(function() {

// $("button").click(function() {
//     let color = $("p").css("color");
//     let backgroundcolor = $("p").css("background");
//     let pad = $("p").css("padding");

//     console.log(color);  // here we only print the value of color variable to the console

//     $("input").val(color); // here we set the val of the input to the color value so it will appear on the input field

//     $("<span></span>",{    
//         text: pad

//     }).appendTo("body")   // here we append to body a new span with its text that it is equal to pad variable

// });





///// another example below: here we take the value that you gonna write on the input field and set it to the color variable
/// then we use css() to set a new value for color property that's related to the p element

// the normal: css(property, new value for this property)
// $("button").click(function () {
// let color = $("input").val();
// $("p").css("color", color);



// now if you have more than one property so you gonna follow the way as per below example:    IMPORTANT IF YOU HAVE GROUP OF PROPERTIES
// also for the note we are using below a variable to store the input field value to set it later to one property of the css element
//         let pad = $("input").val();
//         $("p").css({
//             "background":"#f00",
//             "color":"#000",
//             "padding":pad
//         });
//     });
// });

/*-------------------------------------------------------------------------------*/
// Dimensions in jQuery width , height , inner width, inner height , outer width , outer height

// width

// $(document).ready(function () {
//Example:1
// let docWidth = $(document).width();
// console.log(docWidth);

// if(docWidth == 1488) {
//     console.log("You have Big Screen")
// } else {
//     console.log("You have Small Screen!")
// }


// Example:2
// let docWidth = $(document).width();
// console.log(docWidth);

// if (docWidth == 1488) {
//     $("body").append("<span>Congrats</span>")
// } else {
//     $("body").append("<span>Sorry</span>")
// };

// Example:3
// $("div.dim").click(function () {
//     let dv = $(this).width();
//     console.log("Your Div Width is: " + dv + "px");
// })

// Example: 4 change and set a new width to the element
// $("div.dim").click(function () {
//     $(this).width(300);
//     $(this).text("Your Div Width is: " + $(this).width() + "px");
//     console.log("Your Div Width is: " + $(this).width() + "px");
// })

// Example: 5 
// $("div.dim").click(function () {
//     $(this).width("+=" + 50);
//     $(this).text("Your Div Width is: " + $(this).width() + "px");
//     console.log("Your Div Width is: " + $(this).width() + "px");
// });



// Example: 6  very good example but with using float property in the css file
// $("div.left").click(function () {
//     $(this).width("+=" + 50);
//     $("div.right").width("-=" + 50);
// })

// $("div.right").click(function () {
//     $(this).width("+=" + 50);
//     $("div.left").width("-=" + 50);
// })


// Example: 7
// $("div.cont").click(function () {
//     $(this).width("+=" + 50);
//     $(this).text($(this).width());

//     if ($(this).width() == 700) {
//         $(this).css({
//             maxWidth: "700px",
//             width: "700px"
//         });
//         console.log("You Cannot Add Width More Than " + $(this).width());
//     }
// });

// Example: 8
// $("div.cont").click(function () {
//     $(this).width("+=" + 50);
//     $(this).text($(this).width());

//     if ($(this).width() == 700) {
//         $(this).css({
//             width: "50px"
//         });
//         console.log("You Cannot Add Width More Than " + $(this).width());
//     }
// });



// Example: 9
// $("div.cont").click(function () {
//     console.log($(this).width());   // here the width will not include any addition in the width such as padding and borders
// });

// please be note that if you want to deal with document or window you must use only width not inner or even outer

// Example: 10 innerWidth
// $("div.cont").click(function () {
//     console.log($(this).innerWidth());   // with innerWidth will bring the width + the padding left and right
// });                                          // the innerWidth will not include the borders with the width

//Example: 11  outerWidth
// $("div.cont").click(function () {
//     console.log($(this).outerWidth());   // with outerWidth will bring the width + the borders + the padding too
// });

// Example:12 outerWidth(true)
// $("div.cont").click(function () {
//     console.log($(this).outerWidth(true));   // with outerWidth will bring the width + the borders + the padding too + the Margin because of true


// });

/*-------------------------------------------------------------------------------*/

// Height

// example: 1
// $(".cont").click(function() {
//     console.log($(this).height());
// });


// example: 2
// $(".cont").click(function () {
//     $(this).height("+=" + 50);
//     console.log($(this).height());
// });


// example: 3
// $(".cont").click(function () {
//     console.log($(this).height());    // only the original height without padding , margin or borders
// });


//example: 4   innerHeight
// $(".cont").click(function () {
//     console.log($(this).innerHeight());    // only the original height + padding
// });


//example: 5  outerHeight
// $(".cont").click(function () {
//     console.log($(this).outerHeight());    // only the original height + padding + borders
// });


//example: 5  outerheight(true)
// $(".cont").click(function () {
//     console.log($(this).outerHeight(true));    // only the original height + padding + borders + margin
// });

// });


/*-------------------------------------------------------------------------------*/
// Traversing

// $(document).ready(function () {
    // $("span").parent().css("border","1px solid #00f");   // the target here is p because it's the direct parent of the span

    // $("p").parent().css("border", "1px solid #00f");   // the target here is div because it's the direct parent of the p

    // $("div.top").parent().css("border", "1px solid #00f");   // the target here is section because it's the direct parent of the div.top

    // $("section").parent().css("border", "1px solid #00f");   // the target here is body because it's the direct parent of the section



    //Example: 1
    // $("span").parent().css({ 
    //     padding :"40px", 
    //     border:"1px solid #080",
    //     width: "80%",
    //     borderRadius: "10px",
    // });


    // Example: 2   Here the parent will also effect on its child too and it will fadeOut with it
    // $("span").parent().fadeOut(2000);




    //Parents   *Plural* Important  it will effect on all the parents of this child include the body and html tags
    // $("p").parents().css("border", "1px solid #f00");

    // Here with parents("make a filtration") to pick a specific parent from the parents with our example a parent with class .top
    // $("span").parents(".top").css("border", "1px solid #f00");




    // parentsUntil("set a level to stop on it") , as per our example below, it will show that it stops on a parent with a class .my-section
    // please be note that the stop point will not effect it will stop on that without apply the changing on the stop class or element

    // $("span").parentsUntil(".my-section").css("border", "1px solid #f00");

    // $("span").parentsUntil(".top").css("border", "1px solid #f00");

    // $("span").parentsUntil(".my-section").fadeOut(2000);


// });