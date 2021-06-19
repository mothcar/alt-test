<template>
  <!-- <v-container  fluid> -->
  <v-layout class="" >
    <div id="map" style="width:100vw;height:90vh;"></div>
    
          

        
          
  </v-layout >
</template>

<script>
  import Helloworld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      Helloworld,
    },

    data: ()=>({
      map: null, 
    }),

    methods: {
      isMobile() {
        console.log('methods....')
      },

      initMap() {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
          mapOption = { 
              center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
              level: 3 // 지도의 확대 레벨
          };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption); 
        this.map = map

        kakao.maps.event.addListener(this.map, 'idle', function() {
        // console.log('!!! Init IDLE!!!')
        let level = map.getLevel()
        console.log('Level : ', level)
        if(level==5&&level>=5){
          map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
        } else if(level==4&&level<=4) {
          map = new kakao.maps.Map(mapContainer, mapOption); 
        }
        var position = map.getCenter();
        // _this.$store.dispatch('changeCenterLatlng', {newMsg:position})
        // console.log('LatLng : ', position)
        // showMarker()
      })


        

      },

      // initGMap() {
      //   let map = new google.maps.Map(document.getElementById("map"), {
      //     center: { lat: -34.397, lng: 150.644 },
      //     zoom: 8,
      //   });

      // },

      

    }, // methods 

    mounted() {
      let test = this.$vuetify.breakpoint.mdAndDown
      console.log('test : ', test)

      if (window.kakao && window.kakao.maps) {
        console.log('Mobile initMap()......')
        this.initMap();
      } else {
        console.log('Mobile load script......')
        const script = document.createElement('script');
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src =`http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_MAP}`
        document.head.appendChild(script);

        let recaptchaScript = document.createElement('script')
        // recaptchaScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_GOOGLE_MAP}&callback=initGMap&libraries=&v=weekly`)
        recaptchaScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_GOOGLE_MAP}&libraries=&v=weekly`)
        document.head.appendChild(recaptchaScript)
      }
    },

    created() {
      console.log('cteated....')
    }, // created 

    computed: {
      test() {
        console.log('This TEST Function is composed for DATA property')
      } 
    },// computued

  }
</script>
