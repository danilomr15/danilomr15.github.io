$( document ).ready(function() {
    $('#home').click(function (event) { 
        event.preventDefault();
        $("#content").load('./static/pages/home.html'); 
    });
    $('#experience').click(function (event) { 
        event.preventDefault();
        $("#content").load('./static/pages/experience.html'); 
    });
    $('#academy').click(function (event) { 
        event.preventDefault();
        $("#content").load('./static/pages/academy.html'); 
    });
    $('#contact').click(function (event) {
        event.preventDefault();
        $("#content").load('./static/pages/contact.html'); 
    });
    $('#home').click();
});

