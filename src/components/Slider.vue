<template>
<div>
    <b-container>
      <b-row class="justify-content-center">
        <b-col xs="12" sm="12" md="10" fluid="sm" >
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            fade
            controls
            background="#ababab"
            style="text-shadow: 3px 3px 3px #000;"
            @sliding-start="onSlideStart">
            <!-- Text slides with image 
            <b-carousel-slide
              caption="Cordeles"
              text="Amplia variedad de cordeles">
              <template v-slot:img>
                <div class="cont-video">
                  <video
                    class=" video-1"
                    autoplay
                    loop
                    muted
                    >
                    <source src="@/assets/videos/cordeles2.mp4" type="video/mp4">
                  </video>
                </div>
              </template>
            </b-carousel-slide> -->
            <b-carousel-slide >
              <h2>Cable de Henequén</h2>
              <template v-slot:img>
                <img 
                class="d-block  w-100 "
                src="@/assets/productos/Cable.jpg"
                width="720"
                :height="tam_img"                 
                alt="imagen"/>
              </template>
            </b-carousel-slide>
            <b-carousel-slide >
              <h2>Cable de Polipropileno</h2>
              <template v-slot:img>
                <img 
                class="d-block  w-100 "
                src="@/assets/productos/Cable_polipropileno.jpg"
                width="720"
                :height="tam_img"                 
                alt="imagen"/>
              </template>
            </b-carousel-slide>
            <b-carousel-slide >
              <h2>Jarcería</h2>
              <template v-slot:img>
                <img 
                class="d-block  w-100 "
                src="@/assets/productos/Jarciería.jpeg"
                width="720"
                :height="tam_img"                 
                alt="imagen"/>
              </template>
            </b-carousel-slide>
            <b-carousel-slide >
              <h2>Cordel</h2>
              <template v-slot:img>
                <img 
                class="d-block  w-100 "
                src="@/assets/productos/cordel.jpg"
                width="720"
                :height="tam_img"                 
                alt="imagen"/>
              </template>
            </b-carousel-slide>
            <b-carousel-slide >
              <h2>Costales</h2>
              <template v-slot:img>
                <img 
                class="d-block  w-100 "
                src="@/assets/productos/montana_costales.jpeg"
                width="720"
                :height="tam_img"                 
                alt="imagen"/>
              </template>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
    
</div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        windowWidth: window.innerWidth,
        txt: '',
        heigth_img:320,
        slider_content:[
          [
            "Cable Henequén",
            "../assets/productos/Cable.jpg"
          ],
          [
            "Cable de polipropileno",
            "@/assets/productos/Cable_polipropileno.jpg"
          ],
          [
            "Rafia",
            "@/assets/productos/Rafia_1.jpg"
          ],
          [
            "Cordel",
            "@/assets/productos/Cordel.jpg"
          ],
          [
            "Jarcería",
            "@/assets/productos/Jarcería.jpg"
          ],
          [
            "Barcina",
            "@/assets/productos/Barcinas.jpg"
          ],
          
        ],
      }
    },
    onCreate(){
      
    },
    computed:{
      tam_img(){
        this.windowWidth = window.innerWidth
          if(this.windowWidth <= 600){
            if(this.windowWidth <= 370){ 
                this.heigth_img = 150
                return 150
            }else{return 200}
          }else{return 320}
        }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
      onResize() {
        this.windowWidth = window.innerWidth
        if(this.windowWidth <= 600){
          if(this.windowWidth <= 370){ 
              this.heigth_img = 150
          }else{this.heigth_img = 200}
            
        }else{this.heigth_img = 320}
      }
    },
    watch: {
      windowWidth(newWidht, oldWidth) {
      this.txt = `cambio a ${newWidht} de ${oldWidth}`;
      }
    },

    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      })
    },

    beforeDestroy() { 
      window.removeEventListener('resize', this.onResize); 
    },

  }
</script>
<style scoped>
  .video-1 {
    width: 1020px;
    align-self: center;
  }
  .cont-video {
    width: 1020px;
    height: 320px;
    background-color: brown;
    }
  @media screen and (max-width: 600px){
      .cont-video {
        height: 200px;
        width: 420px;
      }
      .video-1 {
        width: 420px;
  }
    }
  @media screen and (max-width: 370px){
      .cont-video {
        height: 150px;
        width: 420px;
      }
      .video-1 {
        width: 420px;
  }
    }
</style>