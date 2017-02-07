/**
 * Created by austinh on 2/7/17.
 */

var host = "http://api.giphy.com";
var api_key = "dc6zaTOxFJmzC";


$(document).ready(function () {
    getTrendingGif();
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