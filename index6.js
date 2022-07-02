$('#add').click(function () {

    $('h1').append(`<p><button style="cursor: pointer; color: black; background-color: white;">${$('input').val()}</button></p>`);

    $('button').click(function (e) {
        e.target.remove();
    });
});







