var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.9, lng: 2.3508},
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

var marker = new google.maps.Marker({
    position: {lat: 48.871592, lng: 2.367881},
    map: map,
    title: 'Le Carillon'
  });

  var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Le Carillon</h1>'+
        '<div id="bodyContent">'+
        '</div>'+
        '</div>';

var infowindow = new google.maps.InfoWindow({
  content: contentString
});

marker.addListener('click', function() {
  infowindow.open(map, marker);
});

var markertwo = new google.maps.Marker({
    position: {lat: 48.925432, lng: 2.359915},
    map: map,
    title: 'Stade de France'
  });

  var contentStringTwo = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Stade de France</h1>'+
        '<div id="bodyContent">'+
        '</div>'+
        '</div>';

var infowindowtwo = new google.maps.InfoWindow({
  content: contentStringTwo
});

markertwo.addListener('click', function() {
  infowindowtwo.open(map, markertwo);
});

var markerthree = new google.maps.Marker({
    position: {lat: 48.862993, lng: 2.370735},
    map: map,
    title: 'The Bataclan'
  });

  var contentStringThree = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">The Bataclan</h1>'+
        '<div id="bodyContent">'+
        '</div>'+
        '</div>';

var infowindowthree = new google.maps.InfoWindow({
  content: contentStringThree
});

markerthree.addListener('click', function() {
  infowindowthree.open(map, markerthree);
});

var markerthree = new google.maps.Marker({
    position: {lat: 48.853784, lng: 2.382070},
    map: map,
    title: 'La Belle Equipe'
  });

  var contentStringThree = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">La Belle Equipe</h1>'+
        '<div id="bodyContent">'+
        '</div>'+
        '</div>';

var infowindowthree = new google.maps.InfoWindow({
  content: contentStringThree
});

markerthree.addListener('click', function() {
  infowindowthree.open(map, markerthree);
});


loadNews(); //will connect to news apis
}
