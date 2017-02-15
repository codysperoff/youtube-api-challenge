//API Key: AIzaSyAB0ocjQTwHmy01_uYzmaA-wG9n70Rd6rI

//1. Take input from user
$(document).ready(function () {
    $('.search-form').submit(function (event) {
        event.preventDefault();
        // get the text the user submitted
        var userText = $(this).find('#user-text').val();
        //console.log(userText);
        getDataFromAPI(userText, displayYouTubeSearchData);
    });
});


//2. Make the api call with the input from the user
var YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromAPI(searchTerm, callback) {
    var settings = {
        url: YOUTUBE_URL,
        data: {
            part: 'snippet',
            key: 'AIzaSyAB0ocjQTwHmy01_uYzmaA-wG9n70Rd6rI',
            q: 'searchTerm',
        },
        dataType: 'json',
        type: 'GET',
        success: callback
    };
    $.ajax(settings);
}

//3. Show the api results in a repository

function displayYouTubeSearchData(data) {
    console.log(data);
    var resultElement = '';
    if (data.search) {
        data.search.forEach(function (item) {
            resultElement += '<li>';
            resultElement += '<h2>' + item.title + '</h2>';
            resultElement += '<a href="' + www.googleapis.com / youtube / v3 / search + '"><img src ="' +
        });
    }
}
