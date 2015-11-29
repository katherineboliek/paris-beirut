var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.87, lng: 35.498738},
    zoom: 12,
    scrollwheel: false,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

var marker = new google.maps.Marker({
    position: {lat: 33.843471, lng: 35.498738},
    map: map,
    title: 'Bourj al-Barajneh'
  });

  var contentString = '<div class="mapcontent">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h3>Bourj al-Barajneh</h3>'+
        '<div id="bodyContent"><p>Before 6PM, there were two suicide bombings in Bourjal-Barajneh, a suburb of Beirut known for being the home of many Shia Hezbollah. The first explosion was at a Shia mosque and the second was a nearby bakery. 43 people were killed in the two attacks.</p>'+
        '</div>'+
        '</div>';

var infowindow = new google.maps.InfoWindow({
  content: contentString,
  maxWidth: 400
});

marker.addListener('click', function() {
  infowindow.open(map, marker);
});

loadNews(); //will connect to news apis
}
