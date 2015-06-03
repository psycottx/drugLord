var main = $(".list-item-group").click(function(){ 
    $(this).addClass('active'); 
    $(this).removeClass('active'); 
});

$(document).ready(main);