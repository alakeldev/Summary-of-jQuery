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

/*-------------------------------------------------------------------------------*/

// Traversing Part 2

// $(document).ready(function() {

// children()  here it will return the direct children for the element (one level direct children only)
// console.log($("section").children());

// console.log($("div").children());

// console.log($("p").children());


// $("section").children().css("border", "1px solid #f00");  // only for direct children for the element


// $("section").children(".jquery").css("border", "1px solid #f00"); // Here you are saying to search on the section direct children on a specific child with a class .jquery but please be note that on the Direct Children ONLY

// $("div").children(".jquery").css("border", "1px solid #f00");


// find filtration     VERY VERY IMPORTANT TO EASY TARGET
// find it will search in all children levels not only one level same children()
// $("section").find("span").css("border", "1px solid #00f");

// $("section").find(".jquery").css("border","1px solid #f00");


// $("section").find("*").css("border", "1px solid #f00"); // all the element under the section will be effect here becasue of * but it must be under the section


// $("section").find($("p:contains('Love')")).css("border","1px solid #0f0");  // Important here we are using jQuery object
// $("section").find($("p:contains('Facebook')")).css("border", "1px solid #f00"); // Here we using also filtration top search on paragraph that containing a specific word

// });

/*-------------------------------------------------------------------------------*/

// traversing part 3
// siblings
// $(document).ready(function () {
// $("div:contains('jQuery')").siblings().css("border", "5px solid #00f"); // in this example we use siblings so it means all the siblings of this element except the element itself


// $("div:contains('jQuery')").siblings().slideUp(2000); // all the siblings of div:contains("jQuery") except this div itself will no effect on


// $("div, p").click(function() {
// $(this).siblings().slideUp(2000);
// $(this).siblings().fadeOut(2000);

// $(this).siblings(".select").fadeOut(2000); // Here it means that will search between the siblings on a siblings with a class .select

// try to click on one of the elements that have .select class but it will not fade as per our previouse example why?
// because even if it has a .select class but you click on it so the siblings will search on the siblings excluding the element that
// you clicked on so it will not effect and it will not fadeout as per our previous Example.

// });


////////////////////////////
// Next  => the next element 

// $("div, p").click(function () {
// $(this).next().fadeOut(2000);

// $(this).next().css("border", "5px solid #f00");

// $(this).next().slideToggle(1000);   IMPORTANT IMPORTANT IMPORTANT 

// $(this).next(".test").slideToggle(1000);   // Here if you clicked on the element it will check on the next element if it has .test class if it has so it will toggle

// });


///////////////////////////////
// prev => previous()

// $("div, p").click(function () {

// $(this).prev().slideToggle(2000);  // same the action of next but it effect not only next element, it will effect on the previous element

// $(this).prev(".test").slideToggle(2000) // here if you click on the element it will check on the previous element if it has .test class
// if it has so it will apply the .slideToggle on it 


// $(this).prev(".sa").css("border", "5px solid #00f");
// });




/////////////////////////////////
// next all => it means all the next elements 


// $("div, p").click(function () {
// $(this).nextAll().css("background", "#00f");


// $(this).nextAll(".test").css("background", "#00f"); // here we mention that from the element(exclude) that we clicked on.... check on all next elements 
//if you find any element of them that it has .test class apply and effect on it


// $(this).nextAll("p").css("background", "#00f");


// $(this).nextAll("div").css("background", "#00f");


// $(this).nextAll("aside").css("background", "#00f");


// $(this).nextAll("*").css("background", "#00f");  // Here all the elements it means next all nextAll() === nextAll("*")

// });

/////////////////////////////////
//prevAll();   it means that all previouse Elements

// $("div, p, aside").click(function() {

// $(this).prevAll().css("background", "red");


// $(this).prevAll(".test").css("background", "red");  // Here also same nextAll example check on all previous element 
//to check if it has class .test to effect and apply on it


// $(this).prevAll("div").css("background", "red");

// $(this).prevAll("p").css("background", "red");

// });


/////////////////////////////////
// nextUntil

// $("div, p, aside").click(function() {

// $(this).nextUntil().css("background", "#f00");  // if you didn't specify and value for nextUntill so it's working same nextAll()

// $(this).nextUntil(".test").css("background", "#f00");
// here it will start effect and apply on elements until it face an element with a class .test to it will stop there

// $(this).nextUntil("aside").css("border","5px solid #f00");
// Here it will effect and apply on the elements until face an aside element so it will stop apply there
// });


/////////////////////////////////
//prevUntil

// $("div, p, aside").click(function() {

// $(this).prevUntil().css("border", "5px solid #0f0");  // if you didn't specify and value for prevUntil so it's working same prevAll()


// $(this).prevUntil(".test").css("background", "#f00");  
// here it will start effect and apply backward(previous) on elements until it face an element with a class .test to it will stop there


// $(this).prevUntil("div").css("border", "5px solid #f00");
// Here it will effect and apply on the elements BACKWARD until it face an div element so it will stop apply there

// });


// });

/*-------------------------------------------------------------------------------*/

//Traversing Part 4
// $(document).ready(function () {
// first
// example: 1
// $("div").first().css("border","5px solid #f00");

// example: 2
// $("div").first().next().css("border", "5px solid #f00");

/////////////////////////////////

//last
// example: 1
// $("div").last().css("border", "5px solid #f00");

// example: 2
// $("div").last().prev().css("border", "5px solid #f00");

// Example: 3
// $("div").last().prevAll().css("border", "5px solid #f00");

/////////////////////////////////

// Equal it works with indexing , starting from 0 --->

// Examples:
// $("div").eq(0).css("border", "5px solid #f00");   // the first div
// $("div").eq(1).css("border", "5px solid #f00");   // the second div
// $("div").eq(-1).css("border", "5px solid #f00");   // the last div
// $("div").eq(-2).css("border", "5px solid #f00");   // the second div but backward from last
// $("div").eq(-2).next().css("border", "5px solid #f00");   //it means last div 
// $("div").eq(-2).prev().css("border", "5px solid #f00");   //the third div but backward from last
// $("div").eq(-1).prevAll().css("border", "5px solid #f00");   //it means last item then select all the previous items all

/////////////////////////////////

// Filter(you can write here class, element, jQuery Object, and function)


// $("div").filter(".jquery").css("border","5px solid #00f");  // target div with a class .jquery 


// $("div").filter(".jquery").next().css("border", "5px solid #00f");


// $("div").filter($(".jquery")).next().css("border", "5px solid #00f");  // jQuery object


// $("div").filter(function(alakel) { return alakel === 1;}).css("border","5px solid #00f");
// in the previouse example here we put a function as parameter for filter and inside the functio nthere is a parameter alakel
// and we return it as a number 1 so here it means that it return a number 1 and by indexing it's the second div that has 1 indexing 
// so it will effect on the div with indexing one 


// $("div").filter(function (alakel) { return alakel === 3; }).css("border", "5px solid #00f"); //here it will return the div number 4 

// $("div").filter(function (alakel) { return alakel === 3; }).next().css("border", "5px solid #00f"); //here it will return the div number 5 because of next()


/////////////////////////////////

// not it means not equal   => not(here it accepts class, element , jQuery object and function)

//VERY VERY IMPORTANT IN THE REAL LIFE SCENARIOS

// $("div").not(".jquery").css("border", "5px solid #f00"); // here it will apply and effect in all divs except that has .jquery class

// $("div").not($(".jquery")).css("border", "5px solid #f00"); // here it will apply and effect in all divs except that has .jquery class


// $("div").not(function (alakel) { return alakel === 2}).css("border", "5px solid #f00");
// our previous example will effect on all divs except on the div with indexing 2 that means the third div on the group



// two Examples below to show the difference between filter and not:


// $("div").not(":contains('jQuery')").css("border", "5px solid #f00"); // Here all divs that not contains jQuery word effect on it all

// $("div").filter(":contains('jQuery')").css("border", "5px solid #f00"); // Here check all divs and effect on div that only contains jQuery word

// });

/*-------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------*/

// Selectors references 

// $(document).ready(function() {

// -1:   *

// $("*").click(function () {    // the * here meaning all elements and this is related to * that means all elements 
//     $(this).fadeOut(500);
// });


// $("body *").css("border", "2px solid #00f");   // here it means all elements inside the body tag/element



// -2:   class

// $(".alakel").css("border","3px solid #00f");




// -3: ID
// $("#akel").css("border","5px solid #f00")


// -4: group classes
// $(".alakel, .fofo, .koko").css("border","2px solid #f00");


// -5: Element tag global ,
// $("div").css("border", "2px solid #f00");
// $("p").css("border", "2px solid #00f");


// -6: group elements
// $("p, div, aside").css("border", "2px solid #f00");


// -7: using filter with tags elements
// $("p").first().css("border", "2px solid #f00");
// $("p").last().css("border", "2px solid #f00");


// -8: using isndie the selector
// $("p:first").css("border", "2px solid #f00");
// $("div:last").css("border", "2px solid #f00");
// $("p:last, div:first, aside:last").css("border", "2px solid #00f");


// -9: mixing by using element tag and class and filter
// $("div, .koko, p:last").css("border","2px solid #f00");



// -10: even and odd:
// $("div:even").css("border","2px solid #f00");
// $("div:odd").css("border","2px solid #f00");


// $("div:odd").css("background", "#ddd");

// });


//  Selectors references part 2

// $(document).ready(function () {
// $("p:first").css("border", "5px solid #f00"); // p first element on the page

// $("p:first-child").css("border", "5px solid #f00"); // p must be a first child of a parent like on our example p first child of body tag

// $("p:last-child").css("border", "5px solid #f00");  // be note here that must be last child for the parent and it must be p type also to be effect

// $("p:last").css("border", "5px solid #f00");        //last element on the page 


// $("div:first-of-type").css("border","2px solid #f00");   // it will target first element as a type = div inside each parent


// $("div:last-of-type").css("border","2px solid #f00");   // it will target last element as a type = div inside each parent


// Important nth-child(?)
// $("p:nth-child(2)").css("border","5px solid #00f");  // here it must be focus on two things it must be Paragraph and it must be the second child to take the effect on

// $("div:nth-child(3)").css("border","5px solid #f00"); // here it must be focus on two things it must be div and it must be also the third child of the parent to take the effect on


// example with using nth-child and next();
// $("div:nth-child(3)").next().css("border", "5px solid #f00");




// $("p:nth-last-child(2)").css("border", "5px solid #f00");




// $("div:nth-of-type(2)").css("border","2px solid #f00");
// $("p:nth-of-type(3)").css("border","2px solid #f00");


//     $("p:nth-last-of-type(2)").css("color","green")
// });


//  Selectors references part 3


// $(document).ready(function() {
// only =====>>> child and of type
// $("p:only-child").css("border","2px solid #f00");    // it means that this targeted paragraph must be the only child of its parent to effect on it

// $("p:only-of-type").css("border", "2px solid #f00"); // here it means no problem to be not only child of its parent but it must be the only child from its type inside the parent to effect on it


//direct child   >
// $("div > p").css("border", "5px solid #f00");   // it means that it needs paragraph but it must be the direct child(level 1 child)


// // here it means all p inside div , what ever the level of the children without any care of the child level so it's general more than direct child
// $("div p").css("border", "5px solid #f00");





// next

// $("div + p").css("border","5px solid #f00"); // Here is means that div and the next element of this div will be paragraph to target this paragraph and effect on it


// $("div + h3").next().css("border","5px solid #f00"); // here it means that div the next element of it must be h3 so now because of next target the next element of that h3 and effect on it



// ~    siblings

// $("div ~ h3").css("border", "5px solid #f00");    // choose the h3 headings that are siblings brothers , and same level of the div not child not a parent, must be in the same level (siblings)




//equal(index)
// $("ul li:eq(0)").css("border","5px solid #f00");    // here it means that i want to target the first li which is its index 0 inside the ul


//gt(0) => greater than the targeted element by indexing ()
// $("ul li:gt(1)").css("border","5px solid #f00");  // it means that target all elements that greater than the second element which equal to index 1


// lt(0) => less than the targeted element by indexing ()
// $("ul li:lt(5)").css("border","5px solid #f00");   // it means that the element that has index = 4


// not
// $("ul li:not( :contains('5'))").css("border", "5px solid #f00");  // here we used not that it means in our example target any li that not contains text with a number 5


// $("ul li:not( :contains('number'))").css("border", "5px solid #f00"); // here w eused not that it means in our example target any li that not contain number word

// });


//  Selectors references part 4

// $(document).ready(function () {
// // select all the headers inside your page h1 ----> h6    :header
// $(":header").css("color", "#00f");

// // Animated select on element that its status is animating
// $("div").animate({ width: "500px" }, 8000);
// $("div").animate({ height: "300px" }, 8000);


// $("p").animate({ width: "500px" }, 8000);

// // click on h1 to change the color of the animated div and paragraph
// $("h1").click(function () {
//     $(":animated").css({ background: "#f00", color: "#fff" });     // it means that check the animated items that already starting animation inside the page and use the effect on this element
// });                                                                 // also i make the paragraph animated so it will effect on it too when we click on the header one



// focus

// $("input").focus(); // 1- we choose the element that we want to make focus on it 
// $(":focus").css("padding","20px");  // here we take the selector reference that take focused element to make effect on it 



// contains
// $("div:contains(2)").animate({width: "500px"}, 8000);
// $("div:contains('This')").animate({width: "500px"}, 8000).css("background", "#f00");




// has
// $("div:has('p')").css("color", "#080");   // here we want div that has paragraph to effect on

// $("div:has('span')").css("color", "#f00");  // here we want div that has span inside it to effect on

// $("div:has('.alakel')").css("color", "#f00");   // here we want div that has an element that its class = .alakel

// $("div:has('#alakel')").css("color", "#f00");    // here we want div that has an element that its id = #alakel




// empty
// $(":empty").css("background", "#080");    // target all empty elements on the page 


// parent
// $(":parent").css("border", "1px solid #f00");    // target all the elements that it's a parent and that's meaning which has a child or text inside it


// note to understand the previouse:    empty != parent





// :hidden it means all the hidden element inside the page
// Important note that it will effect on the elements that display: none; and it will not effect on element that make its visibility: hidden;
// the reason because Visibility: hidden; the elements are on the page not same display: none; which mean the elements left the page the not there any more

// $("button").click(function () {
//     $(":hidden").fadeIn(2000);
// });



// : Visible it means all elements visible that you can see it on the page 
// $("button").click(function () {
//     // $(":visible").css("background", "#f00"); //it means all elements visible that you can see it on the page 

//     // $("div:visible").css("background", "#f00");  // it means all div elements visible that you can see it on the page 

//     // $("div:visible").slideToggle(1000); // the divs visible will hide it on the page

//     // $("div:hidden").slideToggle(1000);  // the divs hidden will show it on the page
// });


// :root =====>>>>> HTML tag
// $(":root").addClass("js");
// $(":root").css("background", "green");




// lang attribute

// $("p:lang('en')").css("color", "red");    // to effect on the paragraph that has attribute lang = en
// $("p:lang('ar')").css("background", "gray"); // to effect on the paragraph that has attribute lang = ar

// });




//  Selectors references part 5

// $(document).ready(function() {
//     // $("[src]").css("border-radius", "50%");  // here it means any element has attribute src will be effect on

//     // $("[title]").css("border-radius", "50%");  // here it means any element has attribute title will be effect on

//     // $("[alt]").css("border-radius", "50%");     // here it means any element has attribute alt will be effect on




//     // $("[alt='image 2']").css("border-radius", "50%"); // here it means the element that has an attribute called alt and its value = image 2

//     // $("[title='Test 3']").css("border-radius", "50%");  // here it means the element that has an attribute called title and its value = Test 3


//     // $("[lang]").css("color", "#00f");  // any element that has attribte lang

//     // $("p[lang]").css("color", "#00f");  // here it means that p that has attribute lang



//     // $("div[lang='ar']").css("color", "#00f");   //  here it means that div that has attribute lang and its value = 'ar'



//     // Important !=   (Not Equal)
//     // $("div[lang!='ar']").css("color", "#00f");  // here !=  not equal means so i need the div that its attribute lang not equal to ar


//     // $("img[title!='Test 3']").css("border-radius", "50%"); // so here it will target the images that it has a title attribute but its value not equal to Test 3

//     // $("[title], [lang]").fadeOut(4000); // all elements that have title and lang attribute make a fadeout on them


//     // $("img[alt='image 3'], div[lang='ar']").fadeOut(2000); // here we group two element with set the attribute and its value for each one 




//     // below focus on *   any sentence has the word, it no need a specific word stands alon it search with ing with past form no worries 

//     // alt* = ' ' Here the * it means that search inside the value of alt attribute on word My    
//     $("img[alt*='My']").css("border-radius","50%");
//     // it means that search inside the value of alt attribute on word Your
//     $("img[alt*='Your']").css("border-radius", "50%");


//     // i want an image that the title attribute its value has a word PHP inside the value so it can be PHP *** and other words because of *
//     $("img[title*='PHP']").css("border-radius", "50%");




//     // below focus on ~   here it needs a specific word exactly, here it needs exaclty this word stands alone
//     $("img[title~='Test 3']").css("border-radius", "50%"); // 




//     // ^   here it means starting with only 
//     $("div[lang^='fr']").css("color", "green"); //




// // the summary: of part 5 selectors 

// // 1- [attribute] => [title]
// // 2- element[attribute] => img[src]
// // 3- element[attribute = 'value'] => p[lang ='en']
// // 4- element[attribute != 'value'] => div[lang != 'ar']
// // 5- element[attribute*= 'value'] => a[href*='link']
// // 6- element[attribute~= 'value'] => a[href~='contains']
// // 7- element[attribute^= 'value'] => a[href^='start']


// });


// Selectors references part 6

// $(document).ready(function () {
//     // select all the input on the page
//     $(":input").css("display", "block");

//     // // you can also set for the previous example a parent element as our example it is a body element so it will be as per below:
//     // $("body:input").css("display", "block");

//     // // if the input inside a parent div
//     // $("div :text").click(function () {
//     //     $(this).fadeOut(2000);
//     // });

//     // $(":password").click(function () {
//     //     $(this).fadeOut(2000)
//     // });

//     // $(":submit").click(function () {
//     //     $(this).fadeOut(2000)
//     // });

//     // $(":reset").click(function () {
//     //     $(this).fadeOut(2000)
//     // });

//     // $(":checkbox").click(function () {
//     //     $(this).fadeOut(2000)
//     // });

//     // $(":radio").click(function () {
//     //     $(this).fadeOut(2000)
//     // });

//     // $(":file").click(function () {
//     //     $(this).fadeOut(2000)
//     // });



//     // choose the input that was disabled
//     // $(":disabled").fadeOut(5000);


//     // choose the input that was enabled all inputs that enabled so it will make for all inputs that were not disabled
//     // $(":enabled").fadeOut(5000);



//     // :checked =====> radio or checkbox only you must be set its value on html as a checked to can target it with below
//     // $(":checked").fadeOut(2000);



//     // :selected => with select and inside option but it must be use selected inside the option
//     console.log($(":selected").val());   // it will print the value of the selected option inside the console which is 500
// });



// EVENTS REFERENCE

// BIND    you can set an event on the elements
// Syntax : Bind(Event, Data, Function, Map)
// event: required, data: optional, function: required

// $(document).ready(function () {
    // $(".normal").click(function () {
    //     $(this).hide();
    // });

    // $(".normal").mouseenter(function () {
    //     $(this).toggleClass("color");
    // });

    // $(".normal").mouseleave(function() {
    //     $(this).toggleClass("color");
    // })




    // now example with bind
    // $(".normal").bind("click", function () {
    //         $(this).hide();
    // });



    // Multi events with bind   only put between events a one white space
    // $(".normal").bind("mouseenter mouseleave", function() {
    //     $(this).toggleClass("color")
    // });




    // Event map => i have an element and i have more than one event and each event has its own different action/function
    // Important to understand the syntax of map events with bind
    // $(".map").bind({
    //     click: function() { $(this).text("You Have Clicked Me!")},
    //     dblclick: function() {$(this).text("You Have Clicked Me Twice")},
    //     mouseenter: function() {$(this).text("Your Cursor Is on Me!")},
    //     mouseleave: function() {$(this).text("Your Cursor Is away from Me")}
    // })




//     // Custom event ======>>>> i want to make my own events 
//     $(".custom").bind("myCustomEvent", function (event, myName, myAge) {
//         $(this).text("Hello " + myName + "Your Age is: "+ myAge);
//     });

//     $("button").click(function() {
//         $(".custom").trigger("myCustomEvent", ["Alakel", "30"]);

//     });
    


//     // another Example with design ----- Important to understand the custom event IMPORTANT IMPORTANT
//     $(".custom-event").bind("myCustomDesign", function (event, myHeight, myWidth, myBackGround, myColor) {
//         $(this).height(myHeight).width(myWidth).css({
//             backgroundColor: myBackGround,
//             color: myColor

//         });
//     });

//     $("a").click(function () {
//         $(".custom-event").trigger("myCustomDesign", ["400px", "800px", "red", "#fff"]);

//     });

// });

////////////////////////////////////// Important     on() event

// Syntax:   on(Child Selector, Event , Data, Function, Map);

// Child Selector => Optional In on() event

// $(document).ready(function() {
    // old way can you write on() event with
    // $("body").on("click", ".normal", function() {
    //     $(this).hide();
    // });

    // Modern Syntax can you write on() even with
    // Single Event with on()
    // $(".normal").on("click", function() {
    //     $(this).hide();
    // }); 

    // Multi Event with on
    // $(".normal").on("mouseenter mouseleave", function() {

    //     $(this).toggleClass("color");
    // });


    // same previous example but with old way
    // $("body").on("mouseenter mouseleave", ".normal" ,function () {
    //     $(this).toggleClass("color");
    // });

    

    //Custom Event with On()   // make my own custom event as per our example it's a myCustom
    // $(".custom").on("myCustom", function(event) {
    //     $(this).hide();
    // });
    // // Here you must make trigger to the event my custom 
    // $("button").on("click", function() {
    //     $(".custom").trigger("myCustom");
    // });



    //another example with custom event but with parameters 
    // $(".custom").on("myCustom", function(event, myHeight, myWidth, myBack, myColor) {
    //     $(this).height(myHeight).width(myWidth).css({
    //         backgroundColor: myBack,
    //         color: myColor
    // });
    // });


    // $("button").on("click", function() {
    //     $(".custom").trigger("myCustom", ["200px", "400px", "#00f", "#f00" ]); // here the values of the myCustom parameters

    // });




    // Event map with on()       IMPORTANT IMPRTANT MAP WITH ON()

    // $(".map").on({
    //     click: function() {$(this).text("You Have Clicked Me!!")},
    //     dblclick: function() {$(this).text("You Have Double Clicked Me!!!")},
    //     mouseenter: function() {$(this).text("The Cursor Hoverd On Me!!")},
    //     mouseleave: function() {$(this).text("The Cursor Away From Me!!!")}
    // });




    //IMPORTANT Example: Future Elements Event with on()
    // if you want to use on() and effect on future elements that created by jQuery so you must follow the Syntax to call the container of the element its Parent as per below in the second on()
    // $("button").on("click", function() {
    //     $("<p>This is New Paragraph</p>").insertAfter(this);
    // });

    // // Syntax:    $(parent or Container of the element).on("event", "targeted element", function(){})
    // $("body").on("click","p", function() {
    //     $(this).fadeOut(1000);
    // });

// });