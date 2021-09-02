$( document ).ready(function() {
    $(".lang_select").on( "change", function() {
        window.location.href = $(this).val();
    });
    $(".ver_select").on( "change", function() {
        window.location.href = $(this).val();
    });
});