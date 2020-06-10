

// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateDebit(txtDebit) {
    var a = document.getElementById(txtDebit).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){


    $('#datepicker').datepicker({
    startDate: '-2m',
    endDate: '+2d'
    }); 

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").val("xxx-xxx-xxxx");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    $("#debit").on("change", function(){
        if (!validateDebit("debit")){
            alert("Wrong format for card number");
            $("#debit").val("xxxx-xxxx-xxxx-xxxx");
            $("#debit").addClass("error");
        }
        else {
            $("#debit").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    var mechanicNum;
    var dayOff1;
    var dayOff2;
    const btn = document.querySelector('#mechanic');
    // handle click button
    btn.onclick = function () {
        const rbs = document.querySelectorAll('input[name="mechanic"]');
        let selectedValue;
        for (const rb of rbs) {
            if (rb.checked) {
                selectedValue = rb.value;
                if (selectedValue == "Cameron"){
                    mechanicNum = 1;
                    dayOff1 = 6
                    dayOff2 = 0
                } else if (selectedValue == "Jeremy") {
                    mechanicNum = 2;
                    dayOff1 = 0
                    dayOff2 = 1
                } else if (selectedValue == "Julia") {
                    mechanicNum = 3;
                    dayOff1 = 5
                    dayOff2 = 6
                }
                break;
            }
        }
    };



    $("#dateInput").datepicker(
        {
        beforeShowDay: function(date) {

            var show = true;
            if(date.getDay()== dayOff2) show= false
            if(date.getDay()== dayOff1) show= false
            return [show];
        }
    });


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    $("#debit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
    });

    $("#fname").on("mouseenter", function(){
        $("#fname").addClass("showInput");
    });

    $("#fname").on("mouseleave", function(){
        $("#fname").removeClass("showInput");
    });

    $("#fname").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
    });

    $("#lname").on("mouseenter", function(){
        $("#lname").addClass("showInput");
    });

    $("#lname").on("mouseleave", function(){
        $("#lname").removeClass("showInput");
    });

    $("#lname").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
    });

    $("#phone").on("mouseenter", function(){
        $("#phone").addClass("showInput");
    });

    $("#phone").on("mouseleave", function(){
        $("#phone").removeClass("showInput");
    });

    $("#phone").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
    });

    $("#email").on("mouseenter", function(){
        $("#email").addClass("showInput");
    });

    $("#email").on("mouseleave", function(){
        $("#email").removeClass("showInput");
    });

    $("#email").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
    });


});