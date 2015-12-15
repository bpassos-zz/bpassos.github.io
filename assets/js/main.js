$(document).ready(function () {  
    
    setTimeout(function() {
        $('.profile img').fadeIn( "500" );
        
        function hideSpinner() {
            $('.spinner').hide();
        }
        hideSpinner();
            
    }, 500);
});

