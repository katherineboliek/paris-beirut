var html = ""
var apiurl = "http://api.flickr.com/services/feeds/photos_public.gne?tags=paris,attacks&tagmode=all&format=json&jsoncallback=?"
function callFlickr(){
        console.log("document ready")
        $.getJSON(apiurl,function(json){
            console.log(json);
            $("#flickr").append('<p>"'+json.title+'"</p>');

            $.each(json.items,function(i,data){
                html += '<img src ="' + data.media.m + '">'
                });
            $("#flickr").append(html);
            console.log(html);
        });


}
