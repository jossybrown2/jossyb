$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    // creating phonePattern for validating phone
    var phonePattern = /\d{3}[\-]\d{3}[\-]\d{4}/;
    
    // Statement that moves focus to arrival date textbox.
    $("#arrival_date").focus();
    
    // Event handler for submit event of the form.
    $("#reservation_form").submit( function(evt){
        var isValid = true;
        /* trimming and putting entries back into control 
         * regardless whether the entries are valid */
        var arrivalDate = $("#arrival_date").val().trim();
        $("#arrival_date").val(arrivalDate);
        
        var numNights = $("#nights").val().trim();
        $("#nights").val(numNights);
        
        var numAdult = $("#adults :selected").val().trim();
        $("#adult :selected").val(numAdult);
        
        var numChildren = $("#children :selected").val().trim();
        $("#children :selected").val(numChildren);
        
        var cusName = $("#name").val().trim();
        $("#name").val(cusName);
        
        var cusEmail = $("#email").val().trim();
        $("#email").val(cusEmail);
        
        var cusPhone = $("#phone").val().trim();
        $("#phone").val(cusPhone);
        
        //validating arrival date
        if (arrivalDate == "") {
            $("#arrival_date").next().text("Arrival Date must not be empty");
            isValid = false;
        } else {
            $("#arrival_date").next().text("");
        }
        
        //validating nights
        if (isNaN(numNights) || numNights == "") {
            $("#nights").next().text("Enter valid number of nights");
            isValid = false;
        } else {
            $("#nights").next().text("");
        }
        
        //validation not needed for Adults and Children
        
        //validating customer name
        if (cusName == "") {
            $("#name").next().text("Name must not be empty");
            isValid = false;
        } else {
            $("#name").next().text("");
        }
        
        //validating customer email using emailPattern
        if (cusEmail == "") {
            $("#email").next().text("Email is required");
            isValid = false;
        } else if ( !emailPattern.test(cusEmail) ) {
            $("#email").next().text("Must be a valid email address");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        
        //validating customer phone using phonePattern
        if (cusPhone == "") {
            $("#phone").next().text("This field is required");
            isValid = false;
        } else if ( !phonePattern.test(cusPhone) ){
            $("#phone").next().text("Enter valid phone");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }

        if (isValid == false) {
            evt.preventDefault();
            
        }
    });
		
}); // end ready