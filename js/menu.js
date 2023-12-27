$(document).ready(function() {
    $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
});

function menuOnClick() {
document.getElementById("menu-bar").classList.toggle("change");
document.getElementById("nav").classList.toggle("change");
document.getElementById("menu-bg").classList.toggle("change-bg");
}