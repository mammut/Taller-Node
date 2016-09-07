function getURL(url){
    return $.ajax({
        type: "GET",
        url: url,
        cache: false,
        async: false
    });
}

//example use
$('#make-request').on('click', function(e) {
    $('#log').append('<p>Making request</p>');
    var msg = getURL("http://slowwly.robertomurray.co.uk/delay/9000/url/http://www.google.co.uk");
    console.log(msg);
    $('#log').append('<p>Request finished</p>');
});

$("#link").on('click', function(e) {
    e.preventDefault();
    $('#log').append('<p>Hi there</p>');
})
