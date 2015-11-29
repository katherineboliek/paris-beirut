var html = ""
var apiurl = "http://api.flickr.com/services/feeds/photos_public.gne?tags=beirut,bombings&tagmode=all&format=json&jsoncallback=?"
function callFlickr(){
        $.getJSON(apiurl,function(json){

            $.each(json.items,function(i,data){
                html += "<div><img src ='" + data.media.m + "' class='flickrpic'></div>"
                });
            $("#flickr").append(html);
        });


}
