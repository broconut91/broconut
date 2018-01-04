    var locations = [
      ['Good Coffee', -34.564625,-58.4565646, 4],
      ['Origen Cafe', -34.620679,-58.3752348, 3],
      ['Santal', -34.5652639,-58.4527318, 2],
      ['La Panotteca', -34.5658051,-58.4656836, 1],
       ['Origen Café', -34.6205512,-58.374237, 1
    ];


    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: new google.maps.LatLng(-34.586814,-58.428149),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) { 
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
