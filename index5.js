const API_URL = 'https://62bec3b7be8ba3a10d5afb89.mockapi.io/users';


$('#btn').click(function () {
    const div = $('div');
    $.ajax({ url: 'https://62bec3b7be8ba3a10d5afb89.mockapi.io/users' }).done(function (users) {
        $.each(users, function (index, user) {
            div.append(
                `<p style="width: 200px; display: flex; flex-direction: row; gap: 30px; border: 4px solid pink">${user.toDos}<span>${user.idNumber}</span></p>`
            );
        });
    });
});