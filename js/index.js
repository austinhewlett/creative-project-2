/**
 * Created by austinh on 2/7/17.
 */

var host = "http://api.giphy.com";
var api_key = "dc6zaTOxFJmzC";


$(document).ready(function () {
    getTrendingGif();
    getRandomGif();
    getGif('cats');
});

function getTrendingGif() {
    var endpoint = "/v1/gifs/trending";
    var url = host + endpoint + "?api_key=" + api_key + "&rating=g";
    $.ajax({
        url: url,
        success: function (response) {
            var random = Math.floor(Math.random() * 26);
            $('#trending-gif-container').attr('src', response.data[random].images.downsized_large.url)
        }
    })
}

function getRandomGif() {
    var endpoint = "/v1/gifs/random";
    var url = host + endpoint + "?api_key=" + api_key + "&rating=g";
    $.ajax({
        url: url,
        success: function (response) {
            $('#random-gif-container').attr('src', response.data.image_original_url)
        }
    })
}

function getGif(input) {
    var endpoint = "/v1/gifs/search";
    var url = host + endpoint + "?api_key=" + api_key + "&rating=g&q=" + input;
    $.ajax({
        url: url,
        success: function (response) {
            var random = Math.floor(Math.random() * 26);
            $('#trending-gif-container').attr('src', response.data[random].images.downsized_large.url)
        }
    })
}