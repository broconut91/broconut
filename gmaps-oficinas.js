var locations = [
      
      ['Oficina privada  <p> Gascón y Gorriti</p>', -34.5948172,-58.4233624, 1],
       ['Escritorio en oficina RRHH  <p> Virrey del Pino y Moldes</p>',-34.567988, -58.455675, 2], 
       ['Escritorio en taller de diseño <p> Castro al 900</p>', -34.628588, -58.419698, 3],
	   ['Oficina privada <p> Rivadavia y 9 de Julio</p>', -34.608397, -58.380537, 4],
    ];


    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
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
