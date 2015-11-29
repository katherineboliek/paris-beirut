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

  var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Bourj al-Barajneh</h1>'+
        '<div id="bodyContent">'+
        '</div>'+
        '</div>';

var infowindow = new google.maps.InfoWindow({
  content: contentString
});

marker.addListener('click', function() {
  infowindow.open(map, marker);
});

loadNews(); //will connect to news apis
}
