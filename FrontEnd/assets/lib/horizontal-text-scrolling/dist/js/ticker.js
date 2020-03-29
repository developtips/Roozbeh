//store our object keys from newsTickerJSON in model.js here
var newsTickerHeroArray = Object.keys(newsTickerJSON);

//consume the data in model.js
function newsTickerHero() {

    //set position equal to the last object in newsTickerHeroArray
    var position = newsTickerHeroArray[newsTickerHeroArray.length-1];
    var tickerContainer = $('.flex-ticker')
    var tickerText = $(".flex-ticker__text");

    //fade in, pause, fade out then repeat
    tickerContainer.fadeIn('slow', function () {
        $(this).delay(3000).fadeOut('slow', newsTickerHero);
    });

    //empty before the next loop
    tickerText.empty();

    //set the text of the ticker to newsTickerJSON[position]
    tickerText.prepend(newsTickerJSON[position].headline);
    tickerText.wrap("<a class='flex-ticker__a' href='" + newsTickerJSON[position].url + "' target='_blank'></a>");

    //push the last object in newsTickerHeroArray to the beginning
    newsTickerHeroArray.unshift(position);

    //then remove the last object, et voila!
    newsTickerHeroArray.pop(); 

}

//initiate the news ticker
newsTickerHero();