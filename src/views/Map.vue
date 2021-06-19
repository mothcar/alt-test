<template>
  <div id="map" style="width:100%;height:350px;"></div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {
      mapContainer: '',
      lat: 33.450701,
      lng: 126.570667,
      map: '',
      zoomControl: null,
    }
  },

  mounted() {
    this.mapContainer = document.getElementById('map');
    this.loadKakaoMap(1);    
  },

  methods: {
    loadKakaoMap(zoomLevel) {
      if (window.kakao && window.kakao.maps) {
        this.initKakaoMap(zoomLevel);
        return;
      }

      const script = document.createElement('script');

      script.onload = () => kakao.maps.load(this.initKakaoMap);
      script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' + process.env.VUE_APP_KAKAO_MAP_KEY;

      document.head.appendChild(script);
    }, // loadKakaoMap

    loadGoogleMap() {
      if (window.google && window.google.maps) {
        this.initGoogleMap();
        return;
      }

      const script = document.createElement('script');

      script.onload = () => kakao.maps.load(this.initGoogleMap);
      script.src = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.VUE_APP_GOOGLE_MAP_KEY;

      document.head.appendChild(script);
    },

    initKakaoMap(zoomLevel) {
      const mapOption = {
        center: new kakao.maps.LatLng(this.lat, this.lng),
        level: zoomLevel,
      }

      this.map = new kakao.maps.Map(this.mapContainer, mapOption);

      if (this.map.mapTypeId) {
        //this.map.removeListener('zoom_changed', this.googleZoomEventHandler);
        this.map.removeListener('idle', this.googleZoomEventHandler);
      }
      
      //kakao.maps.event.addListener(this.map, 'zoom_changed', this.kakaoZoomEventHandler);
      kakao.maps.event.addListener(this.map, 'idle', this.kakaoZoomEventHandler);
    },

    initGoogleMap() {
      const mapOption = {
        center: { lat: this.lat, lng: this.lng },
        zoom:  7,
      }

      this.map = new google.maps.Map(this.mapContainer, mapOption);

      if (!this.map.mapTypeId) {
        //kakao.maps.event.removeListener(this.map, 'zoom_changed', this.kakaoZoomEventHandler);
        kakao.maps.event.removeListener(this.map, 'idle', this.kakaoZoomEventHandler);
      }

      //this.map.addListener('zoom_changed', this.googleZoomEventHandler);  
      this.map.addListener('idle', this.googleZoomEventHandler);    
    },

    clearMap() {
      const map = document.getElementById('map');

      while (map.hasChildNodes()) {
        map.removeChild(map.firstChild);
      }
    },

    kakaoZoomEventHandler() {
      const level = this.map.getLevel();



      if (level > 13) {
        this.clearMap();
        this.loadGoogleMap();
        return;
      }
      console.log('Kakao Handler')
    },

    googleZoomEventHandler() {
      const level = this.map.getZoom();
      let latlng = this.map.getCenter()
      // console.log('test: ', TEST.lat())
      const pos = {
        lat: latlng.lat(),
        lng: latlng.lng(),
      };

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: pos }, (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            //map.setZoom(11);
            let fullAddress = results[0].formatted_address 
            let arrAddress = fullAddress.split(' ')
            
            //console.log(results[0].formatted_address);
            console.log('Country Name : ', arrAddress[0]);

            if (arrAddress[0]=='대한민국' && level > 7) {
              this.clearMap();
              this.loadKakaoMap(12);
              return;
            }

          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      });


      // 현재위치 ****************************************************************
      /*
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            console.log('Position : ', pos)

            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ location: pos }, (results, status) => {
              if (status === "OK") {
                if (results[0]) {
                  //map.setZoom(11);
                  let fullAddress = results[0].formatted_address 
                  let arrAddress = fullAddress.split(' ')
                  
                  //console.log(results[0].formatted_address);
                  console.log('Country Name : ', arrAddress[0]);

                  if (level > 7) {
                    this.clearMap();
                    this.loadKakaoMap(12);
                    return;
                  }

                } else {
                  window.alert("No results found");
                }
              } else {
                window.alert("Geocoder failed due to: " + status);
              }
            });

          },
          () => {
            //handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        //handleLocationError(false, infoWindow, map.getCenter());
      }   
      */

         

      
      console.log('Google Handler')
    },



  } // methods 
}
</script>