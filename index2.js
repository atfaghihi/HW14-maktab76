$('div').append(`<p><b>This is a little poem:</b><br/>
 Twinkle, twinkle, little star<br/>
 How I wonder what you are<br/> 
 Up above the world so high<br/> 
 Like a diamond in the sky<br/> 
 Twinkle, twinkle little star<br/>
 How I wonder what you are</p><button type="submit">Hide</button>`);

$('button').click(function () {
    $('p').fadeToggle();
});