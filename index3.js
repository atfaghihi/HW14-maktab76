const div = $('div');

$('button').click(function () {
    div.append(`<p>First name: <span id='firstP'></span></p><p>Last name: <span id='lastP'></span></p>`);
    $("#firstP").html($('#firstInput').val());
    $("#lastP").html($('#lastInput').val());
});