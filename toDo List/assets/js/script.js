$("ul").on("click", "li", function(event){
    $(this).toggleClass("completed");
    event.stopPropagation();
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input").keypress(function(event){
    if (event.keyCode === 13){
        var todoContent = $(this).val();
        $("ul").append('<li><span><i class="far fa-trash-alt"></span></i> '+ todoContent +"</li>");
        $(this).val("");
    }
})
$('.toggler').click(function(){
    $('input').fadeToggle();
})