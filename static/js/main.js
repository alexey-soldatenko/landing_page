    
    var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 49.065783, lng: 33.410033},
          zoom: 6
        });
        var kharkov = new google.maps.Marker({
            position: {lat: 49.9935, lng: 36.230383},
            map: map
        });
        var dnipro = new google.maps.Marker({
            position: {lat: 48.464717, lng: 35.046183},
            map: map
        });
        var poltava = new google.maps.Marker({
            position: {lat: 49.588267, lng: 34.551417},
            map: map
        });
        var kiev = new google.maps.Marker({
            position: {lat: 50.4501, lng: 30.5234},
            map: map
        });
        var donetsk = new google.maps.Marker({
            position: {lat: 48.015883, lng: 37.80285},
            map: map
        });
        var ternopol = new google.maps.Marker({
            position: {lat: 49.553517, lng: 25.594767},
            map: map
        });
        var odessa = new google.maps.Marker({
            position: {lat: 46.482526, lng: 30.7233095},
            map: map
        });

        var infowindow = new google.maps.InfoWindow({
            content : "<span>032457182</span><span> Igor</span>"
        })

        kiev.addListener('click', function(){
            infowindow.open(map, kiev);
            });
      }


function show_form(wrap_name){
    var wrap = document.getElementById(wrap_name);
    wrap.style.display = 'block';
}

function close_form(wrap_name){
    var wrap = document.getElementById(wrap_name);
    wrap.style.display = 'none';
}