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
            q: searchTerm,
            maxResults: 10,
            type: "video"
        },
        dataType: 'json',
        type: 'GET',
        success: callback
    };
    $.ajax(settings);
}

//3. Show the api results in a repository

function displayYouTubeSearchData(data) {
    //console.log(data);
    var resultElement = '';
    if (data.pageInfo.totalResults == 0) {
        alert("No Results Found!");

    } else {
        data.items.forEach(function (item) {
            resultElement += '<li>';
            resultElement += '<h2>' + item.snippet.title + '</h2>';
            resultElement += '<a href="https://www.youtube.com/watch?v=' + item.id.videoId + '" target = "_blank">'; //target blank will open the video in a new window
            resultElement += '<img src ="' + item.snippet.thumbnails.high.url + '"/>'; //displays the video's thumbnail
            resultElement += '</a>';
            resultElement += '</li>';
        });
    }
    //console.log(resultElement);

    $('#search-results').html(resultElement);
}

//function watchSubmit() {
//    $('.search-form').submit(function (e) {
//        e.preventDefault();
//        var query = $(this).find('#user-text').val();
//        getDataFromAPI(query, displayYouTubeSearchData);
//    });
//}
//$(function () {
//    watchSubmit();
//});
